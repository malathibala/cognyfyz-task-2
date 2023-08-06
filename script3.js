const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");

calculateButton.addEventListener('click',() => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        resultElement.textContent = "Addition is: " +result;
    } else {
        resultElement.textContent = "Please enter valid numbers";
    }
});