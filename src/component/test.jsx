import React, { useState, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useTranslation } from "react-i18next";

const url = "http://172.20.10.4:8002/request";

const getOrCreateSessionId = () => {
  let id = sessionStorage.getItem("portfolio_chat_session_id");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("portfolio_chat_session_id", id);
  }
  return id;
};

const ChatBot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState(() => {
    const savedMessages = sessionStorage.getItem("portfolio_chat_messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("portfolio_chat_messages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    const currentSessionId = getOrCreateSessionId();
    const userMessage = {
      message: text,
      sender: "user",
      direction: "outgoing",
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text, sessionId: currentSessionId }),
      });

      if (!response.ok) {
        throw new Error("Erreur réseau ou réponse invalide");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          message: data.answer,
          sender: "assistant",
          direction: "incoming",
        },
      ]);
    } catch (error) {
      console.error("Erreur lors de la requête:", error);

      setMessages((prev) => [
        ...prev,
        {
          message: t("chat.reseau_error"),
          sender: "assistant",
          direction: "incoming",
        },
      ]);
    }
  };

  return (
    <>
      <div
        className={`fixed z-200 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } 
      inset-0 
      md:inset-auto md:bottom-22 md:right-6 md:flex md:justify-center md:items-center`}
      >
        <div
          className="w-full h-full bg-white dark:bg-slate-900 overflow-hidden shadow-2xl 
    rounded-none border-none 
    md:w-[420px] md:h-[550px] md:rounded-2xl md:border md:border-gray-200 md:dark:border-slate-700"
        >
          <div
            className="flex justify-between items-center px-4 py-3 bg-gradient-to-r
          from-sky-500
          to-blue-600
          text-white"
          >
            <div>
              <h2 className="font-semibold">Auré AI</h2>
              <p className="text-xs opacity-90 flex items-center gap-1 ">
                {" "}
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>{" "}
                {t("chat.status")}
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-lg hover:scale-110 transition-all duration-300"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col h-[calc(100%-60px)] bg-white dark:bg-slate-900">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={index}
                    className={`flex ${
                      isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
                        isUser
                          ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-tr-none"
                          : "bg-slate-100 dark:bg-slate-800 text-gray-800 dark:text-slate-100 rounded-tl-none"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer moderne */}
            <div className="p-3 border-t border-slate-200  bg-white ">
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Empêche le rechargement de la page
                  if (!input.trim()) return;

                  handleSend(input);
                  setInput(""); // On vide l'input SEULEMENT ici, après l'envoi
                }}
                className="
                flex
                items-center
                gap-2
                bg-slate-200
                rounded-2xl
                p-2
              "
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("chat.placeholders")}
                  className="
                    flex-1
                    bg-transparent
                    outline-none
                    px-2
                    text-gray-800
                  "
                />

                <button
                  type="submit"
                  onTouchStart={(e) => {
                    if (!input.trim()) return;
                    handleSend(input);
                    setInput("");
                  }}
                  className="
          w-10
          h-10
          rounded-xl
          bg-gradient-to-r
          from-sky-500
          to-blue-600
          text-white
          flex
          items-center
          justify-center
          hover:scale-105
          transition-all
          duration-300
          shadow-md
        "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3 21l18-9L3 3l3 9h7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button
        className="
        fixed
        bottom-6
        right-6
        w-14
        h-14
        rounded-full
        bg-gradient-to-r
          from-sky-500
          to-blue-600
          text-white
        shadow-lg
        cursor-pointer
        hover:scale-110
        transition-all
        duration-300
        z-50
        "
        onClick={() => {
          setIsOpen(!isOpen);
          setShowWelcome(false);
        }}
      >
        💬
      </button>
      {showWelcome && !isOpen && (
        <div
          className="
                fixed
                bottom-24
                right-6
                z-40
                bg-slate-700
                dark:bg-white 
                text-white
                dark:text-slate-700
                px-5
                py-3
                rounded-xl
                shadow-xl
                animate-bounce
                max-w-[280px]
              "
        >
          <p className="font-medium">{t("chat.intro1")}</p>

          <p className="text-sm text-gray-300 dark:text-slate-500">
            <i>{t("chat.intro2")}</i>
          </p>

          <div
            className="
            absolute
            right-4
            -bottom-2
            w-4
            h-4
          bg-slate-700
          dark:bg-white 
            rotate-45
            shadow-md
          "
          />
        </div>
      )}
    </>
  );
};

export default ChatBot;
