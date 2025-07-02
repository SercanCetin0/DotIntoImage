// components/Marker.jsx
import React from "react";

/**
 * Marker Component
 * 
 * Görsel üzerindeki bir işaretleyiciyi gösterir.
 * Marker üzerine tıklanınca tooltip açılır/kapanır.
 * Tooltip pozisyonu, marker konumuna göre hesaplanır.
 * 
 * Props:
 * - marker: { x, y, title, description }
 * - index: number
 * - active: boolean
 * - onToggle: (index) => void
 * - onDelete: (index) => void
 * - getTooltipPosition: (x, y) => { v, h }
 */
export function Marker({ marker, index, active, onToggle, onDelete, getTooltipPosition }) {
  const { v, h } = getTooltipPosition(marker.x, marker.y);

  const tooltipStyle = {
    top: v === "top" ? "-120%" : v === "bottom" ? "160%" : "50%",
    left: h === "left" ? "-320%" : h === "right" ? "10%" : "50%",
    transform: h === "center" ? "translateX(-50%)" : "",
  };

  return (
    <div
      className="absolute z-10"
      style={{ top: `${marker.y}%`, left: `${marker.x}%`, transform: "translate(-50%, -50%)" }}
    >
      {/* Marker başlığı */}
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle(index);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle(index);
          }
        }}
        className="cursor-pointer px-2 py-2 uppercase bg-blue-600 rounded-full text-white text-xs font-bold shadow hover:bg-blue-700 transition select-none"
      >
        {marker.title}
      </div>

      {/* Tooltip gösterimi */}
      {active && (
        <div className="absolute mt-5 w-64 z-20 text-left" style={tooltipStyle}>
          <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl p-4 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                📌 {marker.title}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete(index);
                }}
                className="text-red-500 hover:text-red-700 text-sm font-bold ml-2"
                aria-label={`Delete marker ${marker.title}`}
              >
                Sil
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {marker.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
