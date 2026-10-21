import type { Ruta } from "../datos/rutas";

interface Props {
  ruta: Ruta;
}


export function TarjetaRuta({ ruta }: Props) {
  return (
    <article className="tarjeta">
      <h3>{ruta.nombre}</h3>
      <p>Municipio: {ruta.municipio}</p>
      <p>Duración: {ruta.duracionHoras} horas</p>
      <p>Precio: ${ruta.precio} pesos</p>
      <p>Dificultad: {ruta.dificultad}</p>
      <input type="3" aria-label="Personas" />

      {ruta.incluyeTransporte && <p>Incluye Transporte</p>}
      <p>{ruta.duracionHoras < 5 ? "Ruta corta" : "Jornada completa" }</p>
    </article>
  );
}