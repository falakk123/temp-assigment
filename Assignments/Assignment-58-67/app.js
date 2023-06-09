// 1.nsider you have following code snippet: Co
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

// var  mainContent = document.getElementById("main-content");
//  console.log(mainContent)

//  var mainContent = document.getElementById("main-content");
//   console.log(mainContent.children);

//  var renderElements = document.getElementsByClassName("render");
//  for (let i = 0; i < renderElements.length; i++) {
//   console.log(renderElements[i].innerHTML);
//  }

//  var firstNameInput = document.getElementById("first-name").value;
//  var lastNameInput = document.getElementById("last-name").value;
//  var emailInput = document.getElementById("email").value;


//i. The node type of the element with id "form-content" is an HTMLDivElement.

//ii. The node type of the element with id "lastName" is an HTMLParagraphElement. Its child node is a Text node.

//iii. You can update the child node of the element with id "lastName" using the following code:


var formContent = document.getElementById('form-content');
console.log(formContent.nodeType);

var lastName = document.getElementById('lastName');
console.log(lastName.nodeType);
console.log(lastName.childNodes[0].nodeType);

lastName.innerHTML = 'New Last Name';
































