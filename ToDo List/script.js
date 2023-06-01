let inputFeild = document.getElementById("inputFeild");
let addToDoBtn = document.getElementById("addToDo");
 let toDoList = document.getElementById("toDoList");


 
 addToDoBtn.addEventListener('click', function(){

    addList();
   
   
 })
 function addList(){
    var paragraph = document.createElement('p');
    paragraph.classList.add("pStyle");
    paragraph.innerText = inputFeild.value;
    toDoList.appendChild(paragraph);

    inputFeild.value ="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";

    })
    paragraph.addEventListener('dblclick', function(){
        toDoList.removeChild(paragraph);
    })

 }

 addToDoBtn.addEventListener('keyup',function(event){
    if(event.which === 13){
        addList();
    }
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";

    })
    paragraph.addEventListener('dblclick', function(){
        toDoList.removeChild(paragraph);
    })
 })