document.addEventListener("DOMContentLoaded", () => {

    const plusBtn = document.querySelector("#plus")
    const minusBtn = document.querySelector("#minus")
    const counter = document.querySelector("#counter")

    plusBtn.addEventListener("click", () => {
      counter.textContent = parseInt(counter.textContent) +1
    })

    minusBtn.addEventListener("click", () => {
        counter.textContent = parseInt(counter.textContent) - 1
    })

    let seconds = 0
    setInterval(function(){
        counter.innerHTML = seconds++
    }, 1000)
//     setTimeout(function(){
//         const start = Date.now();
//         const milliseconds = Date.now() - start;

//         console.log('Seconds passed = ' + milliseconds / 1000);
//    }, 2000)

//    let timeout = setTimeout(function(){yourFunction()},10000);
//    let interval = setInterval(function(){yourFunction()},1000);


})