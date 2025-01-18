import { useState } from 'react'
import './App.css'
import DisplayRecipes from './Components/DisplayRecipes';
import InputBox from './Components/InputBox';

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
