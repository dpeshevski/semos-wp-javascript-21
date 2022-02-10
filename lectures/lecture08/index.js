const baseUrl = 'https://www.themealdb.com/api/json/v1/1';
const categoriesUrl = `${baseUrl}/categories.php`;

document.addEventListener('DOMContentLoaded', () => {
  const listCategories = async (url) => {
    return fetch(url).then(response => response.json()).then(data => data);
  }
  
  listCategories(categoriesUrl).then(data => {
    console.log('Response', data);
    const { categories } = data;

    const ul = document.createElement('ul');
    ul.setAttribute('id','categories-list');
    ul.style.display = 'flex';
    ul.style.flexDirection = 'column';
    ul.style.justifyContent = 'center';
    ul.style.alignItems = 'center';
    document.getElementById('render-list').appendChild(ul);
    categories.forEach(item => renderCategoryList(item['strCategory']));

    function renderCategoryList (element) {
      const li = document.createElement('li');
      li.setAttribute('class', 'item');
      li.style.color = 'white';
      li.style.border = '1px solid grey';
      li.style.padding = '5px';
      li.style.backgroundColor = 'grey';
      li.style.marginBottom = '2px';
      li.style.textAlign = 'center';
      li.style.width = '400px';
      li.style.height = '90px';
      ul.appendChild(li);
      li.innerHTML = element;
    }
  });
})

// const listCategories = async (url) => {
//   return fetch(url).then(response => response.json()).then(data => data);
// }

// listCategories(categoriesUrl).then(data => {
//   console.log('Response', data);
//   const { categories } = data;
//   console.log('Categories List', categories);
//   const filteredCategories = filterArray(categories, 'idCategory', '5');
//   console.log('Filtered Categories', filteredCategories);

//   const filterSecondCategories = filterArr(categories, 'Beef');
//   console.log('Second filtered categories', filterSecondCategories);
// });

// function filterArray (array, key, value) {
//   return array.filter(item => item[key] === value);
// }

// function filterArr (array, value) {
//   return array.filter(item => item['strCategory'] === value);
// }

// item[key]
// item.key 

// { key } = item;
