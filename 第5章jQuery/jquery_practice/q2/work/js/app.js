$(function(){
	//開くボタンをクリックしたらモーダルを表示する
	$('.modal_open_button').on('click',function(){	
		$(".modal_win").fadeIn(500);
	});

	//閉じるボタンをクリックしたらモーダルを閉じる
	$('.modal_close_button').on('click',function(){	
		$(".modal_win").fadeOut(500);
	});
});
