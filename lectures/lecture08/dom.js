const paragraph = document.getElementsByTagName('p');

console.log(paragraph);

document.body.onload = createElement;
// document.body.onload = onClick;

function createElement() {
  // <h1>Heading One</h1>

  const headingOne = document.createElement('h1'); // <h1></h1>

  const headingContent = document.createTextNode('Heading One'); // Heading One
  headingOne.appendChild(headingContent); // <h1>Heading One</h1>
  console.log(headingOne);

  const currentFirstParagraph = document.getElementById('first-paragraph');

  document.body.insertBefore(headingOne, currentFirstParagraph);

  const headingTwo = document.createElement('h2'); // <h2></h2>
  const spanElement = document.createElement('span'); // <span></span>

  const headingTextTwo = document.createTextNode('Heading Two'); // Heading Two
  spanElement.appendChild(headingTextTwo); // <span>Heading Two</span>
  // <h2><span></span></h2>
  headingTwo.appendChild(spanElement); // <h2><span>Heading Two</span></h2>
  console.log(headingTwo);

  document.body.insertBefore(headingTwo, headingOne);

  const buttonElement = document.createElement('button'); // <button></button>
  buttonElement.innerText = 'Submit Button'; // <button>Submit Button</button>
  buttonElement.setAttribute('class', 'btn btn-submit');
  buttonElement.setAttribute('id', 'submit-button');

  document.body.insertBefore(buttonElement, document.body.lastChild);
}

document.body.onload = onClick;

function onClick() {
  const buttonEl = document.getElementById('btn-click-me');

  buttonEl.addEventListener('click', () => {
    console.log('Button clicked...');
    alert('Button clicked!');
  })
}
