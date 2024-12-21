const input= document.getElementById("input-box");
const input1= document.getElementById("list-container");
// add the task
function Addfunc(){
    if (input.value===''){
        alert("You must enter some text in it")
    }else{
        let task = document.createElement("li");
        task.innerHTML=input.value;
        input1.appendChild(task);
        let cross=document.createElement("span");
        cross.innerHTML="\u00d7";
        task.appendChild(cross);
    }
    input.value="";
    saveData();
}
// to change the checked and unchecked and remove the task
input1.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
// to save data
function saveData(){
    localStorage.setItem('data',input1.innerHTML);
}
function showTask(){
    input1.innerHTML=localStorage.getItem("data");
}
showTask();