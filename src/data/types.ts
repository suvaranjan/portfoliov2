// types.ts
export type Message = {
  type: "user" | "ai";
  msg: string;
};

export interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
