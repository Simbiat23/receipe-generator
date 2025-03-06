function displayRecipe(response) {
  let recipeElement = document.querySelector("#recipe");
  // Remove ```html and ``` from the response
  let cleanedResponse = response.data.answer
    .replace(/```html/g, "") // Remove opening code block
    .replace(/```/g, ""); // Remove closing code block

  // Insert cleaned HTML into the page
  recipeElement.innerHTML = cleanedResponse;

  recipeElement.innerHTML = `<div class="recipe-container">${cleanedResponse}</div>`;
}

function generateRecipe(event) {
  event.preventDefault();
  let intructionInput = document.querySelector("#user-recipe-input");
  let prompt = `Generate a recipe based on: ${intructionInput.value}.Provide the following in separate sections:
    1. Recipe Name in h1 tag within a div element with recipe-name as class name (as a heading)
    2. Ingredients in an h3 tag within a div element with ingredients as class name (as an unordered HTML list )
    3. Instructions in an h3 tag within a div element with instructions as class name (as a numbered HTML list)
    Format the response in valid HTML for direct display.`;

  let apiKey = "t07aaefccae3394of62526e7dc0c0bad";

  let context =
    "You are a professional chef generating delicious recipes, make sure use the users input";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `Generating a recipe for ${intructionInput.value}....`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElememt = document.querySelector("#recipe-generator-form");
recipeFormElememt.addEventListener("submit", generateRecipe);
