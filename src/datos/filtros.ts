import type { Dificultad, Ruta } from "./rutas";

export type Criterio = "precio" | "duracion";

export function filtarPorDificultad(lista: Ruta[], didicultad: Dificultad) {
    return lista.filter((ruta) => ruta.dificultad === didicultad);
}


export function ordenarRutas(rutas: Ruta[], criterio: Criterio, order: "asc" | "des" = "asc") {
    const campo = criterio === "precio" ? "precio" : "duracionHoras";


    return rutas.toSorted((a, b) =>
        order === "asc"? a[campo] - b[campo]
        : b[campo] - a[campo]
    )
}