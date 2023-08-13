const newTaskbutton = document.querySelector('.new-task');
const lowerbody = document.querySelector('.lower-side');
const deleteButton = document.querySelector('.delete');

newTaskbutton.addEventListener("click", () => {

    const taskDiv = document.createElement('div');
    const input = document.createElement('input');
    const i = document.createElement('i');
    const button = document.createElement('button');

    button.addEventListener('click', ()=>{
        lowerbody.removeChild(taskDiv);
    });

    taskDiv.classList.add('task');
    i.className = 'fa-solid fa-trash fa-lg';
    input.className = 'input-area';
    button.className = 'delete';
    input.placeholder = "Enter here";

    button.appendChild(i);
    taskDiv.appendChild(input);
    taskDiv.appendChild(button);

    lowerbody.appendChild(taskDiv);

});

