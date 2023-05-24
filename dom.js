const button=document.getElementById("btn");
const randomColor= () =>{
    let val="0123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++){
        cons=cons+val[Math.floor(Math.random ()*16)];
    }
    return cons;
};
// console.log(randomColor());
function changeRandomColor(){
    document.body.style.backgroundColor=randomColor();
}
button.addEventListener("click",changeRandomColor);
document.addEventListener("click",heading);
function heading() {
    document.getElementById("heading").innerText="YOUR COLOR HAS BEEN CHANGED SUCESSFULLY";
}