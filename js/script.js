let para = document.querySelector("p");
let inp = document.querySelector("input");

inp.addEventListener("input",function(){
    para.innerText = this.value;
});