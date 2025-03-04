function generateReceipe(event) {
  event.preventDefault();

  new Typewriter("#receipe", {
    strings: ` 1. Preheat your oven to 350°F (175°C). Grease and flour two 9-inch
          round cake pans.
         
          2. In a large bowl, whisk together flour, sugar, baking soda, salt,
          and cocoa powder.
          
          3. In another bowl, combine oil, buttermilk, eggs, food coloring`,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
let receipeFormElememt = document.querySelector("#receipe-generator-form");
receipeFormElememt.addEventListener("submit", generateReceipe);
