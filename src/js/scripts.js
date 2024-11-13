// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("Hello, world!");

const myName = "Violet";
console.log(myName);
const myAge = 24;
console.log(myAge);

// practial javascript
// show and hide an element on the page

// Find the element to hide
const toggledParagraph = document.querySelector('.show');
console.log(toggledParagraph);

//write a function that toggles show/hide classs
function toggleParagraph() {
	toggledParagraph.classList.toggle("hide");
	toggledParagraph.classList.toggle("show");
	console.log("My toggle function");
	console.log(toggledParagraph);
}

//Find the button and make something happen when we click it
const toggleButton = document.querySelector("#toggle-control");
console.log(toggleButton);

toggleButton.addEventListener("click", toggleParagraph);
