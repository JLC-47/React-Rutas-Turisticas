
import './App.css'
import { ListaRutas } from './components/ListaRutas';
import { filtarPorDificultad, ordenarRutas } from './datos/filtros';

import { rutas } from './datos/rutas';

function App() {

    //const filtradas = filtarPorDificultad(rutas, "todas");
    const visibles = ordenarRutas(rutas, "precio");

    return (
        <div>
            <h1>Rutas turísticas del Quindío</h1>
            <p>Se encontraron {visibles.length} rutas</p>
            <ListaRutas rutas={visibles} />
        </div>
    );
}

export default App
