/**
 * Input: n
 *
 * Các bước xử lý:
 * B1: Upppercase n
 * B2: Xét n
 *  - Nếu n == "B" -> in ra kết quả "Hello Bố"
 *  - Nếu n == "M" -> in ra kết quả "Hello Mẹ"
 *  - Nếu n == "A" -> in ra kết quả "Hello anh Trai"
 *  - Nếu n == "E" -> in ra kết quả "Hello em Gái"
 *  - Còn lại in ra kết quả "Hello"
 *
 * Output: lời chào phù hợp
 */

function hello(name) {
  switch (name.toUpperCase()) {
    case "B":
      return "Bố";
    case "M":
      return "Mẹ";
    case "A":
      return "anh Trai";
    case "E":
      return "em Gái";
    default:
      break;
  }
}

function bt2_show() {
  var nameValue = document.getElementById("bt2-txt-name").value;
  var s = hello(nameValue);
  if (typeof s == "undefined") {
    s = "";
  }
  document.getElementById("bt2-alert").style.display = "block";
  document.getElementById("bt2-alert").innerText = `Hello ${s}!`;
}
