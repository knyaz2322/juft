
let num = +prompt("Son kiriting");
while (isNaN(num) || num == '') {
  num = prompt("Iltimos son kiriting");
}


if (num % 2 == 0) {
  alert("Siz yozgan raqam juft");
} else {
  alert("Siz yozgan raqam toq");
}

