function student(name, xa, ya) {
  this.name = name;
  this.xa = xa;
  this.ya = ya;

  this.getName = function () {
    return this.name;
  };

  this.getDistance = function (xb, yb) {
    return Math.sqrt(Math.pow(this.xa - xb, 2) + Math.pow(this.ya - yb, 2));
  };
}

function findMax(array) {
  var xa = 6,
    ya = 8;
  var max = array[0];
  var maxDistance = max.getDistance(xa, ya);
  for (var i = 1; i < array.length; i++) {
    var tmp = array[i].getDistance(xa, ya);
    if (maxDistance < tmp) {
      max = array[i];
      maxDistance = tmp;
    }
  }
  document.getElementById("bt8-alert").style.display = "block";
  document.getElementById(
    "bt8-alert"
  ).innerText = `Sinh viên xa trường nhất: ${max.getName()}`;
}

function bt8_show() {
  var x = document.getElementsByName("array8[]");
  var data = [];
  for (var i = 0; i < x.length; i++) {
    data[i] = x[i].value;
  }
  var array = [],
    i = 0,
    n = 0;
  while (n < 3 && i <= data.length) {
    array[n] = new student(data[i], data[i + 1] * 1, data[i + 2] * 1);
    console.log(array[n]);
    n++;
    i += 3;
  }

  for (i = 0; i < array.length; i++) {
    console.log(array[i].getDistance(6, 8));
  }
  findMax(array);
}
