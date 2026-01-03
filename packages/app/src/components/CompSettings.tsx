export function CompSettings() {
  return (
    <div className="w-48 border border-gray-600 rounded-lg p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg">Comp Setting</h2>
        <button className="text-gray-400 hover:text-white">
          <span className="flex gap-0.5">
            <span className="w-1 h-1 bg-current rounded-full" />
            <span className="w-1 h-1 bg-current rounded-full" />
            <span className="w-1 h-1 bg-current rounded-full" />
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <label className="text-gray-400 text-sm">position</label>
          <div className="mt-2 border border-gray-600 rounded p-2 h-16" />
        </div>
        <div>
          <label className="text-gray-400 text-sm">background</label>
          <div className="mt-2 border border-gray-600 rounded p-2 h-16" />
        </div>
      </div>
    </div>
  );
}
