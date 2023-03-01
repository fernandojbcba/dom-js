const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const list = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add("card");
  input.value = "";
  const taskContent = document.createElement('div');
  taskContent.appendChild(checkComplete());
  const content = `
  ${checkComplete()}
  <span class="task">${value}</span>

<i class="fas fa-trash-alt trashIcon icon"></i>`;
task.appendChild(taskContent);
//task.innerHTML = content;
  console.log(content);
  list.appendChild(task);
};

console.log(btn);

//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);

const checkComplete = () =>{
  const i = document.createElement('i');
  i.classList.add=("far fa-check-square icon");
  i.classList.add=("fa-check-square");
  i.classList.add=("icon");
}