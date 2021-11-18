const baseUrl = 'https://www.themealdb.com/api/json/v1/1';
const categoriesUrl = `${baseUrl}/categories.php`;

const listCategories = async (url) => {
  return fetch(url).then(response => response.json()).then(data => data);
}

listCategories(categoriesUrl).then(data => {
  console.log('Response', data);
  const { categories } = data;
  console.log('Categories List', categories);
  const filteredCategories = filterArray(categories, 'idCategory', '5');
  console.log('Filtered Categories', filteredCategories);

  const filterSecondCategories = filterArr(categories, 'Beef');
  console.log('Second filtered categories', filterSecondCategories);
});

function filterArray (array, key, value) {
  return array.filter(item => item[key] === value);
}

function filterArr (array, value) {
  return array.filter(item => item['strCategory'] === value);
}

// item[key]
// item.key 

// { key } = item;
