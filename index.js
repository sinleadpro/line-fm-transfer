function testFunc({ testParams }) {
  console.log({ testParams });
  // Create the main div element
  const divElement = document.createElement("div");

  // Create the h1 element and set its content
  const h1Element = document.createElement("h1");
  h1Element.textContent = "Hi there!";

  // Create the p element and set its content
  const pElement = document.createElement("p");
  pElement.textContent = "Hello, this is my first npm packages.";

  // Append h1 and p elements to the div
  divElement.appendChild(h1Element);
  divElement.appendChild(pElement);
  console.log({ divElement });
  return divElement;
}

export default testFunc;
