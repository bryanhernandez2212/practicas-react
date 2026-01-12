export function Parrafo({ texto, color, tamaño, posicion }) {
  return (
    <p
      style={{
        color: color,
        fontSize: tamaño,
        textAlign: posicion,
      }}
    >
      {texto}
    </p>
  );
} 
