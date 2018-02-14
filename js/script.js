$(function(){
	//锤子显示
	$(".page-game .list li").click(function(){
		//判断1
		if($(this).hasClass("selected")){
			alert("已经砸过了");
			return false;
		}
		//判断2
		if($(".page-game .list li.selected").size()>2){
			alert("只可以砸3次哦");
			return false;
		}

		$(this).addClass("selected");

		//延时
		setTimeout(function(){
		$(".mask").show();
		$(".dialog").show();	
	    },3000);

	    $(".dialog .foot").click(function(){
	    $(".mask").hide();
		$(".dialog").hide();
		return false;
	    });
	})
})