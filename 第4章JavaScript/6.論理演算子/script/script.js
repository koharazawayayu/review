//課題1
var numA = 70;
var numB = 50;
if (numA == 70 && numB == 50) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 70 && numB == 50);
} else {
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 70 && numB == 50);
}

//課題2
var numC = 60;
var numD = 30;
if (numC == 60 || numD == 30) {
  console.log("ORの条件と一致した処理");
  console.log(numC == 60 || numD == 30);
} else {
  console.log("ORの条件と一致しなかった処理");
  console.log(numC == 60 || numD == 30);
}

//課題3
var num = 4321;
if (num != 1234) {
  console.log("NOTの条件と一致した処理");
  console.log(num);
} else {
  console.log("NOTの条件と一致しなかった処理");
  console.log(num);
}