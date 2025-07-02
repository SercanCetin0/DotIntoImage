/**
 * MarkerTooltip Component
 * 
 * Bir marker'a tıklanınca açılan tooltip içeriği.
 * Marker başlığı ve açıklamasını gösterir.
 * Sil butonuyla ilgili marker'ı kaldırmak için callback çağırır.
 * 
 * Props:
 * - marker: { title: string, description: string } — Gösterilecek veri.
 * - onDelete: () => void — Silme işlemi için çağrılır.
 */
export function MarkerTooltip({ marker, onDelete }) {
  return (
    <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-blue-600 dark:text-blue-400 font-semibold text-base">
          📌 {marker.title}
        </span>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 text-sm font-bold ml-2"
        >
          Sil
        </button>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {marker.description}
      </p>
    </div>
  );
}
