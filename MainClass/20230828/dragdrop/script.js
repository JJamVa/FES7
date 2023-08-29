const dropTarget = document.querySelector('.drop-target')
const dragItem = document.querySelectorAll('.drag-item')

dragItem.forEach((e) => {
    e.addEventListener('dragstart',() => {
        setTimeout(()=>{
            e.classList.add('dragging');
        })
    },0)
    e.addEventListener('dragend',()=>{
        e.classList.remove('dragging')
    })
})

function handleDragOver(e){
    e.preventDefault()
    const draggingItem = dropTarget.querySelector('.dragging');
    const notDraggingItem = Array.from(dropTarget.querySelectorAll(".drag-item:not(.dragging)"))

    const nextItem = notDraggingItem.find((item) => {
        // clientY : 뷰포트 내 마우스 y좌표
        // clientTop : 뷰포트에서 요소까지 y좌표
        // offsetHeight: 요소의 높이(border 포함)
        console.log(item.clientY)
        console.log(item.offsetTop)
        console.log(item.offsetHeight)
        return e.clientY <= item.offsetTop + item.offsetHeight / 2
    })
    dropTarget.insertBefore(draggingItem,nextItem);
}


dropTarget.addEventListener('dragover', handleDragOver)
dropTarget.addEventListener('dragenter', e => e.preventDefault())