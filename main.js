const task = document.getElementById("Task");
const desc = document.getElementById("Desc");
const date = document.getElementById("date");
const submit = document.getElementById("submit");
const todo = [];
console.log(task, desc, date, submit);

// sumbit data
submit.onclick = function (eo) {
  eo.preventDefault();
  let newTOdo = {
    task: task.value,
    desc: desc.value,
    date: date.value,
  };
  todo.push(newTOdo);
  console.log(todo);
};
