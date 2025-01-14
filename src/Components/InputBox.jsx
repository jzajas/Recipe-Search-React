import { useState } from "react";
import handleSearch from "../ApiLogic.jsx"

export default function InputBox({setRecipes}) {
    const [query, setQuery] = useState('');

    async function searchRecipes() {
        const recipes = await handleSearch(query);
        setRecipes(recipes);
    }

    function resetRecipes() {
        setRecipes([]);
    }
    
    return(
        <div>
            <h1 className="text-3xl font-bold mb-4">Recipe Search</h1>
            <div className="flex gap-2">
            <input
                type="text"
                value={query}
                onChange={(value) => setQuery(value.target.value)}
                placeholder="Search for recipes..."
                />
            <button onClick={searchRecipes}>Search</button>
            <button onClick={resetRecipes}>Reset</button>
            </div>
        </div>
    );
}