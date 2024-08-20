

const calculateBill = () => {
let billTotalInput=document.getElementById('billTotalInput').value
console.log(billTotalInput)
let tipInput=document.getElementById('tipInput').value
console.log(tipInput)
let numberOfPeople=document.getElementById('numberOfPeople').innerText
let perPersonTotal= ((tipInput/100)*billTotalInput)/numberOfPeople;
let result = document.getElementById('perPersonTotal')
result.innerText=`$${perPersonTotal.toFixed(2)}`;

}

const increasePeople = () => {
let increase = document.getElementById('numberOfPeople').innerText
let currentValue = parseInt(increase);
currentValue+=1
numberOfPeople.innerText=currentValue;
calculateBill();
// console.log("as",currentValue)
}
const decreasePeople = () => {
    let increase = document.getElementById('numberOfPeople').innerText
    let currentValue = parseInt(increase);
    currentValue-=1
    numberOfPeople.innerText=currentValue;
    calculateBill();
}