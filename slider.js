var slides = document.querySelector(".slider__wrap-item").children;
var nextBtn = document.querySelector(".slider__btn-next");
var prevBtn = document.querySelector(".slider__btn-prev");
var totalSlide = slides.length;
var index = 0;
nextBtn.onclick = function() {
    next("next");
}

prevBtn.onclick = function() {
    next("prev");
}

function next(direction){
    if(direction == "next"){
        index++;
        if(index == totalSlide){
            index = 0;
        }
    }
    else {
        if(index == 0){
            index = totalSlide-1;
        }
        else {
            index--;
        }
    }
    for(let i = 0; i< slides.length;i++){
        slides[i].classList.remove("slider--active");
    }
    slides[index].classList.add("slider--active");
}

setInterval(next,3000);

