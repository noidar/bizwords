"use client";

import { useState } from "react";

export default function ProgressManager() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleReset = () => {
    localStorage.removeItem("bizwords_progress");
    window.location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowConfirm(!showConfirm)}
        className="text-sm text-gray-500 hover:text-indigo-600 font-medium transition-colors"
        title="Manage Progress"
      >
        ⚙️ Progress
      </button>
      {showConfirm && (
        <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 w-56">
          <p className="text-sm text-gray-700 mb-3">Reset all progress?</p>
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
