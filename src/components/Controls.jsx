/**
 * Controls Component
 * 
 * Marker varsa alt kısımda butonlar gösterir:
 * - Tümünü Kaydet (console.log ile simülasyon)
 * - Tümünü Temizle (confirm ile temizler)
 * - Önizleme (önizleme modalını açar)
 * 
 * Props:
 * - hasMarkers: boolean — Marker var mı?
 * - onSaveAll: () => void
 * - onClearAll: () => void
 * - onOpenPreview: () => void
 */
export function Controls({ hasMarkers, onSaveAll, onClearAll, onOpenPreview }) {
  if (!hasMarkers) return null;

  return (
    <div className="flex gap-4 justify-end mb-4">
      <button
        onClick={onSaveAll}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
      >
        💾 Tümünü Kaydet
      </button>
      <button
        onClick={onClearAll}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow"
      >
        🗑️ Tümünü Temizle
      </button>
      <button
        onClick={onOpenPreview}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
      >
        👁️ Önizleme
      </button>
    </div>
  );
}
