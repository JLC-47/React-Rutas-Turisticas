import type { Dificultad, Ruta } from "./rutas";

export type Criterio = "precio" | "duracion";

export function filtarPorDificultad(lista: Ruta[], didicultad: Dificultad){
    return lista.filter((ruta) => ruta.dificultad === didicultad);
}


export function ordenarRutas(lista: Ruta[], criterio: Criterio){
    const newlista = [...lista];


    if (criterio === "precio") {
        return newlista.toSorted((a, b) => a.precio - b.precio);
    }
    return newlista.toSorted((a, b) => a.duracionHoras - b.duracionHoras);
}