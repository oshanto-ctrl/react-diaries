import React from "react";
import { useState, useMemo } from "react";

const ProductList = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Imagine: Fake product list with massive array from api
    const products = [
        {id: 1, name: "Laptop" , quantity: 30},
        {id: 2, name: "Smartphone", quantity: 18},
        {id: 3, name: "Headphone", quantity: 42},
        // ... imagine 4,997 more items here.
    ];

    // The expensive calculation
    const filteredProducts = useMemo( () => {
        console.log("Filtering Products... (This is Heavy Lifting)");
        return products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]); // ONLY re-run if searchTerm changes

    // UI
    return (
        <div style={{ background: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000", padding:"20px"}}>
            <h2>Product Search</h2>
            <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
            />

            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                Toggle {isDarkMode ? "Light" : "Dark"} Mode
            </button>


            <ul>
                {filteredProducts.map(p => <li key={p.id}>{p.name}-qtn: {p.quantity}</li>)}
            </ul>
        </div>
    );



};

export default ProductList;