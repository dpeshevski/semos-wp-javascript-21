const crudMethod = (method, {...args}) => {
  return method(args);
}

const fetcher = ({ url, body, method, headers }) => {
  return fetch(url, {
    method,
    headers,
    body
  }).then((response) => response.json());
}

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const get = crudMethod(fetcher, { url: `${baseUrl}`, body: null, method: 'GET', headers: { 'Content-Type': 'application/json '} });
get.then(data => console.log(data));

const getById = crudMethod(fetcher, { url: `${baseUrl}/4`, body: null, method: 'GET', headers: { 'Content-Type': 'application/json'}})
getById.then(data => console.log(data));
