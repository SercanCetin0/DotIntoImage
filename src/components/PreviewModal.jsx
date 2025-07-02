import { useState } from "react";

/**
 * PreviewModal Component
 * 
 * Markerların ve seçilen resmin önizlemesini gösterir.
 * Markerlar üzerine tıklanınca tooltip açılır.
 * 
 * Props:
 * - open: boolean — Modal açık mı?
 * - imageSrc: string — Gösterilecek resim URL'si
 * - markers: Array<{ title: string, description: string, x: number, y: number }>
 * - onClose: () => void — Modal kapatma callback
 */
export function PreviewModal({ open, imageSrc, markers, onClose }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!open) return null;

  return (
    <div className="fixed max-w-lg inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-4 max-w-3xl w-full shadow-2xl border border-gray-200 dark:border-zinc-700">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">👁️ Önizleme</h2>

        <div className="relative w-full cursor-default">
          <img
            src={imageSrc}
            alt="Önizleme resmi"
            className="w-full h-auto rounded-md border border-gray-300 dark:border-zinc-700"
          />
          {markers.map((marker, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="absolute z-20 cursor-pointer"
                style={{ top: `${marker.y}%`, left: `${marker.x}%`, transform: "translate(-50%, -50%)" }}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className="bg-blue-600 rounded-full text-white text-xs font-bold px-2 py-1 shadow-lg select-none">
                  {marker.title}
                </div>

                {isActive && (
                  <div
                    className="absolute mt-5 w-64 z-30 text-left bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl p-4 transition-all duration-300"
                    style={{ top: "160%", left: "50%", transform: "translateX(-50%)" }}
                  >
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                      📌 {marker.title}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-1">
                      {marker.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            onClose();
            setActiveIndex(null);
          }}
          className="mt-6 bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400 dark:hover:bg-zinc-600 text-gray-700 dark:text-gray-300 font-semibold px-4 py-2 rounded-lg transition"
        >
          Kapat
        </button>
      </div>
    </div>
  );
}
