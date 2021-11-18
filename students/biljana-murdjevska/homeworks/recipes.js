const recipes = [
    {
        name: 'Vegan tacos',
        prep: '10 min',
        cook: '3 min',
        servings: 5,
        rating: 4,
    }, {
        name: 'Vegan garlicky potatoes',
        prep: '10 min',
        cook: '10 min',
        servings: 8,
        rating: 3,

    }, {
        name: 'Vegan pumpkin brownie',
        prep: '30 min',
        cook: '50 min',
        servings: 8,
        rating: 5,
    }, {
        name: 'Vegan morning muffins',
        prep: '15 min',
        cook: '20 min',
        servings: 12,
        rating: 5,
    }, {
        name: 'Vegan miso soup',
        prep: '30 min',
        cook: '20 min',
        servings: 6,
        rating: 3,
    }
];

console.log(recipes);

const nutritionFacts = [
    calories = 192,
    proteins = '2.5g',
    carbohydrates = '23.5g',
    fat = '10.1g',
    sodium = '202mg',
]

console.log(`Nutrition facts: ${nutritionFacts}`);




const filteredRecipes = recipes.filter(recipes => recipes.rating > 3);
console.log(filteredRecipes);











