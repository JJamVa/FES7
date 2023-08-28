const modal = document.querySelector(".modal")
const btnOpen = document.querySelector(".btn-open")
const btnClose = document.querySelector(".btn-close")
const dim = document.querySelector('.dim')

const focusableEl = modal.querySelectorAll('a,button,input');
const firstEl = focusableEl[0]
const lastEl = focusableEl[focusableEl.length - 1]

function openModal() {
    modal.classList.add('active')
    document.documentElement.style.overflow = "hidden";

    // firstEl.focus();
}

function closeModal() {
    modal.classList.remove('active');
    document.documentElement.style.overflow = "auto";

    // lastEl.focus()
}

function handleTab(e) {
    //e.key => 현재 누르고 있는 값을 반환
    //e.shift => shift키를 누른 정보를 boolean 값으로 반환
    const activeEl = document.activeElement;
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            // tab + shift 같이 눌렀을 때
            if (activeEl === firstEl) {
                e.preventDefault();
                lastEl.focus();
            }
        } else {
            // tab 만 눌렀을 때
            if (activeEl === lastEl) {
                //없을 경우 tap을 누르면 다음 요소에 focus가 됨
                e.preventDefault();
                firstEl.focus();
            }
        }
    }
}

btnOpen.addEventListener('click', openModal)
btnClose.addEventListener('click', closeModal)
dim.addEventListener('click', closeModal)

firstEl.addEventListener('keydown', handleTab)
lastEl.addEventListener('keydown', handleTab)

window.addEventListener('keydown', (e) => {
    // modal.classList.contains('active') : active 클래스의 포함여부를 boolean 값으로 반환

    if (modal.classList.contains('active') && e.key === 'Escape') {
        closeModal();
    }
})