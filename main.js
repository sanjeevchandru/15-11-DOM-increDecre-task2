
var title=document.createElement("h1");
title.innerHTML="Number of quantity:";
title.classList.add("top-title");

var row=document.createElement("div");
row.classList.add("row");

var btnR=document.createElement("button");
btnR.innerHTML='<i class="fa fa-minus" aria-hidden="true"></i>';
btnR.classList.add("btn-right");

var btnL=document.createElement("button");
btnL.innerHTML='<i class="fa fa-plus" aria-hidden="true"></i>';
btnL.classList.add("btn-left");

var input=document.createElement("input");
input.classList.add("in-box");

row.appendChild(btnR);
row.appendChild(input);
row.appendChild(btnL);


var con=document.getElementById("con");
con.appendChild(title);
con.appendChild(row);

input.value=0;

btnR.addEventListener("click",function(){
    if(input.value>0){
    input.value--;
    }
});

btnL.addEventListener("click",function(){
    input.value++;
});
