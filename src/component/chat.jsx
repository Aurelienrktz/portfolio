import React, { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import { useTranslation } from "react-i18next";
// const { i18n } = useTranslation();
const style = document.createElement("style");
style.textContent = `:root {
    --chat--color--primary: #3b82f6; /* Bleu tech */
    --chat--color--primary-shade-50: #2563eb;
    --chat--color--primary--shade-100: #1d4ed8;
    
    --chat--color--secondary: #22d3ee; /* Cyan IA */
    --chat--color-secondary-shade-50: #06b6d4;
    
  --chat--color-white: #e5e7eb;
  --chat--color-light: #111827;
  --chat--color-light-shade-50: #1f2933;
  --chat--color-light-shade-100: #374151;

  --chat--color-medium: #6b7280;
  --chat--color-dark: #0b1026;
  --chat--color-disabled: #777980;
  --chat--color-typing: #404040;

  --chat--spacing: 1rem;
  --chat--border-radius: 1rem;
  --chat--transition-duration: 0.15s;

  --chat--window--width: 400px;
  --chat--window--height: 600px;

  --chat--header-height: auto;
  --chat--header--padding: var(--chat--spacing);
  --chat--header--background: var(--chat--color-dark);
  --chat--header--color: var(--chat--color-light);
  --chat--header--border-top: none;
  --chat--header--border-bottom: none;
  --chat--header--border-bottom: none;
  --chat--header--border-bottom: none;
  --chat--heading--font-size: 2em;
--chat--header--color: #ffffff;  /* titre blanc */
--chat--subtitle--color: #ffffff; /* sous-titre blanc */
  --chat--subtitle--font-size: inherit;
  --chat--subtitle--line-height: 1.8;

  --chat--textarea--height: 50px;


  --chat--message--font-size: 1rem;
  --chat--message--padding: var(--chat--spacing);
  --chat--message--border-radius: var(--chat--border-radius);
  --chat--message-line-height: 1.8;
  --chat--message--bot--background: var(--chat--color-white);
  --chat--message--bot--color: var(--chat--color-dark);
  --chat--message--bot--border: none;
  --chat--message--user--background: var(--chat--color--secondary);
  --chat--message--user--color: var(--chat--color-white);
  --chat--message--user--border: none;
  --chat--message--pre--background: rgba(0, 0, 0, 0.05);

  --chat--toggle--background: var(--chat--color--primary);
  --chat--toggle--hover--background: var(--chat--color--primary-shade-50);
  --chat--toggle--active--background: var(--chat--color--primary--shade-100);
  --chat--toggle--color: var(--chat--color-white);
  --chat--toggle--size: 64px;


}`;
document.head.appendChild(style);

const Chat = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://aurelien2004.app.n8n.cloud/webhook/1e20d957-dd3a-4c69-92ee-5c4ea88e192e/chat",
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: "#n8n-chat",
      mode: "window",
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      loadPreviousSession: true,
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: "fr",
      initialMessages: [],
      i18n: {
        en: {
          title: "Aurelien AI🤖",
          subtitle: "I'm here to help you 24/7.",
          footer: "",
          getStarted: "New message",
          inputPlaceholder: "Type your question..",
        },
        fr: {
          title: "Aurelien AI🤖",
          subtitle: "Je suis ici pour t'aider 24/7.",
          footer: "",
          getStarted: "Nouveau message",
          inputPlaceholder: "Taper votre question..",
        },
      },
      enableStreaming: false,
    });
  }, []);

  return (
    <>
      <div id="n8n-chat"></div>
    </>
  );
};

export default Chat;
