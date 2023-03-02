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
  Clear()
};
console.log(todo)
function Read (){
  let card ="";
  todo.forEach((element,index)=> {
    card+=`
    <li id="list">${element.task}
    <span>${element.desc}</span>
    <span>${element.date}</span>
    <button id="edit">edit</button>
    <button id="delete" onClick = "Delete (${index}) ">Delete</button>
</li>
    `
  });

  document.getElementById("sec").innerHTML=card;
}
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