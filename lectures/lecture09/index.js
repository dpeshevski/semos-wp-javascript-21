const listCategories = url => fetch(url).then(response => response.json()).then(data => data);

listCategories('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(data => {
    const { categories } = data;

    // categories.forEach(category => {
    //   console.log('CATEGORYYYYY______)))______', category);
    // });

    // categories.forEach(function (category) {
    //   console.log('SECOND CATEGORY', category);
    // })

    // categories.forEach(category => printCategory(category));

    // for (let i = 0; i < categories.length; i++) {
    //   console.log('IN FOR LOOP', categories[i]);
    //   printCategory(categories[i]);
    // }

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'categories-list');
    // ul.style.display = 'flex';
    // ul.style.flexDirection = 'column';
    // ul.style.justifyContent = 'center';
    // ul.style.alignItems = 'center';

    document.getElementById('render-list').appendChild(ul); // div - ul
    console.log(categories);
    categories.forEach(category => renderList(category['strCategory']));

    function renderList (element) {
      const li = document.createElement('li');
      li.setAttribute('class', 'item');
      li.innerHTML = element; // <li> text </li>

      // li.style.padding = '10px';
      // li.style.border = '1px solid grey';
      // li.style.backgroundColor = 'grey';
      // li.style.color = 'white';
      // li.style.width = '450px';
      // li.style.height = '90px';
      // li.style.marginBottom = '10px';
      // li.style.textAlign = 'center';
      ul.appendChild(li);
    }

    // hoisting
  })
  .catch(err => console.log(err));


function printCategory (category) {
  console.log('Cateroryyyyyy', category);
}


function renderCategoryList (element) {
  const ul = document.createElement('ul');
  // console.log(element);
  
  const sectionEl = document.getElementById('render-list');

  const li = document.createElement('li');
  li.innerHTML = element;
  
  console.log(li);
  sectionEl.appendChild(ul);
  // console.log(ul);
}



document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', () => {
    const getTextValue = document.getElementById('name').value;
    console.log(getTextValue);
  })
})

function getText () {
  const text = document.getElementById('name').value;
  console.log(text);
}


function getChecked () {
  const isChecked = document.getElementById('checkbox').checked;
  console.log(isChecked);

  if (isChecked) {
    console.log('Checked.');
  } else {
    console.log('Unchecked.');
  }
}

// console.log(text);
// const text = 'Hello!';

// console.log(msg);
// var msg = 'New test';
// console.log(msg);

hi();

function hi () {
  console.log('Hoisting...');
}

// hey(); not here

const hey = () => {
  console.log('Not hoisted...');
}

hey();
