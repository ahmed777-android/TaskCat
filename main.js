let form=document.getElementById("tasks");
let getData=document.getElementById("getData");
let addData=document.getElementById("addData");
let showData=document.getElementById("showData");
let clearAll=document.getElementById("reset");
let warn=document.getElementById("warn");
let counterDone=document.querySelector("#done");
let doneAll=document.getElementById("doneAll");

addData.addEventListener("click",(e)=>{
    if(getData.value===""){
        warnS();
           setTimeout(focus,600);
        } else{
        addTodo();
    }
    e.preventDefault(); 
})
clearAll.addEventListener("click",()=>{
        document.querySelectorAll("#todo").forEach((e)=>{
            e.remove();
            counterDone.innerHTML="Completed Tasks = "+0;
        })
                    
})

doneAll.addEventListener("click",()=>{
    document.querySelectorAll(".done").forEach((e)=>{
            e.checked=true;
            e.parentElement.classList.add("number");
            counterDone.innerText= "Completed Tasks = "+document.getElementsByClassName("number").length;
    })
})
function addTodo() {
    let complete=document.createElement("button");
     complete.innerHTML="Complete";
    complete.setAttribute("id","comp");
    complete.setAttribute("class","comp");
     let addCheck=document.createElement("input");
     addCheck.setAttribute("type","checkbox");
     addCheck.setAttribute("id","comp"); 
    let delet = document.createElement("button");
     delet.innerHTML="Delete";
    delet.setAttribute("id","del");
     delet.setAttribute("class","del");
    let todo=document.createElement("div");
    todo.setAttribute("id","todo");
    let Task=getData.value;
    let taskText=document.createTextNode(Task);
    todo.appendChild(taskText);
    todo.appendChild(delet);
    todo.appendChild(addCheck);
    showData.appendChild(todo);
    getData.value="";
    delet.setAttribute("onclick","deleteTodo()");
    complete.setAttribute("onclick","completeTodo()");
    addCheck.setAttribute("class","done");
    addCheck.setAttribute("onclick","check()");
}

function deleteTodo(){
    let del=document.querySelector("#del");
    del.parentElement.remove();    
}
function check() {
    var check=document.querySelectorAll(".done");
    for(var i=0;i<check.length;i++){
       if(check[i].checked==true){
           check[i].parentElement.classList.add("number");      
       }
       else{
           check[i].parentElement.classList.remove("number");
       }

       if(document.getElementsByClassName("number")===undefined){
        counterDone.innerHTML="Completed Tasks = "+0;
       }else{
           counterDone.innerText= "Completed Tasks = "+document.getElementsByClassName("number").length;
       }
    }
}
function warnS() {
    warn.style.display="block";
    getData.style.borderColor="red";
}
function focus() {
    warn.style.display="none";
    getData.style.borderColor="#eee";
}

