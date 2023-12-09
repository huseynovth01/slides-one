var slides = document.querySelectorAll(".photo");

var next =document.querySelector(".btn_right");
var prev =document.querySelector(".btn_left");

var currentIndex = 0;
var maxNumber = slides.length;

slidesMove(slides)


next.addEventListener("click",function(){
    if (currentIndex === maxNumber -1){
        currentIndex = 0
    }
    else{
        currentIndex++;
    }
    slidesMove(slides)
})


prev.addEventListener("click",function(){
if (currentIndex === 0){
    currentIndex = maxNumber-1;
}
else{
    currentIndex --;
}
slidesMove(slides)
})

function slidesMove(slides){
    slides.forEach((slides,index) => {
    slides.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    })

}


