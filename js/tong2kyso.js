function calculateSum() {

    let userInput = document.getElementById("numberInput").value;

    let number = parseInt(userInput);


    unitsDigit = number % 10;
    tensDigit = Math.floor(number / 10);
    sum = unitsDigit + tensDigit;


    document.getElementById("result3").innerHTML = "Tổng chữ số của số " + number + " là: " + sum;
}