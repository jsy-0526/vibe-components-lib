import { useParams } from "react-router-dom";
import { ProjectPanel } from "../components/ProjectPanel";
import { Canvas } from "../components/Canvas";
import { PromptInput } from "../components/PromptInput";
import { CompSettings } from "../components/CompSettings";

export function EditorPage() {
  const { projectId } = useParams();

  return (
    <div className="flex-1 flex gap-4 p-4">
      <ProjectPanel />

      <div className="flex-1 flex flex-col gap-4">
        <Canvas />
        <PromptInput />
      </div>

      <CompSettings />
    </div>
  );
}
