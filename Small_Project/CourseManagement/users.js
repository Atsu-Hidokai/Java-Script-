const userToPush = [];
function addStudents() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const course = document.getElementById("course").value;

    const newUser = { id: Date.now(), name, age, gender, course };
    userToPush.push(newUser);
    toUploadTable();
    const formElements = document.getElementById("frm");
    formElements.reset();

};

function toUploadTable() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    userToPush.forEach((user, index) => {
        tbody.innerHTML += 
    `<tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
        <td>${user.course}</td>
        <td><button>Delete</button></td>
    </tr>`;
    });
};