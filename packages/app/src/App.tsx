import { Outlet } from "react-router-dom";
import { TopNav } from "./components/TopNav";

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
      <TopNav />
      <Outlet />
    </div>
  );
}

export default App;
