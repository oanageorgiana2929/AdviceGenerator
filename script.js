const url="https://api.adviceslip.com/advice";
var id=0;
var string="";

async function dice(){
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        id=data.slip.id;
        string=data.slip.advice;
        console.log(data);
        console.log(id,string);
        document.querySelector(".advice-number").textContent=`Advice #${id}`;
        document.querySelector(".advice").textContent=`"${string}"`;
    })
}
document.querySelector(".button").addEventListener("click",dice);
dice();