import { createContext, useContext, useState, ReactNode } from "react";

interface ChatbotCtx {
  isOpen: boolean;
  pendingPrompt: string | null;
  openChat: (initialPrompt?: string) => void;
  closeChat: () => void;
  toggleChat: () => void;
  consumePendingPrompt: () => string | null;
}

const ChatbotContext = createContext<ChatbotCtx | null>(null);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);

  const openChat = (initialPrompt?: string) => {
    if (initialPrompt) {
      setPendingPrompt(initialPrompt);
    }
    setIsOpen(true);
  };

  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen((v) => !v);

  const consumePendingPrompt = () => {
    const p = pendingPrompt;
    setPendingPrompt(null);
    return p;
  };

  return (
    <ChatbotContext.Provider
      value={{ isOpen, pendingPrompt, openChat, closeChat, toggleChat, consumePendingPrompt }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const ctx = useContext(ChatbotContext);
  if (!ctx) throw new Error("useChatbot must be used within ChatbotProvider");
  return ctx;
};
