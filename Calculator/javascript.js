let buttons=document.querySelectorAll(".btn");
let operations=document.querySelectorAll(".o");
let display=document.querySelector(".container");
let prevnum="";
let newnum="";
let oper="";
let res=0;
buttons.forEach(function add(btn){


btn.addEventListener("click",(e)=>{
switch(e.target.innerHTML){
case "Reset":{
setTimeout(() => {
    location.reload()
}, 200);
}
break;
 case "Delete":{
                display.innerHTML = display.innerHTML.slice(0, -1);
                if (oper == "") {
                    prevnum = display.innerHTML;
                }
                else {
                    let num = display.innerHTML.indexOf(oper);
                    newnum = display.innerHTML.slice(num+1);
                    
                } 
                


            }
                break;

case ".":{
if(prevnum.includes(".")&&oper=="")
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
operations.forEach((o)=>{
o.addEventListener("click",(e)=>{
    if(oper=="")
 oper=e.target.innerHTML;
if (oper != "") {

            let index = display.innerHTML.indexOf(oper);
            if (display.innerHTML.charAt(index + 1) == "-") {
                if (newnum != "")
                    newnum = "-" + newnum;
            
            }

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
  let index = display.innerHTML.indexOf(oper);

    if (index!=-1) {

        if (display.innerHTML.charAt(index + 1) == "-") {
            if (newnum != "")
                newnum = "-" + newnum;
        }
else if(display.innerHTML.charAt(index+1)=="+"||display.innerHTML.charAt(index+1)=="X"||display.innerHTML.charAt(index+1)=="/"||newnum=="")
return 0;
    }

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


};
