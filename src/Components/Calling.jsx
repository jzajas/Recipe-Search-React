const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_API_URL;

export default async function searchRecipes(query, number = 2){
    try {
      const response = await fetch(
        `${BASE_URL}/complexSearch?query=${query}&number=${number}&apiKey=${API_KEY}`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const result = await response.json();

      console.log(response);
      console.log(result);
      console.log(result.results);

      return result.results;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return { data: [], error: 'Error fetching recipes. Please try again.' };
    }
  };