"use client"

import React from "react";
import CountButton from "./CountButton.jsx";
import CountButton2 from "./CountButton2.jsx"
import ProductSearch from "./productSearch.jsx"
import "./pages.css";

export default function Page() {
    return (
        <div>
            <a href="https://github.com/Kbsmitty/nextJS">GitHub Repository</a>
            <h1>Button Test</h1>
            <CountButton />
            <CountButton2 />
            <h1>Product Search</h1>
            <ProductSearch />
        </div>
    );
}