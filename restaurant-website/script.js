let display=document.querySelectorAll(".prev");


let arr1 = ["url(photos/image1.jpg)","url(photos/back11.jpg)","url(photos/image9.jpg)", "url(photos/image5.jpg)", "url(photos/image7.jpg)", "url(photos/image8.jpg)","url(photos/image2.jpg)","url(photos/image.jpg)"];
let photo1=document.getElementById('img');
function randNumber() {
    return Math.floor(Math.random() * arr1.length);
  }
  



display.forEach(e => {
    e.addEventListener("click",g=>{
        let photo=arr1[randNumber()];
      photo1.style.transition="2s";

photo1.style.backgroundImage=photo;


})
    



});

var modal = document.getElementById('login-form');
        window.onclick = function(event) 
        {
            if (event.target == modal) 
            {
                modal.style.display = "none";
            }
        }
/*
function word(){

document.getElementById("word").innerText="Welcome To Restaurant";
document.getElementById("img").style.display="visibility";







}*/