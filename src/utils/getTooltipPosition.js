/**
 * getTooltipPosition
 * 
 * Marker konumuna göre tooltip'in dikey ve yatay pozisyonunu hesaplar.
 * 
 * Parametreler:
 * - x: marker'ın soldan yüzdesel konumu (0-100)
 * - y: marker'ın üstten yüzdesel konumu (0-100)
 * 
 * Döner:
 * - { v: 'top' | 'middle' | 'bottom', h: 'left' | 'center' | 'right' }
 */
export function getTooltipPosition(x, y) {
  const v = y < 20 ? "bottom" : y > 80 ? "top" : "middle";
  const h = x < 20 ? "right" : x > 80 ? "left" : "center";
  return { v, h };
}
