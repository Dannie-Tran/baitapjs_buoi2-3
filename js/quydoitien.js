function quyDoi() {
    let usdAmount = document.getElementById("usdInput").value;

    let exchangeRate = 23500;

    let vndAmount = usdAmount * exchangeRate;

    document.getElementById("result2").innerHTML = `${usdAmount} USD = ${vndAmount} VND`;
}
