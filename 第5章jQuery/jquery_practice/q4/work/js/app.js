$(function(){
  // タブが押された時
  $('.nav-item').on('click', function(){
    // indexの取得
    const index = $('.nav-item').index(this);
    //コンテンツを全て隠す
    $(".description li").addClass("is-hidden") 
    //コンテンツを表示させる
    $(".description li").eq(index).toggleClass("is-hidden") 
  });
}); 