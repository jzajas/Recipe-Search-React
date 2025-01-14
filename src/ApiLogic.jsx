// Define BASE_URL and API_KEY here

async function SearchRecipes(query){  
    try {
        const response = await fetch(
        `${BASE_URL}/complexSearch?query=${query}&number=5&addRecipeInformation=true&apiKey=${API_KEY}`
        );

        if (!response.ok) {
        throw new Error('Failed to fetch recipes');
        }
        const result = await response.json();

        return result.results;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
}

export default async function handleSearch(query) {
    if(query){
        const data = await SearchRecipes(query);
        // console.log(data)
        if(data && Array.isArray(data)){
            return data;
        }
    }
}