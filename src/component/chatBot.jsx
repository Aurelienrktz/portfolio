import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

const url = "https://aure-ai.onrender.com/request";

const getOrCreateSessionId = () => {
  let id = sessionStorage.getItem("portfolio_chat_session_id");

  if (!id) {
    id = uuidv4();
    sessionStorage.setItem("portfolio_chat_session_id", id);
  }

  return id;
};

const ChatBot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState(() => {
    const savedMessages = sessionStorage.getItem("portfolio_chat_messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);
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
    setInput("");
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
        className={`fixed z-60 transition-all duration-300
  ${
    isOpen
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4 pointer-events-none"
  }
  w-full h-full inset-0

  md:inset-auto md:bottom-22 md:right-6 md:w-auto md:h-auto md:flex md:items-center md:justify-center
`}
      >
        <div className="w-full h-full md:w-[420px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
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

          <div className="flex flex-col h-[calc(100%-60px)] bg-slate-50 dark:bg-slate-900/50 custom-scrollbar">
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-slate-300
            dark:[&::-webkit-scrollbar-thumb]:bg-slate-700
            [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {messages.map((msg, index) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={index}
                    className={`flex ${
                      isUser ? "justify-end" : "justify-start"
                    } animate-fadeIn`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 text-sm shadow-sm transition-all duration-200 leading-relaxed ${
                        isUser
                          ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl rounded-tr-none shadow-blue-500/5"
                          : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl rounded-tl-none border border-slate-200/60 dark:border-slate-700/50"
                      }`}
                    >
                      {isUser ? (
                        msg.message
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{ __html: msg.message }}
                          className="whitespace-pre-wrap"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
              <div
                ref={messagesEndRef}
                className="block h-0 w-0 invisible overflow-hidden space-0"
              />
            </div>

            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!input.trim()) return;
                  handleSend(input);
                  setInput("");
                }}
                className="
        flex
        items-center
        gap-2
        bg-slate-50
        dark:bg-slate-800
        border
        border-slate-200/60
        dark:border-slate-700/60
        rounded-2xl
        p-1.5
        pl-4
        focus-within:border-sky-500
        focus-within:ring-2
        focus-within:ring-sky-500/10
        transition-all
        duration-200
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
          text-sm
          text-slate-800
          dark:text-slate-100
          placeholder-slate-400
          dark:placeholder-slate-500
        "
                />

                <button
                  type="submit"
                  className="
          w-9
          h-9
          rounded-xl
          bg-gradient-to-r
          from-sky-500
          to-blue-600
          text-white
          flex
          items-center
          justify-center
          hover:opacity-95
          active:scale-95
          transition-all
          duration-200
          shadow-sm
          cursor-pointer
        "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 translate-x-[1px] -translate-y-[1px]"
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
                bottom-22
                right-12
                z-40
                bg-slate-700
                dark:bg-white 
                text-white
                dark:text-slate-700
                px-5
                py-3
                rounded-xl
                rounded-br-none
                shadow-xl
                animate-bounce
                max-w-[280px]
              "
        >
          <p className="font-medium">{t("chat.intro1")}</p>

          <p className="text-sm text-gray-300 dark:text-slate-500">
            <i>{t("chat.intro2")}</i>
          </p>
        </div>
      )}
    </>
  );
};

export default ChatBot;
