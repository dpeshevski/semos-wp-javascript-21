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
    {
        name: "Choco Banana Vegan Smoothie",
        numberOfIngridients: 6,
        rating: 2.5,
        numberOfRatings: 12,
        reviews: 22,
      },
      {
        name: "Apple Pie",
        numberOfIngridients: 10,
        rating: 3.5,
        numberOfRatings: 44,
        reviews: 32,
      },
      {
        name: "Supreme Hot Choco",
        numberOfIngridients: 5,
        rating: 3.9,
        numberOfRatings: 12,
        reviews: 9,
      },
      {
        name: "Pumpkin Spice Latte",
        numberOfIngridients: 10,
        rating: 2.4,
        numberOfRatings: 452,
        reviews: 165,
      },
      {
        name: "Meatloaf",
        numberOfIngridients: 21,
        rating: 3.3,
        numberOfRatings: 51,
        reviews: 32,
      },
  ];

  for (let i = 0; i < recipes.length; i++){
    console.log(recipes[i]);
    
}

const filteredRecipes = recipes.filter((recipe) => recipe.rating <= 4)
console.log(filteredRecipes);

const findResult = recipes.find((recipe) => recipe.name === 'Apple Pie');
console.log(findResult);