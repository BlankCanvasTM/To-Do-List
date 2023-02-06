

const addButton = document.querySelector('.addButton')
const crossButton = document.querySelector('.cross');
let count = 0;
let checkCount = "0";
let crossCount = "0";
let iconCount = "0";

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
    priorityText.setAttribute('class','priority ' + priorityValue);
    priorityText.textContent = priorityValue;
    document.getElementById(count).append(priorityText);


    const titleText = document.createElement('h2');
    titleText.setAttribute('class','title');
    
    if(titleTextValue.length > 16){
        console.log("more than 16 characters");
        titleTextValue = titleTextValue.match(new RegExp(".{0,16}", "g")).join('<br />');
    }
    
    
    titleText.textContent = titleTextValue;
    document.getElementById(count).append(titleText);

    //Create a span element. add icon class for styling then add it to the current to do item.
    const checkSpan = document.createElement('span');
    checkSpan.setAttribute('class', 'icon' + ' check');
    checkSpan.setAttribute('id', "iconCount" + iconCount);
    document.getElementById(count).append(checkSpan);
    
    
    
    //Add the icon image to the span class, by adding the necessary classes
    const checkIcon = document.createElement('i');
    checkIcon.setAttribute('class', 'fa-solid' + ' fa-check');
    
    

    document.getElementById("iconCount" + iconCount).append(checkIcon);
    iconCount++;


    const crossSpan = document.createElement('span');
    crossSpan.setAttribute('class', 'icon' + ' cross');
    crossSpan.setAttribute('id', "crossIcon" + iconCount);
    document.getElementById(count).append(crossSpan);

    const crossIcon = document.createElement('i');
    crossIcon.setAttribute('class', 'fa-solid' + ' fa-sharp' + ' fa-xmark');
    document.getElementById("crossIcon" + iconCount).append(crossIcon);

    
    count++;
    checkCount++;
    crossCount++;


})


crossButton.addEventListener('click', function () {
   const parentItem = crossButton.parentNode;
   console.log(parentItem);

})

