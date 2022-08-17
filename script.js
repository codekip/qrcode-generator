let btn_generate = document.getElementById("btn-generate");
let btn_print = document.getElementById("btn-print");
let btn_clear = document.getElementById("btn-clear");
let qr_code = document.getElementById("qr-code");
let file_url = document.getElementById("file-url");
let initiative_name = document.getElementById("initiative-name");

let qrcode = undefined;

btn_generate.addEventListener("click", generate_qrcode);
btn_print.addEventListener("click", pdf);

function generate_qrcode(value) {
  if (qrcode === undefined) {
    qrcode = new QRCode(qr_code, {
      text: file_url.value,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#fefefe",
      correctLevel: QRCode.CorrectLevel.H,
    });
  } else {
    qrcode.clear();
    qrcode.makeCode(file_url.value);
  }
}

function clear_qrcode() {
  qrcode = undefined;
  qr_code.innerHTML = "";
  file_url.value = "";
}

function clear_initiative_name() {
  initiative_name.value = "";
}

function pdf() {
  var pdf = new jsPDF();

  pdf.setFontSize(15);
  pdf.text("Sampling initiative: " + initiative_name.value, 25, 20);

  pdf.setFontSize(12);
  pdf.text("Scan the QR code above to open the file", 66, 120);

  let base64Image = qr_code.children[1].getAttribute("src");
  console.log(base64Image);
  pdf.addImage(base64Image, "png", 70, 40);
  pdf.save("generated.pdf");
}
