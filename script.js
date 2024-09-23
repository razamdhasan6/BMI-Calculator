const heightInputEle=document.querySelector('#height')
const weightInputEle = document.querySelector('#weight')
const btn = document.querySelector('button')
const result = document.querySelector('.result')
const error=document.querySelector('.error')

let heightCm = () => {
    return parseInt(heightInputEle.value) / 100;
}
let bmiCalculate = () => {
    const heightMtr = heightCm();
    const weight = parseInt(weightInputEle.value)
    if (heightMtr > 0 && weight > 0) {
        const bmi = (weight / (heightMtr * heightMtr)).toFixed(2);
        result.textContent = bmi;
        heightInputEle.value = "";
        weightInputEle.value = "";
    } else {
        error.textContent = 'please enter a valid details';
        error.classList.add('show')
        setTimeout(() => {
            error.textContent = '';
        }, 2000);
    }
    
}
btn.addEventListener('click', () => {
    bmiCalculate()
    console.log("object");
})