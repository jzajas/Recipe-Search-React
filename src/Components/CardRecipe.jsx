export default function CardRecipe({ recipe, key }) {
    var title = recipe.title; 
    var image = recipe.image;
    var sourceUrl = recipe.sourceUrl; 
    console.log(sourceUrl);

    const redirect = () => {
      window.location.href = sourceUrl;
    };

    return(
      <div className="overflow-hidden">
        <div>
          <h2 className="text-lg">{title}</h2>
        </div>
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-md"/>
        </div>
        <div>
          <button onClick={redirect}>View Recipe</button> 
        </div>
      </div>
    );
}