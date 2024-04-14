const children = $('.food-list'); //食べ物の要素を変数に入れます。

//select要素が変更になるとイベントが発生
$('.select-box').change(function() {
 
  //選択されたカテゴリーのvalueを取得し変数に入れる
  const category = $(this).val();
 
  //フードリスト内にあるliを繰り返している
  if(category == "all") {
    $(children.find('li')).show();
  } else {
    children.find('li').each(function() {
      const date = $(this).data('category-type'); //data-category-typeの値を取得
      //valueと異なるdata-valを持つ要素を削除
      if (category == date) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }  
});