import type { Ruta } from "../datos/rutas";
import { TarjetaRuta } from "./TarjetaRuta";

interface Props {
    rutas: Ruta[];
}


export function ListaRutas({ rutas}: Props ){
    if (rutas.length === 0) {
        return <p>No hay rutas con esos criterios.</p>;
    }

    return (
        <div>
            {rutas.map((ruta) => (
                <TarjetaRuta key={ruta.id} ruta={ruta}/>
            ))}
        </div>
    );
}