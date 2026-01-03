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

  return (
    <div className="w-48 border border-gray-600 rounded-lg p-4 flex flex-col">
      <h2 className="text-white text-lg mb-4">Project</h2>
      <div className="flex flex-col gap-2">
        {components.map((comp) => (
          <button
            key={comp.id}
            onClick={() => setSelected(comp.id)}
            className={`text-left px-3 py-1.5 rounded text-sm transition-colors ${
              selected === comp.id
                ? "bg-gray-700 border border-gray-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {comp.name}
          </button>
        ))}
      </div>
    </div>
  );
}
