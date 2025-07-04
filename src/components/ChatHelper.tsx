"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AudioLines, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Message } from "@/data/types";
import { ShinyButton } from "./magicui/shiny-button";

// export function EmptyState({
//   onExampleClick,
// }: {
//   onExampleClick: (msg: string) => void;
// }) {
//   const examples = [
//     "Who is Suvaranjan?",
//     "Which programming languages does he know?",
//     "How to contact Suvaranjan?",
//   ];

//   return (
//     <div className="flex flex-col px-6 pt-6">
//       <div className="max-w-xl w-full space-y-4 rounded-xl">
//         <div className="flex items-start space-x-3">
//           {/* Icon on left */}
//           <div className="flex-shrink-0 pt-1">
//             <AudioLines className="w-5 h-5 text-muted-foreground" />
//           </div>

//           {/* Text content on right */}
//           <div className="flex-1 space-y-5">
//             <p className="text-sm text-muted-foreground">
//               You may ask anything related to Suvaranjan Pradhan. I have been
//               trained on his profile.
//             </p>

//             <div className="space-y-3">
//               <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
//                 Try asking
//               </p>
//               <div className="flex flex-col items-start space-y-2">
//                 {examples.map((example, index) => (
//                   <button
//                     key={index}
//                     onClick={() => onExampleClick(example)}
//                     className={cn(
//                       "inline-flex items-center px-3 py-2 text-sm rounded-lg",
//                       "border border-black/10 hover:border-black/20",
//                       "transition-all hover:bg-black/5 active:bg-black/10",
//                       "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black/30"
//                     )}
//                   >
//                     {example}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export function EmptyState({
  onExampleClick,
}: {
  onExampleClick: (msg: string) => void;
}) {
  const examples = [
    "Who is Suvaranjan?",
    "Which programming languages does he know?",
    "How to contact Suvaranjan?",
  ];

  return (
    <div className="flex flex-col px-6 pt-6">
      <div className="max-w-xl w-full space-y-4 rounded-xl">
        <div className="flex items-start space-x-3">
          {/* Icon on left */}
          <div className="flex-shrink-0 pt-1">
            <AudioLines className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Text content on right */}
          <div className="flex-1 space-y-5">
            <p className="text-sm text-muted-foreground">
              You may ask anything related to Suvaranjan Pradhan. I have been
              trained on his profile.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Try asking
              </p>
              <div className="flex flex-col items-start space-y-2">
                {examples.map((example, index) => (
                  <ShinyButton
                    key={index}
                    onClick={() => onExampleClick(example)}
                    className="inline-flex px-4 py-2 border border-black/10 hover:border-black/20"
                  >
                    {example}
                  </ShinyButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatMessages({ messages }: { messages: Message[] }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-white">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={cn(
            "text-sm leading-relaxed",
            msg.type === "user" ? "flex justify-end" : "flex justify-start"
          )}
        >
          <div
            className={cn(
              "px-4 py-2 rounded-lg max-w-[85%] sm:max-w-[75%]",
              msg.type === "user"
                ? "bg-gray-200 text-gray-900"
                : "bg-transparent text-gray-800 w-full"
            )}
          >
            {msg.msg}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ChatForm({
  input,
  setInput,
  sendMessage,
  disabled,
}: {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
  disabled: boolean;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 border rounded-full px-4 py-2 text-sm outline-none"
      />
      <Button
        type="submit"
        size="icon"
        className="rounded-full shrink-0"
        disabled={!input.trim() || disabled}
      >
        <SendHorizonal className="w-4 h-4" />
      </Button>
    </form>
  );
}
