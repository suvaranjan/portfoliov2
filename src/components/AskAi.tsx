"use client";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChatForm, EmptyState, ChatMessages } from "./ChatHelper";
import type { Message } from "@/data/types";

export function AskAi({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const addMessage = (msg: string, type: "user" | "ai") => {
    setMessages((prev) => [...prev, { type, msg }]);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const sendMessage = async (preset?: string) => {
    const content = preset || input.trim();
    if (!content || isLoading) return;

    // Add user message
    addMessage(content, "user");
    setInput("");
    setIsLoading(true);

    try {
      // Prepare messages for API (convert to the format your server expects)
      const apiMessages = [
        ...messages.map((msg) => ({
          sender: msg.type === "user" ? "user" : ("model" as const),
          text: msg.msg,
        })),
        {
          sender: "user" as const,
          text: content,
        },
      ];

      // Call your API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add AI response
      addMessage(data.reply || "Sorry, I couldn't generate a response.", "ai");
    } catch (error) {
      console.error("Error sending message:", error);
      addMessage(
        "Sorry, there was an error processing your request. Please try again.",
        "ai"
      );
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  // Scroll to bottom when messages change
  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "w-full sm:max-w-2xl md:max-w-2xl xl:max-w-2xl",
          "sm:rounded-2xl rounded-lg p-0 overflow-hidden",
          "flex flex-col h-[80vh] sm:h-[85vh] xl:h-[90vh]"
        )}
      >
        <DialogHeader className="p-4 border-b bg-gray-50">
          <DialogTitle className="text-base sm:text-lg">
            AI Assistant
          </DialogTitle>
        </DialogHeader>

        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <EmptyState onExampleClick={sendMessage} />
          ) : (
            <ChatMessages messages={messages} />
          )}

          {/* Loading indicator */}
          {isLoading && (
            <div className="p-4 text-center text-gray-500">
              <div className="inline-flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500 mr-2"></div>
                AI is thinking...
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="border-t p-3 bg-gray-50">
          <ChatForm
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            disabled={isLoading}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

