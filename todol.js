function addTask(){
    let input=document.getElementById("task");
    let changes=input.value;
    if(changes.trim() ==="") return ;
    let li=document.createElement("li");
    let check=document.createElement("input");
    check.type="checkbox";
    let word=document.createElement("span");
    word.innerText=changes;
li.appendChild(check);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(word);
input.value="";
   document.getElementById("tasklist").appendChild(li);
   check.addEventListener("change",function(){
    if(check.checked){
        word.style.textDecoration="line-through";
    }
    else{
        word.style.textDecoration="none";
    }
   });
   document.getElementById("clearcompleted").style.display="inline-block";
}
function clearcompleted(){
    let tasklist=document.getElementById("tasklist");
    let task=tasklist.children;
    for(let i=task.length-1;i>=0;i--){
        let checkbox=task[i].querySelector("input[type='checkbox']");
        if(checkbox.checked){
            task[i].remove();
        }
    }
    if(tasklist.children.length===0){
        document.getElementById("clearcompleted").style.display="none";
    }
}