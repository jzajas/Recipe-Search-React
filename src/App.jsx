import { useState } from 'react'
import './App.css'
import searchRecipes from './Components/Calling';
import CardRecipe from './Components/CardRecipe';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  // const handleSearch = async () => {
  //   if (!query) return;
  //   const response = await searchRecipes(query)
  //   const result = await response.json();
  //   console.log(response)
  //   console.log(result)
  //   console.log(response.data.data)
  //   if(response.data){
  //     setRecipes(response.data.data);
  //   }
  // };

  const handleSearch = async () => {
    if(query){
      const data = await searchRecipes(query);
      console.log(data)
      if(data){
        setRecipes(data); 
      }
    }
  };

  function showRecipes() {
    console.log(recipes);
  }

  return (
    <>
     <div className="p-4 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Recipe Search</h1>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for recipes..."
            className="flex-1"
          />
          
          <button onClick={handleSearch}>
            {
              <>
                <search className="w-4 h-4 mr-2" />
                Search
              </>
            }
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <button onClick={showRecipes}></button>
      {recipes.map((recipe) => (
          <CardRecipe
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
      ))}
      </div>

      {recipes.length === 0 &&(
        <div className="text-center text-gray-500 mt-8">
          No recipes found. Try searching for something!
        </div>
      )}
    </div>
    </>
  )
}

export default App
