export function Boton ({ text, color, tamaño, onClick , posicion, margen}) {
  return (
    <button
      style={{ backgroundColor: color, fontSize: tamaño, display: posicion, margin : margen}}
      onClick={onClick}
    >
      {text}
    </button>
  );
}