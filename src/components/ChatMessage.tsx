import { Bot, User } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp?: string;
}

export const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      {isBot && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shadow-soft">
            <Bot className="h-4 w-4 text-primary-foreground" />
          </div>
        </div>
      )}
      
      <div className={`max-w-[80%] ${isBot ? 'order-1' : 'order-2'}`}>
        <Card className={`p-3 shadow-chat ${
          isBot 
            ? 'bg-card border-border/20' 
            : 'gradient-chat border-primary-light text-primary-dark'
        }`}>
          <p className="text-sm leading-relaxed">{message}</p>
          {timestamp && (
            <p className="text-xs opacity-70 mt-1">{timestamp}</p>
          )}
        </Card>
      </div>

      {!isBot && (
        <div className="flex-shrink-0 order-3">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-soft">
            <User className="h-4 w-4 text-secondary-foreground" />
          </div>
        </div>
      )}
    </div>
  );
};