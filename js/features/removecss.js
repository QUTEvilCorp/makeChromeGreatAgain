$("body *").not("script").not("style").each(function() 
{
	var rand = Math.random();
	if (rand < 0.02)
	{
	$(this).css('background-color', 'transparent');
	$(this).css('border', '0');
	$(this).css('color', 'initial');
	$(this).css('background', 'initial');
	$(this).css('font', 'initial');
	$(this).css('text-decoration', 'none');
	$(this).css('box-shadow', 'none');
	}
});