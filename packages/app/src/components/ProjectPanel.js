import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const components = [
    { id: "button", name: "Button" },
    { id: "form", name: "Form" },
    { id: "rate", name: "Rate" },
    { id: "switch", name: "Switch" },
    { id: "ext", name: "ext..." },
];
export function ProjectPanel() {
    const [selected, setSelected] = useState("button");
    return (_jsxs("div", { className: "w-48 border border-gray-600 rounded-lg p-4 flex flex-col", children: [_jsx("h2", { className: "text-white text-lg mb-4", children: "Project" }), _jsx("div", { className: "flex flex-col gap-2", children: components.map((comp) => (_jsx("button", { onClick: () => setSelected(comp.id), className: `text-left px-3 py-1.5 rounded text-sm transition-colors ${selected === comp.id
                        ? "bg-gray-700 border border-gray-500 text-white"
                        : "text-gray-400 hover:text-white"}`, children: comp.name }, comp.id))) })] }));
}
