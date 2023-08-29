import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Template from "./components/template/Template";
import Listen from "./pages/listen/Listen";
import Record from "./pages/record/Record";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Template />}>
                <Route index element={<h1>Index</h1>} />
                <Route path="/record" element={<Record />} />
                <Route path="/listen" element={<Listen />} />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </BrowserRouter>
);