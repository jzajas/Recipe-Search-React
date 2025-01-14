import CardRecipe from "./CardRecipe";


export default function DisplayRecipes(recipes){

  return(
    <div>
      {recipes.recipes.map((recipe, index) => (
        <CardRecipe recipe={recipe} key={index} />
      ))}
    </div>
  )
  };