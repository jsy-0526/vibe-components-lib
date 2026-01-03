import { useState } from "react";

export function PromptInput() {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (prompt.trim()) {
      console.log("Submitting prompt:", prompt);
      setPrompt("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border border-gray-600 rounded-lg p-4 flex items-center gap-4">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="input some prompt"
        className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
      />
      <button
        onClick={handleSubmit}
        className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-gray-400 transition-colors"
      >
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}
