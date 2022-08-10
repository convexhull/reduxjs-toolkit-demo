import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Pokemons from "./pages/Pokemon";
import Cats from "./pages/Cats";

function App() {
    return (
        <div className="App">
            <div>
                <Link to="/pokemon">Pokemon</Link>
                <Link to="/cats">Cats</Link>
            </div>
            <Routes>
                <Route path="/cats" element={<Cats />} />
                <Route path="/pokemon" element={<Pokemons />} />
            </Routes>
        </div>
    );
}

export default App;
