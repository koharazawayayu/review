$(function(){
  $('.btn__submit').on('click', function(e){ //クリックした時のイベント
    //それぞれの項目をコンソールログに出力する
    console.log("名字");
    console.log($('#family__name').val());
    console.log("名前");
    console.log($('#given__name').val());
    console.log("生年月日");
    console.log($('.year').val()+"年"+$('.month').val()+"月"+$('.day').val()+"日");
    console.log("性別");
    if($('input[name="gender"]:checked').val() == "man") {
      console.log("男性");
    } else if($('input[name="gender"]:checked').val() == "woman") {
      console.log("女性");
    } else if($('input[name="gender"]:checked').val() == "other") {
      console.log("その他")
    } else {
      console.log($('input[name="gender"]:checked').val());
    }
    console.log("職業");
    // console.log($('.occupation option:selected').val());
    if($('.occupation').val() == "student") {
      console.log("学生");
    } else if($('.occupation').val() == "company employee") {
      console.log("会社員");
    } else if($('.occupation').val() == "housewife") {
      console.log("主婦")
    } else if($('.occupation').val() == "other") {
      console.log("その他")
    } else {
      console.log($('.occupation').val());
    }
    console.log("アカウント名");
    console.log($('#account__name').val());
    console.log("メールアドレス");
    console.log($('#email').val());
    console.log("パスワード");
    console.log($('#password').val());
    console.log("確認用パスワード");
    console.log($('#duplication__password').val());
    console.log("住所");
    console.log($('#address').val());
    console.log("電話番号");
    console.log($('#tel').val());
    console.log("購読情報");
    $('input[name=subscription]:checked').each(function() {
      console.log($(this).val());
    });
    
  });
});
