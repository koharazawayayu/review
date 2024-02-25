//課題1
var maxcount = 10
for (var i = 0; i < maxcount; i++) {
  console.log( + i + "回目の処理");
};

//課題2
var color = ["黄色", "青", "赤"];
for (index in color) {
  console.log(color[index]);
};

//課題3
var animals = [
  {
    name: "猫",
    age: 7,
    sex: "オス",
  },
  {
    name: "犬",
    age: 12,
    sex: "メス",
  },
  {
    name: "ワニ",
    age: 58,
    sex: "オス",
  },
  {
    name: "七面鳥",
    age: 682,
    sex: "オス",
  }
] 
for (animal of animals) {
  console.log(animal);
};