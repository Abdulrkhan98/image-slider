const left = document.querySelector(".left");
const right = document.querySelector(".right");
let img  = document.querySelector(".image");

let arrOfImg = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","6.jpg","8.jpeg","10.jpeg","11.jpeg","9.webpgit ","5.webp","7.webp"]
let curridx = 0;

right.addEventListener("click",function(){
  curridx++;
  if(curridx === arrOfImg.length){
    curridx = 0;
  } 
  img.src = arrOfImg[curridx];
})

left.addEventListener("click",function(){
    if(curridx === 0){
        curridx = arrOfImg.length-1;
    } 
    img.src = arrOfImg[curridx];
    curridx--;
  })

