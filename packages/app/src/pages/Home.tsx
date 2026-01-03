import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Vibe</h1>
        <p className="text-gray-400 mb-8">Start building your next project</p>
        <Link
          to="/editor"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open Editor
        </Link>
      </div>
    </div>
  );
}
