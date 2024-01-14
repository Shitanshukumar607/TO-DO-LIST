const inputEl = document.querySelector("#input");
const addBtn = document.querySelector("#addbtn");
const taskEl = document.querySelector(".tasksdiv");

let totaltasks = 0;

addBtn.addEventListener("click", newtask);

function newtask() {

    if (inputEl.value.trim() !== "") {
        totaltasks++;

        // creating elements 
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        let taskInput = document.createElement("input");
        taskInput.type = "checkbox";
        taskInput.classList.add("checkboxinput");

        let taskP = document.createElement("p");
        taskP.textContent = inputEl.value.trim();
        taskP.classList.add("tasktext");
        console.log(taskP);

        let taskBtn1 = document.createElement("button");
        taskBtn1.classList.add("editbtn");
        let taskI1 = document.createElement("i");
        taskI1.classList.add("fa-solid", "fa-pen-to-square");

        let taskBtn2 = document.createElement("button");
        taskBtn2.classList.add("delbtn");
        let taskI2 = document.createElement("i");
        taskI2.classList.add("fa-solid", "fa-trash");

        //appending the childs 
        taskBtn1.appendChild(taskI1);
        taskBtn2.appendChild(taskI2);

        taskDiv.appendChild(taskInput);
        taskDiv.appendChild(taskP);
        taskDiv.appendChild(taskBtn1);
        taskDiv.appendChild(taskBtn2);

        taskEl.appendChild(taskDiv);

        //adding event listener to elements 
        taskBtn2.addEventListener("click", deletetask);
        taskBtn1.addEventListener("click", edittask);
        taskInput.addEventListener("click", check);
    }

    document.getElementById("totaltask").textContent = totaltasks;
    inputEl.value = "";
}

//deletes ur task
function deletetask() {
    console.log("deleted");
    this.parentNode.remove();
    totaltasks--;
    document.getElementById("totaltask").textContent = totaltasks;
}

//let's you edit ur task
function edittask() {
    console.log("edited");
    inputEl.value = this.parentNode.querySelector(".tasktext").textContent;
    this.parentNode.remove();
    totaltasks--;
    document.getElementById("totaltask").textContent = totaltasks;
}

// this will line through the text if checked
function check() {
    if (this.checked == true) {
        this.parentNode.querySelector(".tasktext").style.textDecoration = "line-through";
    } else {
        this.parentNode.querySelector(".tasktext").style.textDecoration = "none";
    }
}
