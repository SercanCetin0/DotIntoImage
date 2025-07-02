"use client";

/**
 * ImageSelector Component
 * 
 * Kullanıcıdan bir resim dosyası seçmesini sağlar.
 * Seçilen dosyanın URL'sini üst component'e callback ile gönderir.
 * 
 * Props:
 * - onSelect: (string) => void — Seçilen resmin objectURL'si bu fonksiyonla aktarılır.
 */
export function ImageSelector({ onSelect }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold text-lg text-gray-700 dark:text-gray-300">
        İşaretlenecek resmi seçin:
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            // Dosyadan objectURL oluşturulur (geçici tarayıcı URL'si)
            const objectUrl = URL.createObjectURL(file);
            onSelect(objectUrl);
          }
        }}
        className="cursor-pointer"
      />
    </div>
  );
}
