/**
 * Input: 3 cạnh tam giác
 *
 * Các bước xử lý:
 * B1: Kiểm tra tính hợp lệ 3 cạnh tạo nên tam giác
 * B2: Kiểm tra loại tam giác
 * - Nếu (a == b && b == c) -> tam giác đều
 * - Nếu (a == b || a == c || b == c) -> tam giác cân
 * - Nếu (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) -> tam giác vuông
 * B3: Xuất kết quả
 *
 * Output: Loại tam giác
 */

function checkTriangle(a, b, c) {
  if (a + b < c || a + c < b || b + c < a) return 0;
  return 1;
}

function checkTypeofTriangle(a, b, c) {
  if (!checkTriangle(a, b, c)) return "Không phải tam giác";
  if (a == b && b == c) {
    return "Tam giác đều";
  } else if (a == b || a == c || b == c) {
    return "Tam giác cân";
  } else if (
    a * a + b * b == c * c ||
    a * a + c * c == b * b ||
    b * b + c * c == a * a
  ) {
    return "Tam giác vuông";
  }
  return "Tam giác thường";
}

function bt4_show() {
  var x = document.getElementsByName("array4[]");
  var array = [];
  for (var i = 0; i < x.length; i++) {
    array[i] = x[i].value * 1;
  }
  var s = checkTypeofTriangle(array[0], array[1], array[2]);
  document.getElementById("bt4-alert").style.display = "block";
  document.getElementById("bt4-alert").innerText = `${s}`;
}
