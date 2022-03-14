/**
 * Input: a, b, c
 *
 * Các bước xử lý:
 * B1: Xét các phần tử trong mảng
 * - Nếu a[i] > a[i+1] -> swap(a[i], a[i+1])
 * B2: Xuất kết quả
 *
 * Output: In ra thứ tự tăng dần của a, b, c
 */

function interchangeSort(array) {
  var tmp;
  var arrayLength = array.length;
  for (var i = 0; i < arrayLength - 1; i++) {
    for (var j = i + 1; j < arrayLength; j++) {
      if (array[i] > array[j]) {
        {
          tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
    }
  }

  document.getElementById("bt1-alert").style.display = "block";
  document.getElementById(
    "bt1-alert"
  ).innerText = `Kết quả: ${array[0]} ${array[1]} ${array[2]}`;
}

function bt1_show() {
  var x = document.getElementsByName("array1[]");
  var array = [];
  for (var i = 0; i < x.length; i++) {
    array[i] = x[i].value * 1;
  }
  interchangeSort(array);
}
