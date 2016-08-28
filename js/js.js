function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').css("opacity",1);
		$('#gotop').css("height","56px");
	}else{
		$('#gotop').css("opacity",0);
		$('#gotop').css("height",0);
	}
}
$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
});

$(window).scroll(function(e){
	b();		
});

function ewmin(){
	$(".card .ewm").css("opacity",1);
	$(".card .ewm").css("left","0px");
};

function ewmout(){
	$(".card .ewm").css("opacity",0);
	$(".card .ewm").css("left","-180px");
};

function ewmi(){
	$("#togewm").css("opacity",1);
	$("#togewm").css("height","auto");
};

function ewmo(){
	$("#togewm").css("opacity",0);
	$("#togewm").css("height",0);
};
