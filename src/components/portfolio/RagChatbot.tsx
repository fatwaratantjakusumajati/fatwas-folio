import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  Bot,
  ExternalLink,
  MessageSquareText,
  RotateCcw,
  Send,
  X,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useChatbot } from "@/contexts/ChatbotContext";

interface SourceRef {
  id: string;
  title: string;
  category: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: SourceRef[];
  error?: boolean;
}

const STORAGE_KEY = "fatwa_portfolio_chat_v2";

export const RagChatbot = () => {
  const { pathname } = useLocation();
  const { lang, t } = useLanguage();
  const { isOpen, closeChat, toggleChat, pendingPrompt, consumePendingPrompt } = useChatbot();
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved) as Message[];
      return Array.isArray(parsed) ? parsed.slice(-20) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const starterPrompts =
    lang === "id"
      ? [
          "Siapa Fatwa dan apa keahlian utamanya?",
          "Ceritakan pengalaman kerja dan magang Fatwa",
          "Proyek AI & web apa saja yang pernah dibuat Fatwa?",
          "Apa pendidikan, sertifikasi, dan kontak Fatwa?",
        ]
      : [
          "Who is Fatwa and what are his core skills?",
          "Tell me about Fatwa's work & internship experience",
          "What AI & web projects has Fatwa built?",
          "What are Fatwa's education, certifications & contact info?",
        ];

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-20)));
    } catch {
      // Ignore storage quota errors
    }
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => {
        inputRef.current?.focus();
      }, 60);
    }
  }, [isOpen]);

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    const nextHistory = messages
      .filter((m) => !m.error)
      .map((m) => ({ role: m.role, content: m.content }));

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: nextHistory,
          lang,
        }),
      });

      let data: {
        reply?: string;
        sources?: SourceRef[];
        error?: string;
      } = {};
      try {
        data = (await res.json()) as typeof data;
      } catch {
        data = {};
      }

      if (!res.ok || !data.reply) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        role: "assistant",
        content: data.reply,
        sources: data.sources,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: unknown) {
      const errorText =
        err instanceof Error ? err.message : "Unable to reach the AI assistant right now.";
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: errorText,
          error: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && pendingPrompt) {
      const prompt = consumePendingPrompt();
      if (prompt) {
        void sendMessage(prompt);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, pendingPrompt]);

  const handleReset = () => {
    setMessages([]);
    setInput("");
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  if (pathname === "/") return null;

  return (
    <>
      {/* Persistent Floating Chat Launcher */}
      {!isOpen && (
        <button
          type="button"
          onClick={toggleChat}
          aria-label="Open Fatwa R. AI Chatbot"
          className="fixed bottom-5 right-5 z-50 neo-btn px-5 py-3 text-sm bg-[#FACC15] text-[#16181D] gap-2.5 shadow-[5px_5px_0_var(--ink)]"
        >
          <MessageSquareText className="h-4 w-4" />
          <span>{t("nav.askAi")}</span>
        </button>
      )}

      {/* Persistent Floating Chat Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-label={t("chat.title")}
          className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-[430px] z-50 rounded-[24px] bg-card text-foreground border-[2.5px] border-[var(--ink)] shadow-[7px_7px_0_var(--ink)] flex flex-col overflow-hidden max-h-[min(86vh,620px)]"
        >
          {/* Header */}
          <div className="shrink-0 bg-[#2ED47A] text-[#16181D] border-b-[2.5px] border-[var(--ink)] px-4 py-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-white border-2 border-[#16181D] flex items-center justify-center shrink-0">
                <Bot className="h-5 w-5 text-[#16181D]" />
              </div>
              <div className="min-w-0">
                <div className="font-heading font-extrabold text-sm leading-tight truncate">
                  {t("chat.title")}
                </div>
                <div className="text-[11px] font-medium text-[#16181D]/80 truncate">
                  {t("chat.subtitle")}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href="https://www.kaggle.com/code/fatwaratantjak/fatwa-folio"
                target="_blank"
                rel="noreferrer"
                title="Kaggle RAG Notebook"
                className="px-2.5 py-1 rounded-full bg-white text-[#16181D] border-2 border-[#16181D] text-[10px] font-heading font-bold inline-flex items-center gap-1 hover:bg-[#FEF08A]"
              >
                <span>Kaggle</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <button
                type="button"
                onClick={handleReset}
                title={t("chat.reset")}
                aria-label={t("chat.reset")}
                className="w-8 h-8 rounded-full bg-white text-[#16181D] border-2 border-[#16181D] flex items-center justify-center hover:bg-[#FEF08A]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={closeChat}
                aria-label="Close chat"
                className="w-8 h-8 rounded-full bg-white text-[#16181D] border-2 border-[#16181D] flex items-center justify-center hover:bg-[#F78EB6]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 min-h-[140px] overflow-y-auto p-4 space-y-3.5 bg-background/60"
          >
            {/* Welcome bubble */}
            <div className="rounded-2xl bg-card border-2 border-[var(--ink)] p-3.5 text-xs sm:text-sm leading-relaxed shadow-[3px_3px_0_var(--ink)]">
              <p>{t("chat.welcome")}</p>
            </div>

            {/* Starter prompts when empty */}
            {messages.length === 0 && !loading && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {starterPrompts.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => void sendMessage(q)}
                    className="text-left px-3 py-1.5 rounded-xl text-xs font-medium bg-[#FEF08A] text-[#16181D] border-2 border-[#16181D] hover:bg-[#FACC15] transition-colors cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed border-2 border-[var(--ink)] whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-[#6CB4FA] text-[#16181D] font-medium shadow-[3px_3px_0_var(--ink)]"
                      : msg.error
                      ? "bg-[#FEE2E2] text-[#991B1B]"
                      : "bg-card text-foreground shadow-[3px_3px_0_var(--ink)]"
                  }`}
                >
                  {msg.error && (
                    <div className="flex items-center gap-1.5 font-heading font-bold mb-1">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>Error</span>
                    </div>
                  )}
                  {msg.content}
                </div>

                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-1.5 flex flex-wrap items-center gap-1 max-w-[92%]">
                    <span className="text-[10px] font-mono text-muted-foreground mr-1">
                      {t("chat.sources")}
                    </span>
                    {msg.sources.slice(0, 3).map((src) => (
                      <span
                        key={src.id}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-foreground border border-[var(--ink)]/40"
                      >
                        {src.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="rounded-2xl bg-card border-2 border-[var(--ink)] px-3.5 py-2.5 text-xs text-muted-foreground inline-flex items-center gap-2">
                <span className="font-mono">{t("chat.thinking")}</span>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage(input);
            }}
            className="shrink-0 p-3 border-t-[2.5px] border-[var(--ink)] bg-card flex items-end gap-2"
          >
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  void sendMessage(input);
                }
              }}
              placeholder={t("chat.placeholder")}
              className="flex-1 min-w-0 resize-none rounded-xl bg-background text-foreground placeholder:text-muted-foreground px-3 py-2 text-xs sm:text-sm border-2 border-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="neo-btn h-9 w-9 shrink-0 bg-[#FACC15] text-[#16181D] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
