const recipes = [
  {
    name: "Milk Banana Smoothie",
    numberOfIngridients: 3,
    rating: 4.9,
    numberOfRatings: 33,
    reviews: 34,
  },
  {
    name: "Streusel Topped Blueberry Muffins",
    numberOfIngridients: 15,
    rating: 4.5,
    numberOfRatings: 807,
    reviews: 852,
  },
  {
    name: "Fluffy Japanese Pancakes",
    numberOfIngridients: 8,
    rating: 4.8,
    numberOfRatings: 8,
    reviews: 6,
  },
  {
    name: "Apple Blackberry Pie",
    numberOfIngridients: 9,
    rating: 4.9,
    numberOfRatings: 16,
    reviews: 22,
  },
  {
    name: "Iced Almond Milk Nutella® Latte",
    numberOfIngridients: 5,
    rating: 5,
    numberOfRatings: 4,
    reviews: 4,
  },
];

const recipeDetails = {
  name: "Milk Banana Smoothie",
  by: "M131984",
  description: "Low fat, no-sugar-added milk banana smoothie.",
  nutritionInfo: {
    prep: "5 mins",
    total: "5 mins",
    servings: 1,
    Yield: "1 Servings",
  },
  ingredients: [
    "1 cup milk",
    "1 ½ bananas",
    "5 (1 gram) packets low calorie granulated sugar substitute",
  ],
  directions:
    "Blend milk, bananas, and sugar substitute in a blender or food processor until smooth.",
  nutritionFacts:
    "Per Serving: 280 calories; protein 10g; carbohydrates 56.8g; fat 5.4g; cholesterol 19.5mg; sodium 101.8mg.",
};

console.log(recipes, recipeDetails);

