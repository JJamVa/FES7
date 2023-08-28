const path = document.querySelector("path");
const openBtn = document.querySelector(".btn-open")

const pathLength = path.getTotalLength();
//path의 전체 길이를 구함

path.style.strokeDasharray = pathLength + " " + pathLength;
// dash의 길이와 공백

//dash를 어디서 부터 그릴지

path.style.strokeDashoffset = pathLength

function scrollHandler(){
    //현재 스크롤의 위치
    const scrollTop = document.documentElement.scrollTop
    // console.log(scrollTop);

    // 전체 스크롤의 길이
    const scrollHeight = document.documentElement.scrollHeight;

    //뷰포트의 높이
    const clientHeight = document.documentElement.clientHeight;

    const scrollPercentage  = scrollTop / (scrollHeight - clientHeight)

    const drawLength = pathLength * scrollPercentage;
    
    path.style.strokeDashoffset = pathLength - drawLength;

    openBtn.style.opacity = scrollPercentage;

    openBtn.style.opacity > 0.8 ? openBtn.disabled = false : openBtn.disabled = true
}

window.addEventListener('scroll',scrollHandler)