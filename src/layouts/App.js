import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/dashoard";
import Pokemon from "../components/pokemon/pokemon";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pokemonInfo/:id" element={<Pokemon />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
