import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Repositories from "./pages/repositories/Repositories";
import App from "./pages/home/index";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/repositories" element={<Repositories />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;