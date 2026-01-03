import { useState } from "react";

export function TopNav() {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  return (
    <div className="flex items-center justify-between h-14 px-4 border border-gray-600 rounded-lg mx-4 mt-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border border-gray-600 rounded px-3 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 w-64"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-300 hover:text-white text-sm transition-colors">
          export project
        </button>
        <button
          className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors"
          onClick={() => setIsTimelineOpen(!isTimelineOpen)}
        >
          Time Line
          <span className={`transition-transform ${isTimelineOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>
      </div>
    </div>
  );
}
