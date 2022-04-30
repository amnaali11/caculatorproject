let buttons=Array.from(document.querySelectorAll(".btn"));
let operations=Array.from(document.querySelectorAll(".o"));
let display=document.querySelector(".container");
let prevnum="";
let newnum="";
let oper="";
let res=0;
buttons.map(function add(btn){


btn.addEventListener("click",(e)=>{
switch(e.target.innerHTML){
case "Reset":{
setTimeout(() => {
    location.reload()
}, 200);
}
break;
case "Delete":{
display.innerHTML=display.innerHTML.slice(0,-1);
prevnum=display.innerHTML;



}
break;
case ".":{
if(prevnum.include(".")&&newnum=="")
return 0;
else if(newnum.includes("."))
return 0;

}


default:{display.innerHTML+=e.target.innerText;
    if(oper=="")
prevnum+=e.target.innerHTML;
else{
    newnum+=e.target.innerHTML;
}


}



}

})



});
operations.map((o)=>{
o.addEventListener("click",(e)=>{
    if(oper=="")
    
{    oper=e.target.innerHTML;
}

display.innerHTML+=e.target.innerHTML;
if(newnum!=""){

    
switch(oper)
{
case "+":{
res= Number(prevnum)+Number(newnum);
display.innerHTML=res;
prevnum=String(res);
newnum="";
oper="";

}
break;
case "-":{
    res= Number(prevnum)-Number(newnum);
    display.innerHTML=res;
    prevnum=String(res);
    newnum="";
    oper="";

}
break;
case "X":
{    res= Number(prevnum)*Number(newnum);
    display.innerHTML=res;

   prevnum=String(res);
    newnum="";
    oper="";


}
break;
case "/":
{
res= Number(prevnum)/Number(newnum);
display.innerHTML=res;
prevnum=String(res);
newnum="";
oper="";


}
}
}




})





});








 function equal(){


switch(oper)
{
case "+":{
res= Number(prevnum)+Number(newnum);
display.innerHTML=res;
prevnum=res;
newnum="";
oper="";

}
break;
case "-":{
    res= Number(prevnum)-Number(newnum);
    display.innerHTML=res;
    prevnum=String(res);
    newnum="";
    oper="";


}
break;
case "X":
{    res= Number(prevnum)*Number(newnum);
    display.innerHTML=res;

    prevnum=String(res);
    newnum="";
    oper="";

}
break;
case "/":
{
res= Number(prevnum)/Number(newnum);
display.innerHTML=res;
prevnum=String(res);
newnum="";
oper="";


}
}


};
