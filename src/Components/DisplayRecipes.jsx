import CardRecipe from "./CardRecipe";


export default function DisplayRecipes(recipes){

  return(
    <div className="recipes-container">
      {recipes.recipes.map((recipe, index) => (
        <CardRecipe recipe={recipe} key={index} />
      ))}
    </div>
  )
  };