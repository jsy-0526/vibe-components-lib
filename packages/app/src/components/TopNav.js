import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function TopNav() {
    const [isTimelineOpen, setIsTimelineOpen] = useState(false);
    return (_jsxs("div", { className: "flex items-center justify-between h-14 px-4 border border-gray-600 rounded-lg mx-4 mt-4", children: [_jsx("div", { className: "flex-1", children: _jsx("input", { type: "text", placeholder: "Search...", className: "bg-transparent border border-gray-600 rounded px-3 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 w-64" }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { className: "text-gray-300 hover:text-white text-sm transition-colors", children: "export project" }), _jsxs("button", { className: "flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors", onClick: () => setIsTimelineOpen(!isTimelineOpen), children: ["Time Line", _jsx("span", { className: `transition-transform ${isTimelineOpen ? "rotate-180" : ""}`, children: "\u25BC" })] })] })] }));
}
