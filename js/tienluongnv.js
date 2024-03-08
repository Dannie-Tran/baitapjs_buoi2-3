function tinhLuong() {
    let ngayLuong = document.getElementById("ngayluong").value;
    let soNgay = document.getElementById("ngaylam").value;

    console.log(ngayLuong, soNgay);

    tongLuong = ngayLuong * soNgay
    document.getElementById("txtNotify").innerHTML = "Tiền lương của bạn là: " + tongLuong.toLocaleString();

}
