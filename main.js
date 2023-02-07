let count = 0;

function newtask(){

    //Create a new item element
    
    let taskInputText = document.getElementById("taskInput");
    
    if(taskInputText.value.length == 0)
        alert("Enter a Task!");
    else{
        document.querySelector('.container').innerHTML += (`
        <div class="item ${count}">
        <h2>${taskInputText.value}</h2>
        <span onclick="deleteTask(this)" class="icon delete"><i class="fa-solid fa-trash-can"></i></span>
        </div
        
        
        `);
        count++;
    };
    return;
}

function deleteTask(child){
    child.parentNode.remove();
    
}


