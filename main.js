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




//Photos showcase

let generalCount={}

function forwardPhoto(event){
    const target=event.target
    const id=target.id
    const type=id.split("-")[1]
    document.getElementById(`back-${type}`).disabled=false
    const count=generalCount[type].count
    const limit=generalCount[type].limit
    const newPhotoNumberID=count+1
    const idNext=type+'-'+'photo'+'-'+newPhotoNumberID
    const idCurrent=type+'-'+'photo'+'-'+count
    
    if(newPhotoNumberID <= limit)
    {
        const nextPhoto=document.getElementById(idNext)
        const currentPhoto=document.getElementById(idCurrent)
        currentPhoto.style.display="none"
        nextPhoto.style.display="block"
        generalCount[type].count=newPhotoNumberID
    }

    if(newPhotoNumberID == limit){
        target.disabled=true
    }                 
}

function backwardPhoto(){
    const target=event.target
    const id=target.id
    const type=id.split("-")[1]
    document.getElementById(`forw-${type}`).disabled=false
    const count=generalCount[type].count
    const limit=generalCount[type].limit
    const newPhotoNumberID=count-1
    const idPrev=type+'-'+'photo'+'-'+newPhotoNumberID
    const idCurrent=type+'-'+'photo'+'-'+count
    
    if(newPhotoNumberID <= limit)
    {
        const prevPhoto=document.getElementById(idPrev)
        const currentPhoto=document.getElementById(idCurrent)
        currentPhoto.style.display="none"
        prevPhoto.style.display="block"
        generalCount[type].count=newPhotoNumberID
    }

    if(newPhotoNumberID == 1){
        target.disabled=true
    }    
}

const forwHB=document.getElementById('forw-hb')
const backHB=document.getElementById('back-hb')
generalCount.hb={count:1, limit:4}
forwHB.addEventListener('click', forwardPhoto)
backHB.addEventListener('click', backwardPhoto)

const forwtTrattoria=document.getElementById('forw-trattoria')
const backTrattoria=document.getElementById('back-trattoria')
generalCount.trattoria={count:1, limit:3}
forwtTrattoria.addEventListener('click', forwardPhoto)
backTrattoria.addEventListener('click', backwardPhoto)

const forwtTtb=document.getElementById('forw-ttb')
const backTtb=document.getElementById('back-ttb')
generalCount.ttb={count:1, limit:2}
forwtTtb.addEventListener('click', forwardPhoto)
backTtb.addEventListener('click', backwardPhoto)