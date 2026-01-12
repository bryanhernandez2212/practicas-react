export function Imagen({ ancho, alto, src, posicion, margen}) {
  return (
    <img
      style={{ width: ancho, height: alto, display: posicion, margin : margen }}
      src={src}
    />
  );
}
