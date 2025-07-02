/**
 * AddMarkerModal Component
 * 
 * Yeni marker eklemek için başlık ve açıklama girilen modal.
 * Kaydet ve İptal butonları içerir.
 * 
 * Props:
 * - open: boolean — Modal açık mı?
 * - x, y: number — Marker'ın yüzdelik konumu (modal içinde kullanılabilir)
 * - formData: { title: string, description: string } — Form state
 * - setFormData: (newForm) => void — Form state güncelleme
 * - onClose: () => void — Modal kapatma callback
 * - onSave: () => void — Kaydetme callback
 */
export function AddMarkerModal({ open, x, y, formData, setFormData, onClose, onSave }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="animate-fadeIn bg-white dark:bg-zinc-900 rounded-2xl p-6 w-[90%] max-w-md shadow-2xl border border-gray-200 dark:border-zinc-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">🎯 Yeni Nokta Ekle</h2>

        <input
          type="text"
          placeholder="Başlık"
          className="w-full border border-gray-300 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-3"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <textarea
          placeholder="Açıklama"
          className="w-full border border-gray-300 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none mb-4"
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition">
            İptal
          </button>
          <button
            onClick={onSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}
