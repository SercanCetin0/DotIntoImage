/**
 * MarkerList Component
 * 
 * Marker listesini alt tarafta kartlar halinde gösterir.
 * Her kartta silme butonu vardır.
 * 
 * Props:
 * - markers: Array<{ title: string, description: string }>
 * - onDelete: (index) => void — Marker silme callback
 */
export function MarkerList({ markers, onDelete }) {
  if (markers.length === 0) return null;

  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">🔍 Eklenen Noktalar</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {markers.map((marker, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg p-4 shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm">
                {index + 1}. {marker.title}
              </h4>
              <button
                onClick={() => onDelete(index)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Sil
              </button>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{marker.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
