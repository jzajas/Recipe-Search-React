export default function CardRecipe({ recipe, key }) {
    var title = recipe.title; 
    var image = recipe.image;
    var sourceUrl = recipe.sourceUrl; 
    // console.log(sourceUrl);

    const redirect = () => {
      window.location.href = sourceUrl;
    };

    return(
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <img
            src={image}
            alt={title}
          />
        </div>
        <div>
          <button onClick={redirect}>View Recipe</button> 
        </div>
      </div>
    );
}