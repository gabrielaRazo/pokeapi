import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPokemons from "../pages/listPage";
import PokemonDetails from "../pages/pokemonPage";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ListPokemons />} />
                    <Route path="/pokemonInfo/:id" element={<PokemonDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
