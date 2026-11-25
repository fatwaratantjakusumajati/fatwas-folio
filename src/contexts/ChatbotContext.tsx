import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface ChatbotCtx {
  isOpen: boolean;
  openChat: (initialPrompt?: string) => void;
  closeChat: () => void;
  toggleChat: () => void;
  pendingPrompt: string | null;
  consumePendingPrompt: () => string | null;
}

const ChatbotContext = createContext<ChatbotCtx | null>(null);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);

  const openChat = useCallback((initialPrompt?: string) => {
    if (initialPrompt && initialPrompt.trim()) {
      setPendingPrompt(initialPrompt.trim());
    }
    setIsOpen(true);
  }, []);

  const closeChat = useCallback(() => setIsOpen(false), []);
  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

  const consumePendingPrompt = useCallback(() => {
    const prompt = pendingPrompt;
    setPendingPrompt(null);
    return prompt;
  }, [pendingPrompt]);

  return (
    <ChatbotContext.Provider
      value={{ isOpen, openChat, closeChat, toggleChat, pendingPrompt, consumePendingPrompt }}
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
