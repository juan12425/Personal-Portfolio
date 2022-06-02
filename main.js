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

let mainAqPhoto=document.getElementById("aq2");
let secondAqPhoto=document.getElementById("aq3");
let thirdAqPhoto=document.getElementById("aq1");

mainAqPhoto.onmouseover= () => {
    mainAqPhoto.style.right="0";
};

mainAqPhoto.onmouseout= () => {
    mainAqPhoto.style.right="30%"
};

secondAqPhoto.onmouseover= () =>{
    secondAqPhoto.style.right="0";
    mainAqPhoto.style.right="100%";
}

secondAqPhoto.onmouseout= () => {
    secondAqPhoto.style.right="10%";
    mainAqPhoto.style.right="30%"
}

thirdAqPhoto.onmouseover= () =>{
    secondAqPhoto.style.right="100%";
    mainAqPhoto.style.right="100%";
}

thirdAqPhoto.onmouseout= () => {
    secondAqPhoto.style.right="10%";
    mainAqPhoto.style.right="30%"
}