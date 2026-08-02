let users = [];
// this is used to get the data from the html form
function addStudents() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const course = document.getElementById("course").value;


    //we're converting the addStudents into the object 
    const newUser = { id: Date.now(), name, age, gender, course };
    users.push(newUser);
    toUploadTable();
    const formElements = document.getElementById("frm");
    formElements.reset();
    saveData();

};

//to get the data from the local storage of the browser
function getData() {
    return JSON.parse(localStorage.getItem("users")) || [];
};

//to save the data's in the local storage 
function saveData() {
    localStorage.setItem("users", JSON.stringify(users));
};

//to delete the user from the table 
function deleteUser(id) {
    if (confirm("Are you sure to delete the details you given")) {
        users = users.filter(user => (user.id) != id);
        saveData();
        toUploadTable();
    }
};


//to upload the data on the html table from the form  
function toUploadTable() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    users.forEach((user, index) => {
        tbody.innerHTML +=
            `<tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
        <td>${user.course}</td>
        <td><button onclick="deleteUser(${user.id})">Delete</button></td>
    </tr>`;
    });
};

users = getData();
console.log(users);
toUploadTable();
