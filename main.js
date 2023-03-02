const task = document.getElementById("Task");
const desc = document.getElementById("Desc");
const date = document.getElementById("date");
const submit = document.getElementById("submit");

const todo = [];
let mediator;
let Mood;

// sumbit data
submit.onclick = function (eo) {
  eo.preventDefault();
  let newTOdo = {
    task: task.value,
    desc: desc.value,
    date: date.value,
  };
  if (Mood == "Edit") {
    console.log("edit");
    todo[mediator] = newTOdo;
    submit.value = "submit";
    Mood = "submit";
  } else {
    todo.push(newTOdo);
  }

  console.log(Mood);
  localStorage.setItem("Task",JSON.stringify(todo))
  Read();
  Clear()

};
function Read() {
  let card = "";
  todo.forEach((element, index) => {
    card += `
    <li id="list">${element.task}
    <span>${element.desc}</span>
    <span>${element.date}</span>
    <button id="edit" onclick="edit(${index})">edit</button>
    <button id="delete"onclick="Delete(${index})">Delete</button>
</li>
    `;
  });
  document.getElementById("sec").innerHTML = card;
}
Read();
const edit = (i) => {
  Mood = "Edit";
  console.log(mediator);
  task.value = todo[i].task;
  desc.value = todo[i].desc;
  date.value = todo[i].date;
  submit.value = "Edit";
  mediator = i;
};


function Clear(){
  task.value = "";
  desc.value ="";
  date.value = "";

}
 Read();
 const Delete = (i) => {
 todo.splice(i,1);
 Read(); 
 }
