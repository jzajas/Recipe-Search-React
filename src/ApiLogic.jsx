// Define BASE_URL and API_KEY here


async function SearchRecipes(query, number){  
    try {
        const response = await fetch(
        `${BASE_URL}/complexSearch?query=${query}&number=${number}&addRecipeInformation=true&apiKey=${API_KEY}`
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

export default async function handleSearch(query, number) {
    if(query){
        const data = await SearchRecipes(query, number);
        if(data && Array.isArray(data)){
            return data;
        }
    }
}
