

let btn_generate = document.getElementById("btn-generate");
let btn_print = document.getElementById("btn-print");
let btn_clear = document.getElementById("btn-clear");
let qr_code = document.getElementById("qr-code");
let file_url = document.getElementById("file-url");

let trash_can = document.getElementsByClassName(".the_input i");

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


// trash_can.addEventListener("click", clear_qrcode)

btn_print.addEventListener("click", pdf)

function clear_qrcode() {
    qrcode = undefined
    qr_code.innerHTML = "";
    file_url.value = "";
}

function pdf() {
    var canvas = document.getElementById('qr-code')
    // save canvas image as data url (png format by default)
    // console.log(canvas);
    var dataURL = canvas.toDataURL();

    var imgData = dataURL;

    var doc = new jsPDF();
    doc.addImage(imgData, 'JPEG', 15, 40);

    doc.save('role.pdf');
}