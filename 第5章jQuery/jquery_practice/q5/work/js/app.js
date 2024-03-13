$(function() {
  //ホバー時にスライドダウンする
  $(".dropdwn li").hover(
    function() {
      $(".dropdwn_menu:not(:animated)", this).stop().slideDown();
    },
    //カーソルが外れたらスライドアップする
    function() {
      $(".dropdwn_menu", this).stop().slideUp();
    }
  );
});