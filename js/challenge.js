document.addEventListener("DOMContentLoaded", () => {
    const counter  = document.querySelector("#counter")

    const minusBtn = document.querySelector("#minus")

    const plusBtn = document.querySelector("#plus")

    const heartBtn = document.querySelector("#heart")

    const pauseBtn = document.querySelector("#pause")
    let timer = setInterval(incrementTimer, 1000)
    let paused = false

    const likesList = document.querySelector(".likes")
    const numLikeCounts = {}

    const commentForm = document.querySelector("#comment-form")
    const commentsList = document.querySelector("#list")

    function incrementTimer() {
        let count = counter.innerText
        counter.innerText = parseInt(count) + 1
    }

    function decrementTimer() {
        let count = counter.innerText
        counter.innerText = parseInt(count) - 1
    }

    function likeMessage() {
        const count = counter.innerText
        if (numLikeCounts[count]){
            numLikeCounts[count] ++
            let num = document.getElementById(count)
            num.innerText = `${count} has been liked ${numLikeCounts[count]} times`
        } else {
            numLikeCounts[count] = 1
            likesList.innerHTML += `<li id=${count}>${count} has been liked ${numLikeCounts[count]} times</li>`
        }
    }

    function pauseCounter() {
        if (paused) {
            paused = false
            timer = setInterval(incrementTimer, 1000)
            minusBtn.disabled = false
            plusBtn.disabled = false
            heartBtn.disabled = false
            pauseBtn.innerText = "pause"
        } else {
            paused = true
            clearInterval(timer)
            minusBtn.disabled = true
            plusBtn.disabled = true
            heartBtn.disabled = true
            pauseBtn.innerText = "resume"
        }
    }

    function addComment(event) {
        event.preventDefault()
        const newComment = document.querySelector("#comment-input").value
        const newCommentP = document.createElement("p")
        newCommentP.innerText = newComment
        commentsList.append(newCommentP)
        event.target.reset()
    }

    plusBtn.addEventListener("click", incrementTimer)

    minusBtn.addEventListener("click", decrementTimer)

    heartBtn.addEventListener("click", likeMessage)

    pauseBtn.addEventListener("click", pauseCounter)

    commentForm.addEventListener("submit", addComment)
})