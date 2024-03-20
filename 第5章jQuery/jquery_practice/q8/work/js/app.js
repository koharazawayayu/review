// API
$(function(){
  let oldSearchWord = "" //前の検索ワードを保持しておく変数を用意
  let pageCount = 1; //ページカウントの変数
  $('.search-btn').on('click', function(){// 検索が押された時
    const searchWord = $('#search-input').val(); //検索ワードを入れる変数
    if (oldSearchWord == searchWord) { //前の検索ワードと今の検索ワード比較する
      pageCount++; //ページカウントを+1する
    } else {
      pageCount = 1; //ページカウントを1に戻す
      oldSearchWord = searchWord; //今の検索ワードを保持しておく
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
    $('#search-input').val(""); //検索のテキストをクリア
    
    // 初期化
    oldSearchWord = "";
    pageCount = 1;

    removeDOM();  //検索結果を削除
  });

  function displayResult(result) {
    // 検索結果がなかった時の表示
    removeDOM();
    if (typeof result[0]['items'] == "undefined") {
      $('.inner').prepend('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>')
    } else {
      //繰り返し処理
      $.each(result[0]['items'], function(index, val) {
        
        //項目の変数を用意
        const title = val.title ? "タイトル不明" : val.title
        const creator = val.creator ? "作者不明" : val.creator
        const publisher = val['dc:publisher'] ? "出版社不明" : val['dc:publisher']
        const link = val.link['@id'] ? "リンク不明" : val.link['@id']

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
    if (err.status === 0 || err.status === 400) {
      $('.inner').prepend('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
    }
  }
  //DOM削除用のメソッド
  function removeDOM() {
    $(".lists-item").remove();
    $(".message").remove();
  }
}); 