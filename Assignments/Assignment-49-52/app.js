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


function closeText() {
  var moreText = document.getElementById("moreText");
  var readMoreBtn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    readMoreBtn.textContent = "Close";
  } else {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
}



// 3. In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.


// const studentForm = document.querySelector('#student-form');
// const studentTable = document.querySelector('#student-table tbody');

// studentForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const nameInput = document.querySelector('#name');
//   const rollNumberInput = document.querySelector('#roll-number');
//   const name = nameInput.value;
//   const rollNumber = rollNumberInput.value;
//   if (name.trim() === '' || rollNumber.trim() === '') {
//     return;
//   }
//   const row = document.createElement('tr');
//   row.innerHTML = `
//     <td>${name}</td>
//     <td>${rollNumber}</td>

//     <td><button style="background-color: #d87373" onclick="deleteRow(this)">Delete</button>
//     <button style="background-color: #d87373" onclick="editWork">Edit</button></td>
  
//     `;
//   studentTable.appendChild(row);
//   nameInput.value = '';
//   rollNumberInput.value = '';
// });

// function deleteRow(btn) {
//        var row = btn.parentNode.parentNode;
//        row.parentNode.removeChild(row);
//      }

//       studentForm.addEventListener('edit', () => 

//         function editWork() {
//           const workTitle = document.querySelector('#edit-form-container');
    
//           const workDescription = document.querySelector('#edit-form');
    
//           workTitle.textContent = 'New Work Title';
          

//         const nameInput = document.querySelector('#name');
//         const rollNumberInput = document.querySelector('#roll-number');
//         const name = nameInput.value;
//         const rollNumber = rollNumberInput.value;
//         if (name.trim() === '' || rollNumber.trim() === '') {
//           return;
//         }
//     }

//       )











