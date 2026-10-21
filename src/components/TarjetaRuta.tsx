import type { Ruta } from "../datos/rutas";
import "./Tarjeta.css"

interface Props {
  ruta: Ruta;
}


export function TarjetaRuta({ ruta }: Props) {
  return (
    <article className="tarjeta">
      <div className="tarjeta-icono">🌿</div>

      <h3>{ruta.nombre}</h3>

      <div className="tarjeta-detalles">
        <p>
          <span>📍</span>
          <strong>Municipio:</strong> {ruta.municipio}
        </p>

        <p>
          <span>⏳</span>
          <strong>Duración:</strong> {ruta.duracionHoras} horas
        </p>

        <p>
          <span>💰</span>
          <strong>Precio:</strong> ${ruta.precio} pesos
        </p>

        <p>
          <span>🥾</span>
          <strong>Dificultad:</strong> {ruta.dificultad}
        </p>
      </div>

      {ruta.incluyeTransporte && (
        <p className="transporte">🚐 Incluye transporte</p>
      )}

      <div className="tarjeta-pie">
        <span className="etiqueta">
          {ruta.duracionHoras < 5
            ? "⚡ Ruta corta"
            : "🌅 Jornada completa"}
        </span>
        <span className="hoja">✦</span>
      </div>
    </article>
  );
}