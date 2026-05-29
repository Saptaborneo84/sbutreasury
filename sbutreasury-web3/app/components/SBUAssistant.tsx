"use client";

import { useState } from "react";

type Message = {
  role: "bot" | "user";
  text: string;
};

export default function SBUAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello. I am the SBU Assistant. I can help with Investor Portal, KYC/AML, token purchase, GoPlus Security, and project documents.",
    },
  ]);

  function reply(question: string) {
    const q = question.toLowerCase();

    if (q.includes("kyc") || q.includes("aml")) {
      return "KYC/AML screening is available from the AML Screening page. Verified investors can access the Investor Portal after wallet connection.";
    }

    if (q.includes("token") || q.includes("buy")) {
      return "Token purchase is available only after wallet connection through the Investor Portal. Minimum purchase is 1 ETH.";
    }

    if (q.includes("security") || q.includes("goplus")) {
      return "The SBU token security status is available from GoPlus Security Verification and Etherscan contract verification.";
    }

    if (q.includes("document") || q.includes("offering")) {
      return "Offering Memorandum, White Paper, Risk Disclosure, and KYC/EDD documents are available in the Document Vault.";
    }

    if (q.includes("wallet") || q.includes("connect")) {
      return "Please use the green Connect Wallet button in the top-right header. After connection, you will be redirected to the Investor Portal.";
    }

    return "Thank you. For investor access, please connect your wallet first. You can also open Documents, AML Screening, Monitor Dashboard, or Investor Portal from the homepage.";
  }

  function sendMessage() {
    const text = input.trim();
    if (!text) return;

    const botReply = reply(text);

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "bot", text: botReply },
    ]);

    setInput("");
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-xl"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-md overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl">
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">
        <div>
          <h3 className="text-xl font-black">SBU Assistant</h3>
          <p className="text-sm">🟢 Online · Investor Support</p>
        </div>

        <button onClick={() => setOpen(false)} className="text-3xl">
          ×
        </button>
      </div>

      <div className="h-80 space-y-4 overflow-y-auto bg-slate-50 p-5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "bot"
                ? "mr-8 rounded-2xl bg-white p-4 text-sm shadow"
                : "ml-8 rounded-2xl bg-blue-600 p-4 text-sm text-white"
            }
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-3 border-t bg-white p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="Ask a question..."
          className="flex-1 rounded-2xl bg-slate-100 px-5 py-4 outline-none"
        />

        <button
          onClick={sendMessage}
          className="rounded-2xl bg-blue-600 px-5 text-white"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
