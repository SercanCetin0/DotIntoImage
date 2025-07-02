"use client";
import { useState } from "react";
import { ImageSelector } from "./components/ImageSelector";
import { Marker } from "./components//Marker";
import { AddMarkerModal } from "./components//AddMarkerModal";
import { PreviewModal } from "./components//PreviewModal";
import { MarkerList } from "./components/MarkerList";
import { Controls } from "./components//Controls";
import { getTooltipPosition } from "./utils/getTooltipPosition";

export default function ImageMarker() {
  const [imageSrc, setImageSrc] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState(null);
  const [modal, setModal] = useState({ open: false, x: 0, y: 0 });
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleImageClick = (e) => {
    if (!imageSrc) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setModal({ open: true, x, y });
    setFormData({ title: "", description: "" });
  };

  const addMarker = () => {
    if (formData.title && formData.description) {
      setMarkers([...markers, { ...modal, ...formData }]);
    }
    setModal({ open: false, x: 0, y: 0 });
  };

  const deleteMarker = (index) => {
    setMarkers((prev) => prev.filter((_, i) => i !== index));
    setActiveTooltipIndex(null);
  };

  const clearAllMarkers = () => {
    if (confirm("Tüm işaretlemeleri silmek istediğinize emin misiniz?")) {
      setMarkers([]);
      setActiveTooltipIndex(null);
    }
  };

  const saveAllMarkers = () => {
    console.log("Kayıt edilen tüm noktalar:", markers);
    alert("Tüm noktalar console'a kaydedildi (simülasyon).");
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-4 px-4">
      <ImageSelector
        onSelect={(url) => {
          setImageSrc(url);
          setMarkers([]);
          setActiveTooltipIndex(null);
        }}
      />

      <Controls
        hasMarkers={markers.length > 0}
        onSaveAll={saveAllMarkers}
        onClearAll={clearAllMarkers}
        onOpenPreview={() => setPreviewOpen(true)}
      />

      {imageSrc ? (
        <div className="relative w-full" onClick={handleImageClick}>
          <img
            src={imageSrc}
            alt="İşaretlenebilir görsel"
            className="w-full h-auto object-cover cursor-crosshair rounded-md border border-gray-300 dark:border-zinc-700"
          />

          {markers.map((marker, index) => (
            <Marker
              key={index}
              marker={marker}
              index={index}
              active={activeTooltipIndex === index}
              onClick={(e)=>{e.preventDefault(); e.stopPropagation();}}
              onToggle={(idx) =>
                setActiveTooltipIndex((prev) => (prev === idx ? null : idx))
              }
              onDelete={deleteMarker}
              getTooltipPosition={getTooltipPosition}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 rounded-md border border-gray-300 dark:border-zinc-700 text-gray-400">
          Lütfen üstteki butondan bir resim seçin
        </div>
      )}

      <AddMarkerModal
        open={modal.open}
        x={modal.x}
        y={modal.y}
        formData={formData}
        setFormData={setFormData}
        onClose={() => setModal({ open: false, x: 0, y: 0 })}
        onSave={addMarker}
      />

      <PreviewModal
        open={previewOpen}
        imageSrc={imageSrc}
        markers={markers}
        onClose={() => setPreviewOpen(false)}
      />

      <MarkerList markers={markers} onDelete={deleteMarker} />
    </div>
  );
}
