// html колекція результатів
let methodsRes = document.querySelectorAll(".method-res")

// метод push
const arr = [1,2,3,4,5]
arr.push(13)
console.log(methodsRes)
methodsRes[0].textContent = arr

// метод filter
console.log(methodsRes)
methodsRes[1].textContent = arr.filter(number => number % 2 === 0)

