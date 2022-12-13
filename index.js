// DOM aka how u use javascript to modify a website
// D-html doc O-datatype obj M-representation
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //("count-el") is an argument 
let count = 0
function increment() {
    count +=1
    countEl.textContent = count
    console.log(count)    
}

function  save() {
    let totalCount = count + " - "
    saveEl.textContent += totalCount
    countEl.textContent = 0
    count = 0
}









let myPoints = 3 

function add3Points() {
    myPoints += 3

}
function remove1Point(){
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
// console logs this to 10 bc the func was called a certain amt of times
console.log(myPoints)

console.log ("my points:" + 5 + 9) // my points: 59

//puts error <p> message when button is clicked
let errorEl = document.getElementById("error")
function errorMsg() {
errorEl.textContent="Something went wrong please try again"
}

// 
let num1 = 8
let num2 = 2
let sumSect = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
function add() {
    let result = num1 + num2 //create a var for num equations first
    sumSect.textContent = "Sum: " + result //allows string and num eq
}
//






















