function tinhToan() {

    let chieuDai = parseFloat(document.getElementById("chieuDai").value);
    let chieuRong = parseFloat(document.getElementById("chieuRong").value);


    if (isNaN(chieuDai) || isNaN(chieuRong)) {
        alert("Vui lòng nhập giá trị hợp lệ cho chiều dài và chiều rộng.");
        return;
    }


    dienTich = chieuDai * chieuRong;
    chuVi = 2 * (chieuDai + chieuRong);


    document.getElementById("ketQuaDienTich").innerHTML = "Diện tích: " + dienTich;
    document.getElementById("ketQuaChuVi").innerHTML = "Chu vi: " + chuVi;
}

