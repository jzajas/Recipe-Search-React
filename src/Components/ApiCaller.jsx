

export default async function callApi() {
    const [query, setQuery] = useState("")
    const [number, setNumber] = useState(1)
  
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;  
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${number}&apiKey=${apiKey}`;
    const new_url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${api_key_weather}`;

    // function get_data(){
    //     try {
    //         const response = await fetch(url, {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         });
      
    //         if (!response.ok) {
    //           throw new Error("Failed to fetch recipes.");
    //         }
      
    //         const data = await response.json();
    //         setRecipes(data.results); // Update recipes state with API data
    //       } catch (err) {
    //         setError("Error fetching recipes. Please try again.");
    //       } finally {
    //         setLoading(false); // Reset loading state
    //       }
    // };
}