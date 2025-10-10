const openTodoDialogBtn = document.querySelector('#openTodoDialog');
const cancelTodoDialogBtn = document.querySelector('#todoCancel');
const todoDialog = document.querySelector('#todoDialog');

export const dialogControllers = ()=>{
    openTodoDialogBtn.addEventListener('click', (e)=>{
        todoDialog.setAttribute("open", "");
    });

    cancelTodoDialogBtn.addEventListener('click', ()=>{
        todoDialog.close();
    })
}
