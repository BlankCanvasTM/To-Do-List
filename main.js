function newtask(){

    //Create a new item element
    
    let taskInputText = document.getElementById("taskInput");
    
    if(taskInputText.value.length == 0)
        alert("Enter a Task!");
    else{
        document.querySelector('.container').innerHTML += (`
        <div class="item">
        <h2>${taskInputText.value}</h2>
        <span class="icon delete"><i class="fa-solid fa-trash-can"></i></span>
        </div
        
        
        `);
    };
    return;
}

//get every element that has the delete class. for every element with the delete class check if the onclick event has been fired. If so delete the parent element removing the task
var current_tasks = document.querySelectorAll('.delete');
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
