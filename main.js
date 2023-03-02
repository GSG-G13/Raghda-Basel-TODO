const task = document.getElementById("Task");
const desc = document.getElementById("Desc");
const date = document.getElementById("date");
const submit = document.getElementById("submit");
const todo = [];

// sumbit data
submit.onclick = function (eo) {
  eo.preventDefault();
  let newTOdo = {
    task: task.value,
    desc: desc.value,
    date: date.value,
  };
  todo.push(newTOdo);
  Read();
};
function Read (){
  let card ="";
  todo.forEach((element,index)=> {
    card+=`
    <li id="list">${element.task}
    <span>${element.desc}</span>
    <span>${element.date}</span>
    <button id="edit">edit</button>
    <button id="delete">Delete</button>
</li>
    `
  });
  document.getElementById("sec").innerHTML=card;
}
 Read();