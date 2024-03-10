$(function(){
  // タブが押された時
  $('.nav-item').on('click', function(){
    // indexの取得
    let index = $('.nav-item').index(this);
    //コンテンツを全て隠す
    $(".description li").css("display","none") 
    //コンテンツを表示させる
    $(".description li").eq(index).css("display","block")
  });
}); 