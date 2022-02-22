const removeTask = function (e){
        // event.target.parentNode.remove()
        // e.target.parentNode.style.textDecoration = `line-through`
        const index = e.target.dataset.key
        document.querySelector(`li[data-key="${index}"]`).remove()
}

document.querySelectorAll("li button").forEach(item =>
    item.addEventListener('click', removeTask)
)
