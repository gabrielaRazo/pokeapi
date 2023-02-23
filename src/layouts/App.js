import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/dashoard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
