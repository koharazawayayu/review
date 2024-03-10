// API
$(function(){
  var oldSerchWord = "" //前の検索ワードを保持しておく変数を用意
  var pageCount = 1; //ページカウントの変数
  $('.search-btn').on('click', function(){// 検索が押された時
    var searchWord = $('#search-input').val(); //検索ワードを入れる変数
    if (oldSerchWord == searchWord) { //前の検索ワードと今の検索ワード比較する
      pageCount++; //ページカウントを+1する
    } else {
      pageCount = 1; //ページカウントを1に戻す
      oldSerchWord = searchWord; //今の検索ワードを保持しておく
    }
   
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    }
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      displayResult(result)
    }).fail(function (err) {
      displayError(err)
    });
  });

  $('.reset-btn').on('click', function(){// リセットが押された時
    $('#search-input').val(""); //検索のテキストをクリアに
    removeDOM();  //検索結果を削除
  });

  function displayResult(result) {
    // 検索結果がなかった時の表示
    if (typeof result[0]['items'] == "undefined") {
      removeDOM();
      $('.inner').prepend('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>')
    } else {
      removeDOM();
      //繰り返し処理
      $.each(result[0]['items'], function(index, val) {
        
        //項目の変数を用意
        var title = val['title']
        var creator = val['creator']
        var publisher = val['dc:publisher']
        var link = val['link']['@id']

        if (typeof creator == "undefined") { //作者がundefinedの場合
          creator = "作者不明"; 
        }
        if (typeof publisher == "undefined") {//出版社がundefinedの場合
          publisher = "出版社不明";
        }
        // 結果表示用のDOMを挿入
        $('.lists').prepend(
          '<li class="lists-item">' + 
            '<div class="list-inner">'+
              `<p>タイトル：${title}</p>` + 
              `<p>作者：${creator}</p>` +
              `<p>出版社：${publisher}</p>`+
              `<a href="${link}" target="_blank">書籍情報</a>`+
              '</div>' +
            '</li>'
        )
      });
    }
  }

  function displayError(err) {
    
  }
  //DOM削除用のメソッド
  function removeDOM() {
    $(".lists-item").remove();
    $(".message").remove();
  }
}); 