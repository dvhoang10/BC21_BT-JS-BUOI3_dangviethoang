function checkYear(year) {
  return year > 0;
}

function checkMonth(month) {
  return month > 0 && month < 13;
}

function check(year) {
  return year % 4 == 0 && year % 100 != 0;
}

function checkDayofMonth(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11: {
      return 30;
    }
    case 2:
      if (check(year) == true) {
        return 29;
      }
      return 28;
  }
}

function howManyDay(month, year) {
  if (checkMonth(month) && checkYear(year)) {
    var day = checkDayofMonth(month, year);

    document.getElementById("bt6-alert--success").style.display = "block";
    document.getElementById("bt6-alert--success").innerText = `${day} ngày`;
  } else {
    document.getElementById("bt6-alert--error").style.display = "block";
    document.getElementById(
      "bt6-alert--error"
    ).innerText = `Tháng năm không hợp lệ!`;
  }
}

function bt6_show() {
  var x = document.getElementsByName("array6[]");
  var array = [];
  for (var i = 0; i < x.length; i++) {
    array[i] = x[i].value * 1;
  }
  howManyDay(array[0], array[1]);
}
