// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML 
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

//. Get element of id “main-content” and assign them in a variable.


// var  mainContent = document.getElementById("main-content");
// console.log(mainContent)

//ii. Display all child elements of “main-content” element.

// var childElements = mainContent.childNodes;
// console.log(childElements.mainContent);


//iii. Get all elements of class “render” and show their innerHTML in browser.


// var renderElements = document.getElementsByClassName("render");
// for (let i = 0; i < renderElements.length; i++) {
//   console.log(renderElements[i].innerHTML);
// }


//iv. Fill input value whose element id first-name using javascript.


// var firstNameInput = document.getElementById("first-name");
// firstNameInput.value = "John";


//v. Repeat part iv for id ”last-name” and “email”.


// var lastNameInput = document.getElementById("last-name");
// lastNameInput.value = "Doe";

// var emailInput = document.getElementById("email");
// emailInput.value = "johndoe@example.com";




//i. The node type of the element with id "form-content" is an HTMLDivElement.

//ii. The node type of the element with id "lastName" is an HTMLParagraphElement. Its child node is a Text node.

//iii. You can update the child node of the element with id "lastName" using the following code:



const lastName = document.querySelector('#lastName');
lastName.childNodes[0].nodeValue = 'New Last Name';


//iv. To get the first and last child of the element with id "main-content", you can use the following code:


const mainContent = document.querySelector('#main-content');
const firstChild = mainContent.firstElementChild;
const lastChild = mainContent.lastElementChild;


//v. To get the next and previous siblings of the element with id "lastName", you can use the following code:


const lastName = document.querySelector('#lastName');
const previousSibling = lastName.previousElementSibling;
const nextSibling = lastName.nextElementSibling;


//vi. To get the parent node and node type of the element with id "email", you can use the following code:


const email = document.querySelector('#email');
const parent = email.parentNode;
const nodeType = parent.nodeType;

//The parent node is an HTMLDivElement and the node type is 1.








