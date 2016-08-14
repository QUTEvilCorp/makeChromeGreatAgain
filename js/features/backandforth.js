
$(window).on("mouseover", true, (function (e) { 
	var rand = Math.random();
	if (rand < 0.005)
	{
	$(e.target).css('position', 'relative').stop().animate({left: '3px'}, "fast");  
	}
	rand = Math.random();
	if (rand < 0.005)
	{
	$(e.target).css('position', 'relative').stop().animate({left: '-3px'}, "fast");  
	}
}));