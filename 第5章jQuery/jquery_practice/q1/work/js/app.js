// HTML読み込み時に実行
jQuery(function(){
  // Q1-1 読み込み時に文字の色変化
  // 文字色を緑に変更
  $("#q1").css("color","green");

  // Q1-2 クリックしてボタンの色変更
  // クリック時のイベント
  $("#q2").on("click", function() {
    // ボタンの色を変える
    $("#q2").css("background-color","pink")
  });

  //Q1-3 クリックしてフェードアウト
  //クリック時のイベント
  $("#q3").on("click", function() {
    // フェードアウト
    $("#q3").fadeOut(3000);
  });

  //Q1-4 クリックしてサイズ変更
  //クリック時のイベント
  $("#q4").on("click", function() {
    // サイズ変更
    $("#q4").addClass("large")
  });

  //Q1-5 クリックしてDOMの挿入
  //クリック時のイベント
  $("#q5").on("click", function() {
    // DOMの挿入
    $("#q5").before("DOMの前")
      .prepend("DOMの中の前")
      .append("DOMの中の後")
      .after("DOMの後")
  });

  //Q1-6 クリックして移動
  //クリック時のイベント
  $("#q6").on("click", function() {
    // 移動
    $("#q6").animate({'margin-top':'200px','margin-left':'200px'},2000);
  });
});

//Q1-7 クリックしてidのノードをコンソールで表示
  //クリック時のイベント
  $("#q7").on("click", function() {
    // idを取得
    let id = document.getElementById("q7");
    //コンソールに表示
    console.log(id);
  });

  //Q1-8 ホバー時にサイズ変更
  // 要素にマウスをあわせたときの処理
  $("#q8").hover(function(){
    $("#q8").addClass("large")
    },
    function(){
      //マウスカーソルが外れた時
      $("#q8").removeClass("large")
    },
  );

 //Q1-9 クリックして配列のアラート表示
  //クリック時のイベント
  $("#q9 li").on("click", function() {
    // 配列番号を取得
    let index = $("#q9 li").index(this);
    // アラートを表示
    alert(index);
  });

  //Q1-10 Q10をクリックしてQ11を操作
  //クリック時のイベント
  $("#q10 li").on("click", function() {
    // 配列番号を取得
    let index = $("#q10 li").index(this);
    //文字を大きくする
    $("#q11 li").eq(index).addClass("large-text");
  });