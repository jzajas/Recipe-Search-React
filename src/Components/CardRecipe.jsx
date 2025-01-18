import { useState } from "react";

export default function CardRecipe({ recipe, key }) {
  const [showFullSummary, setShowFullSummary] = useState(false);

  function toggleSummary() {
    setShowFullSummary(!showFullSummary);
  } 

    var title = recipe.title; 
    var image = recipe.image;
    var sourceUrl = recipe.sourceUrl; 
    var summary = recipe.summary;

    const redirect = () => {
      window.location.href = sourceUrl;
    };

    return(
      <div className="card-recipe">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="image-container">
          <img
            src={image}
            alt={title}/>
        </div>
        <div className="summary-container">
          <p>
            {showFullSummary ? summary : summary.slice(0, 100) + "..."}
          </p>
          {summary.length > 100 && (
            <button onClick={toggleSummary}>
              {showFullSummary ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
        <div>
          <button onClick={redirect}>View Recipe</button> 
        </div>
      </div>
    );
}