//1. Create a signup form and display form data in your web 
//page on submission.


// function submitForm(event) {
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var formData = "Name: " + name + "<br>Email: " + email + "<br>Password: " + password;
//     document.getElementById("form-data").innerHTML = formData;
//   }


// 2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed. 


// function closeText() {
//   var moreText = document.getElementById("moreText");
//   var readMoreBtn = document.getElementById("readMoreBtn");

//   if (moreText.style.display === "none") {
//     moreText.style.display = "block";
//     readMoreBtn.textContent = "Close";
//   } else {
//     moreText.style.display = "none";
//     readMoreBtn.textContent = "Read More";
//   }
// }



// 3. In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.


// function addStudent(event){
//   event.preventDefault();

// var studentName = document.getElementById('name').value;
// console.log(studentName);

// var studentAge = document.getElementById('rollnumber').value;
// var row = document.createElement('tr');
// var nameData = document.createElement('td');
// var ageData = document.createElement('td');
// var actionData = document.createElement('td');
// nameData.textContent = studentName;
// ageData.textContent = studentAge;

// var deleteButton = document.createElement('button');
// deleteButton.textContent = 'delete';
// deleteButton.addEventListener('click',removeRow);

// var editButton = document.createElement('button');
// editButton.textContent = 'edit';
// editButton.addEventListener('click',editRow)

// actionData.appendChild(editButton);
// actionData.appendChild(deleteButton);

// row.appendChild(nameData);
// row.appendChild(ageData);
// row.appendChild(actionData);

// var studentTable = document.getElementById("student-Table");
// studentTable.appendChild(row);
// }
// function removeRow(event){
//   const row = event.target.parentNode.parentNode;
//           row.parentNode.removeChild(row);
// }
// function cancelEdit(){

//   editForm.classList.add("hidden");

// }
// function editRow(event){
//   var row = event.target.parentNode.parentNode;
//   console.log(row);
  
//   var nameCell = row.getElementsByTagName('td')[0];
//   var ageCell = row.getElementsByTagName('td')[1];

//   var editName = document.getElementById('editname');
//   var editAge = document.getElementById('editrollnumber');

//   editName.value = nameCell.textContent;
//   editAge.value = ageCell.textContent;

//   editForm.classList.remove('hidden');
//   editForm.dataset.rowIndex = row.rowIndex;
// }
// function saveEdit(event){
//   event.preventDefault();
//   var index = editForm.dataset.rowIndex;
//   console.log(index);
//   var row = studentTable.rows[index];
//   console.log(row);

//   var editName = document.getElementById('editname').value;
//   var editrollnumber = document.getElementById('editrollnumber').value;

//   nameCell.textContent = editName;
//   rollnumberCell.textContent =   editrollnumber ;
//   editForm.classList.add('hidden');
// }







