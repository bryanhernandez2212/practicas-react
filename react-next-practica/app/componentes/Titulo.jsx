export function Titulo({ texto, color, tamaño, fuente, posicion }) {
  return (
    <h1 style={{ color: color, fontSize: tamaño, fontFamily: fuente, textAlign: posicion }}>
      {texto}
    </h1>
  );
}