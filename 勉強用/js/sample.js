var boolean = true;

if (boolean) { // boolean == true
  console.log(boolean);
};

if (boolean == false) { // boolean == false

};

var num = 100;
if (num == 100) {
console.log(num);
}


var tokage = "ネロマル"
if (tokage == "ネロマル") {
  console.log(tokage)
}

var tokage2 = "ネロマルちゃん"
if (tokage2 == "ネロマル") {
  console.log(tokage2);
}

var ans = 150
if (15 + 135 == ans) {
  console.log(ans)
}

var tokage3
var check = false
if (!check) {
  tokage3 = "nero"
} else if (check) {
  tokage3 = "maru"
}
console.log(tokage3)

var x = 150
var y = 120
var sum = 0
var chk1 = true
var chk2 = false
if (x + y == 300) {
  console.log("デブ")
} else {
  sum = x + y
  chk1 = true
}
if (x + y == 270) {
  console.log(x+y)
  chk2 = true
}
if (x + y == sum) {
  console.log("やゆ")
}
if (chk1 && chk2) {
  console.log("devyayu")
}

var bool = true
var bool2 = bool // true
var bool3 = false
if (bool && !bool3) {
  bool3 = true //bool3はtrue
  if (bool2 == bool3) {
    console.log ("debu")
  }
}

// x1とy1がどちらとも100だったら"でぶ"と表示

var x1 = 100
var y1 = 100
if (x1 == 100 && y1 == 100) {
  console.log("でぶ")
}

var box1 = [1, 2, 3, 4, 5]
if (box1[0] + box1[1] == box1[3]) {
  console.log("true!")
} else {
  console.log("false!")
}

var box2 = ["a", "i", "u", "e", "o"]
console.log(box2[1] + box2[0] + box2[4])

for (var i = 1; i < 10; i++) {
  console.log("ループ" + i + "回目");
};
