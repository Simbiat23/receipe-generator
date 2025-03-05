function displayRecipe(response) {
  new Typewriter("#receipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let intructionInput = document.querySelector("#user-recipe-input");

  let apiKey = "t07aaefccae3394of62526e7dc0c0bad";
  let prompt = `Generate a recipe based on: ${intructionInput.value}. Provide the recipe name, a list of ingredients with quantities, and step-by-step instructions. Please separat the recipe(using a line brake) in order of: recipe name, a list of ingredients with quantities and step-by-step instructions,also display the recipe in basic HTML without saying it is in HTML format `;
  let context =
    "You are a professional chef generating delicious recipes, make sure use the users input";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElememt = document.querySelector("#recipe-generator-form");
recipeFormElememt.addEventListener("submit", generateRecipe);
