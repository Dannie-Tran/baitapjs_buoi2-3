function tinhGiaTriTrungBinh() {
    let so1 = parseFloat(document.getElementById("number1").value)|| 0;
    let so2 = parseFloat(document.getElementById("number2").value)|| 0;
    let so3 = parseFloat(document.getElementById("number3").value)|| 0;
    let so4 = parseFloat(document.getElementById("number4").value)|| 0;
    let so5 = parseFloat(document.getElementById("number5").value)|| 0;



    tong = so1 + so2 + so3 + so4 + so5;
    giaTriTrungBinh = tong / 5;




    document.getElementById("result").innerHTML = "Giá trị trung bình của 5 số là: " + giaTriTrungBinh.toLocaleString();
}

