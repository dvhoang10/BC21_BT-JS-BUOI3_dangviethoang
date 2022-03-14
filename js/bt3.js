/**
 * Input: a, b, c
 *
 * Các bước xử lý:
 * B1: Xét các phần tử trong mảng
 * - Nếu a[i] % 2 == 0 -> even++, ngược lại -> odd++
 * B2: Xuất kết quả
 *
 * Output: even && odd
 */

function count(array) {
  var even = 0,
    odd = 0;
  for (var i in array) {
    if (array[i] % 2 == 0) {
      even++;
    } else odd++;
  }

  document.getElementById("bt3-alert").style.display = "block";
  document.getElementById(
    "bt3-alert"
  ).innerHTML = `Số phần tử chẵn: ${even} <br> Số phần tử lẻ: ${odd}`;
}

function bt3_show() {
  var x = document.getElementsByName("array3[]");
  var array = [];
  for (var i = 0; i < x.length; i++) {
    array[i] = x[i].value * 1;
  }
  count(array);
}
