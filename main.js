

const addButton = document.querySelector('.addButton')
let count = 0;
let IconCount = 0;

addButton.addEventListener('click', function() {
    
    let titleTextValue = document.getElementById("titleInput").value;
    const priorityValue = document.querySelector('#priorites').value;
    


    //Create the to do item. Add the classes and id so that it can have styling and a specific item can be targeted.
    const item = document.createElement('div');
    item.setAttribute('class','item');
    item.setAttribute('id', count);
    document.getElementById('content').append(item);

    //Add the priority level
    const priorityText = document.createElement('h2');
    priorityText.setAttribute('class','priority');
    priorityText.setAttribute('class',priorityValue);
    priorityText.textContent = priorityValue;
    document.getElementById(count).append(priorityText);


    const titleText = document.createElement('h2');
    titleText.setAttribute('class','title');
    titleText.textContent = titleTextValue;
    document.getElementById(count).append(titleText);

    //Add icons to the item
    const checkSpan = document.createElement('span');
    checkSpan.setAttribute('class', 'icon');
    checkSpan.setAttribute('id', IconCount);
    
    
    
    document.getElementById(count).append(checkSpan);
    
    const checkIcon = document.createElement('i');
    checkIcon.setAttribute('class', 'fa-solid');
    checkIcon.setAttribute('class', 'fa-check');
    
    

    document.getElementById(IconCount).append(checkIcon);
    document.getElementsByClassName('checkmark').append(checkIcon);
    
    /* document.getElementById(count).append(checkSpan);
    document.getElementById(count += 'check').append(checkIcon);

    const crossSpan = document.createElement('span');
    crossSpan.setAttribute('class', 'icon');
    crossSpan.setAttribute('id', count += 'check');
    const crossIcon = document.createElement('i');
    crossIcon.setAttribute('class', 'fa-sharp');
    crossIcon.setAttribute('class', 'fa-solid');
    crossIcon.setAttribute('class', 'fa-xmark');

    document.getElementById(count).append(crossSpan);
    document.getElementById(count += 'check').append(crossIcon); */


    
    count++;


})

