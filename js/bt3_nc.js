function readHundred(a) {
  switch (a) {
    case 1:
      return "Một trăm";
    case 2:
      return "Hai trăm";
    case 3:
      return "Một trăm";
    case 4:
      return "Bốn trăm";
    case 5:
      return "Năm trăm";
    case 6:
      return "Sáu trăm";
    case 7:
      return "Bảy trăm";
    case 8:
      return "Tám trăm";
    case 9:
      return "Chín trăm";
  }
}

function readDozen(a) {
  switch (a) {
    case 1:
      return "mười";
    case 2:
      return "hai mươi";
    case 3:
      return "ba mươi";
    case 4:
      return "bốn mươi";
    case 5:
      return "năm mươi";
    case 6:
      return "sáu mươi";
    case 7:
      return "bảy mươi";
    case 8:
      return "tám mươi";
    case 9:
      return "chín mươi";
    default:
      return "";
  }
}

function readUnit(a) {
  switch (a) {
    case 1:
      return "một";
    case 2:
      return "hai";
    case 3:
      return "ba";
    case 4:
      return "bốn";
    case 5:
      return "năm";
    case 6:
      return "sáu";
    case 7:
      return "bảy";
    case 8:
      return "tám";
    case 9:
      return "chín";
    default:
      return "";
  }
}

function checkNumber(number) {
  return Number.isInteger(number) && number > 99 && number < 1000;
}

function readNumber(number) {
  if (checkNumber(number)) {
    var a, b, c;
    var a = Math.floor(number / 100);
    var b = Math.floor((number % 100) / 10);
    var c = Math.floor((number % 100) % 10);

    var ra = readHundred(a);
    var rb = readDozen(b);
    var rc = readUnit(c);

    if (rb == "" && rc != "") {
      rb = "lẻ";
    }
    document.getElementById("bt7-alert--success").style.display = "block";
    document.getElementById(
      "bt7-alert--success"
    ).innerText = `${ra} ${rb} ${rc}`;
  } else {
    document.getElementById("bt7-alert--error").style.display = "block";
    document.getElementById("bt7-alert--error").innerText = `Số không hợp lệ!`;
  }
}

function bt7_show() {
  var numberValue = document.getElementById("bt7-txt-number").value * 1;
  readNumber(numberValue);
}
