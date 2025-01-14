import { useState } from 'react'
import './App.css'
import CardRecipe from './Components/CardRecipe';
import DisplayRecipes from './Components/DisplayRecipes';
import InputBox from './Components/InputBox';
import { Router } from 'react-router-dom';

function App() {

  const [recipes, setRecipes] = useState([]);

  return (

      <div>
      <div>
        <div>
          <InputBox setRecipes={setRecipes}></InputBox>
        </div>
        <DisplayRecipes recipes={recipes}></DisplayRecipes>
      </div>
    </div>
   
  )
}

export default App
