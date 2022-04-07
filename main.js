let trails=document.getElementsByClassName("trail");
let trailsLength=trails.length;
for(let i=0; i < trailsLength; i++){
    let element=trails[i];
    element.onmouseover=()=>element.style.color="blue";
    element.onmouseout=()=>element.style.color="";
}


let buttonContactOpen=document.getElementById("buttoncontactopen");
let buttonContactClose=document.getElementById("buttoncontactclose");
let contact=document.getElementById("contactinfo");
buttonContactOpen.onclick=()=>{
    buttonContactOpen.style.display="none";
    buttonContactClose.style.display="block";
    contact.style.display="block"

}

buttonContactClose.onclick=()=>{
    buttonContactClose.style.display="none";
    buttonContactOpen.style.display="block";
    contact.style.display="none";
}