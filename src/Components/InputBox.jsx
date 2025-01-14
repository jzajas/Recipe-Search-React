import { useState } from "react";
import handleSearch from "../ApiLogic.jsx"

export default function InputBox({setRecipes}) {
    const [query, setQuery] = useState('');
    const [number, setNumber] = useState(5);

    async function searchRecipes() {
        const recipes = await handleSearch(query, number);
        setRecipes(recipes);
    }

    function resetRecipes() {
        setRecipes([]);
    }

    function changeNumber(event) {
        setNumber(event.target.value);
    }     
    
    return(
        <div>
            <h1>Recipe Search</h1>
            <div>
            <input
                type="text"
                value={query}
                onChange={(value) => setQuery(value.target.value)}
                placeholder="Search for recipes..."
                />

                <div>
                    <label htmlFor="number-select">Choose a number: </label>
                    <select  
                        value={number} 
                        onChange={changeNumber}
                        >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>

                    {/* <p>Selected Value: {number}</p> */}
                </div>

            <button onClick={searchRecipes}>Search</button>
            <button onClick={resetRecipes}>Reset</button>
            </div>
        </div>
    );
}