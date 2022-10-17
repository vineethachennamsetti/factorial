function find() {
  var number = document.getElementById("number").value;
  var res = 1;
  while (number > 0) {
    res = res * number;
    number = number - 1;
  }
  alert(res);
  document.getElementById("number").value = "";
}
