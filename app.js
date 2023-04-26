let ourCard = document.querySelector('.card');

let cardContainer = document.querySelector('.card-container');

let addBtn = document.querySelector('.add-btn');


let headInput = document.querySelector('.input-head');

let textAreaInput = document.querySelector('.message-area');

let tasks = [];

addBtn.addEventListener('click',function(){
    if(headInput.value === '' && textAreaInput.value === ''){
    }
    else{
        generateCard();
        headInput.value = '';
        textAreaInput.value = '';
    }
    
});


// setting our localStorage....

// addBtn.addEventListener('click',function(){
//     tasks.push({
//         title : headInput.value,
//         description: textAreaInput.value
//     });
//     console.log(tasks);
// })


function generateCard(){
    let ourDiv = document.createElement('div');
    ourDiv.setAttribute('class','card');
    cardContainer.append(ourDiv);
    // heading....
    let ourHead = document.createElement('h2');
    ourHead.setAttribute('class','card-head');
    ourHead.innerHTML = headInput.value;
    ourDiv.append(ourHead);
    // Paragraph...
    let ourPara = document.createElement('p');
    ourPara.setAttribute('class','card-para');
    ourPara.innerHTML = textAreaInput.value;
    ourDiv.append(ourPara);
    //  Delete...
    let dBtn = document.createElement('button');
    dBtn.setAttribute('class','del-btn btn');
    dBtn.innerHTML = 'Delete';
    ourDiv.append(dBtn);
    // Delete Event Listener..
    dBtn.addEventListener('click',function(){
        ourDiv.remove();
    });
};