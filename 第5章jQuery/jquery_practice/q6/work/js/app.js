var $children = $('.food-list'); //食べ物の要素を変数に入れます。

//select要素が変更になるとイベントが発生
$('.select-box').change(function() {
 
  //選択されたカテゴリーのvalueを取得し変数に入れる
  var val1 = $(this).val();
 
  //フードリスト内にあるliを繰り返している
  $children.find('li').each(function() {
    var val2 = $(this).data('category-type'); //data-category-typeの値を取得
    //valueと異なるdata-valを持つ要素を削除
    if(val1 == "all") {
      $(this).show();
    } else if (val1 == val2) {
      $(this).show();
    } else {
      $(this).hide();
    }
 
  });
});