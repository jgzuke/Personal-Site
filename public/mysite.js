$(window).bind('scroll',function(e)
{
    parallaxScroll();
});
function parallaxScroll()
{
    var scrolled = $(window).scrollTop();
    $('#backgrounddiv').css('top',(0-(scrolled*.5))+'px');
}
$('#nextpage').click(function()
{
	if($(window).scrollTop()< $("#profileWithHeader").offset().top)
	{
		$('html, body').animate({scrollTop: $('#profileWithHeader').offset().top}, 'slow');
	} else if($(window).scrollTop()< $("#projectsWithHeader").offset().top )
	{
		$('html, body').animate({scrollTop: $('#projectsWithHeader').offset().top}, 'slow');
	} else
	{
		$('html, body').animate({scrollTop: $('#botTrans').offset().top}, 'slow');
	}
    
});
$('#prevpage').click(function()
{
	if($(window).scrollTop()> $("#projectsWithHeader").offset().top)
	{
		$('html, body').animate({scrollTop: $('#projectsWithHeader').offset().top}, 'slow');
	} else if($(window).scrollTop()> $("#profileWithHeader").offset().top )
	{
		$('html, body').animate({scrollTop: $('#profileWithHeader').offset().top}, 'slow');
	} else
	{
		$('html, body').animate({scrollTop: $('#topTrans').offset().top}, 'slow');
	}
});