

let btn_generate = document.getElementById("btn-generate");
let btn_print = document.getElementById("btn-print");
let btn_clear = document.getElementById("btn-clear");
let qr_code = document.getElementById("qr-code");
let file_url = document.getElementById("file-url");

let qrcode = undefined

btn_generate.addEventListener("click", generate_qrcode)

function generate_qrcode(value) {
    if (qrcode === undefined) {
        qrcode = new QRCode(qr_code, {
            text: file_url.value,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#fefefe",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        qrcode.clear();
        qrcode.makeCode(file_url.value);
    }
}

btn_clear.addEventListener("click", function () {
    qrcode = undefined
    qr_code.innerHTML = "";
    file_url.value = "";
})