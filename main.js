const addButton = document.querySelector('.addButton');

addButton.addEventListener('click', function() {
    console.log("icp")
    
    let taskInputText = document.getElementById("taskInput");
    
    if(taskInputText.value.length == 0)
        alert("Enter a Task!")
    else{
        document.querySelector('.container').innerHTML += `
        <div class="item">
        <h2>${taskInputText.value}</h2>
        <span class="icon"><i class="fa-solid fa-trash-can"></i></span>
        </div
        
        
        `

        /* const item = `
        <div class="item">
        <h2>${taskInputText.value}</h2>
        <span class="icon"><i class="fa-solid fa-trash-can"></i></span>
        </div
        
        
        `
        document.body.innerHTML = item;//document.getElementById('containerBox').append(item); */
    }




});
