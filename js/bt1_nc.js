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

function nextDay(day, month, year) {
  var nday = day,
    nmonth = month,
    nyear = year;
  var tmp = checkDayofMonth(month, year);

  if (day > 0 && day <= tmp && checkMonth(month) && checkYear(year)) {
    nday++;
    if (month == 2) {
      if (check(year)) {
        if (day == 29) {
          nday = 1;
          nmonth++;
        }
      } else if (day == 28) {
        nday = 1;
        nmonth++;
      }
    } else if (month != 12 && day == tmp) {
      nday = 1;
      nmonth++;
    } else if (month == 12 && day == tmp) {
      nday = 1;
      nmonth = 1;
      nyear++;
    }

    document.getElementById("bt5-alert--success").style.display = "block";
    document.getElementById(
      "bt5-alert--success"
    ).innerText = `Ngày tiếp theo: ${nday} / ${nmonth} / ${nyear} `;
  } else {
    document.getElementById("bt5-alert--error").style.display = "block";
    document.getElementById(
      "bt5-alert--error"
    ).innerText = `Ngày tháng năm không hợp lệ!`;
  }
}

function bt5_show() {
  var x = document.getElementsByName("array5[]");
  var array = [];
  for (var i = 0; i < x.length; i++) {
    array[i] = x[i].value * 1;
  }
  nextDay(array[0], array[1], array[2]);
}
