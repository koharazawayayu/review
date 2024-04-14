/*課題1
メソッドはオブジェクトの操作を表す。プロパティは状態を表す*/
const food = {
  favorite : function() { 
    console.log("私の好きな食べ物はラーメンです");
  } 
}

const animal = {
  keep : function() { 
    console.log("飼っているのは猫です");
  } 
}

const computer = {
 color : function() { 
    console.log("色は赤です");
  } 
}

//課題2
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};

console.log(fruit("ブドウ", 250));

//課題3
function addTax(price, func) {
  // priceは値段
  // funcは実行する関数名
  // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
  const taxPrice = Math.round(price * 1.10);

  func(taxPrice)
}
// トマトの税込み価格をコンソールに表示させる処理
function tomato(price) {
  console.log("トマトの値段は" + price + "円です。")
};
// 玉ねぎの税込み価格をコンソールに表示させる処理
function onion(price) {
  console.log("玉ねぎの値段は" + price + "円です。")
};

addTax(150, tomato)
addTax(230, onion)