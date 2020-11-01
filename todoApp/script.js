const button = document.getElementById('btn');
const input = document.getElementById('todo');
const container = document.getElementById('container')
const delBtnContainer = document.getElementById('delBtn');
const doneBtnContainer = document.getElementById('doneBtn');

function CreateTask() {
    const task = document.createElement('li'); //creating the current task
    const deleteBtn = document.createElement('button'); //creating the deletebtn
    const doneBtn = document.createElement('button');
    task.classList.add('todo'); //adding a class todo
    deleteBtn.classList.add('del'); //adding a class del
    doneBtn.classList.add('done');
    task.dataset.set = 'undone';


    task.innerText = input.value; // getting the text in the input of each task
    deleteBtn.innerText = 'x'; //const of each delete button
    doneBtn.innerText = "Done";

    container.appendChild(task); //adding to the container ul a ne li with a task
    delBtnContainer.appendChild(deleteBtn); //adding to each task a delete button
    doneBtnContainer.appendChild(doneBtn);

    deleteBtn.addEventListener('click', (e) => { //event that listens when the delete btn is pressed it deletes the button and the task connected to it
        container.removeChild(task); //removing the task from the task container
        delBtnContainer.removeChild(deleteBtn); //removing the delbtn from the delbtn container
        doneBtnContainer.removeChild(doneBtn);
        //console.log(e.currentTarget);
    })

    doneBtn.addEventListener('click', (e) => {
        task.dataset.state = 'done';
        console.log(e.currentTarget);
    })

}


button.addEventListener('click', () => {
    const value = input.value.trim();

    if (value) {
        input.dataset.state = 'valid';
        console.log('in')
        CreateTask();
        input.value = "";

    } else {
        input.dataset.state = 'invalid';
        console.log('not in');
    }


})