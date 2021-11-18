// CRUD Operation
// C - Create
// R - Read
// U - Update 
// D - Delete

// Metods
// POST - Create
// GET - Read
// PUT - Update
// DELETE - Delete

// https://jsonplaceholder.typicode.com/posts

// ASYNC/AWAIT

const listPosts = async (url) => {
  const list = await fetch(url);
  // console.log(list);
  return list;
}

const baseUrl = 'https://jsonplaceholder.typicode.com';

listPosts(`${baseUrl}/posts`).then(response => response.json()).then(data => console.log(data));

const listPostsWithThen = async (url) => {
  const data = await fetch(url).then(response => response.json()).then(data => data);
  return data;
}

const list = listPostsWithThen(`${baseUrl}/posts`);
console.log('LISt', list);

listPostsWithThen(`${baseUrl}/posts`).then((data) => console.log('PROMISE', data));

// const listPostsPromise = (url) => {
//   return new Promise(resolve => {
//     resolve(fetch(url))
//   }).then(())
// }

// url/posts/1
// url/posts/3

// /posts/:id

const getPostById = async (url, id) => {
  const post = await fetch(`${url}/${id}`).then(response => response.json()).then(data => data);
  return post;
}

// async function getPostById (url, id) { }

getPostById(`${baseUrl}/posts`, 55).then(data => console.log('POST BY ID', data));

// https://jsonplaceholder.typicode.com/users/1/todos

const getTodosPerUserId = async (url, id, path) => {
  const todos = await fetch(`${url}/${id}/${path}`).then(response => response.json()).then(data => data);
  return todos;
}

getTodosPerUserId(`${baseUrl}/users`, 7, 'todos').then(data => console.log('TODOS', data));