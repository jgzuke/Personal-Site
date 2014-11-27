$(window).bind('scroll', function(e)
{
	parallaxScroll();
});

function parallaxScroll()
{
	var scrolled = $(window).scrollTop();
	$('#backgrounddiv').css('top', (0 - (scrolled * .5)) + 'px');
}
$('#nextpage').click(function()
{
	if ($(window).scrollTop() < $("#profileWithHeader").offset().top)
	{
		$('html, body').animate(
		{
			scrollTop: $('#profileWithHeader').offset().top
		}, 'slow');
	}
	else if ($(window).scrollTop() < $("#projectsWithHeader").offset().top)
	{
		$('html, body').animate(
		{
			scrollTop: $('#projectsWithHeader').offset().top
		}, 'slow');
	}
	else
	{
		$('html, body').animate(
		{
			scrollTop: $('#botTrans').offset().top
		}, 'slow');
	}
});
$('#prevpage').click(function()
{
	if ($(window).scrollTop() > $("#projectsWithHeader").offset().top)
	{
		$('html, body').animate(
		{
			scrollTop: $('#projectsWithHeader').offset().top
		}, 'slow');
	}
	else if ($(window).scrollTop() > $("#profileWithHeader").offset().top)
	{
		$('html, body').animate(
		{
			scrollTop: $('#profileWithHeader').offset().top
		}, 'slow');
	}
	else
	{
		$('html, body').animate(
		{
			scrollTop: $('#topTrans').offset().top
		}, 'slow');
	}
});
$(document).ready(function()
{
	$('.project1slide').first().addClass('active1');
	$('.project1slide').hide();
	$('.active1').show();
	$('.project2slide').first().addClass('active2');
	$('.project2slide').hide();
	$('.active2').show();
	$('#project1describe').hide();
	$('#project2describe').hide();
});
$('#button-next1').click(function()
{
	$('.active1').removeClass('active1').addClass('oldActive');
	if ($('.oldActive').is(':last-child'))
	{
		$('.project1slide').first().addClass('active1');
	} else
	{
		$('.oldActive').next().addClass('active1');
	}
	$('.oldActive').removeClass('oldActive');
	$('.project1slide').fadeOut();
	$('.active1').fadeIn();
});
$('#button-next2').click(function()
{
	$('.active2').removeClass('active2').addClass('oldActive');
	if ($('.oldActive').is(':last-child'))
	{
		$('.project2slide').first().addClass('active2');
	} else
	{
		$('.oldActive').next().addClass('active2');
	}
	$('.oldActive').removeClass('oldActive');
	$('.project2slide').fadeOut();
	$('.active2').fadeIn();
});
$('#project1').mouseenter(function()
{
    $('#project1describe').fadeIn();
}).mouseleave(function()
{
    $('#project1describe').fadeOut();
});
$('#project2').mouseenter(function()
{
    $('#project2describe').fadeIn();
}).mouseleave(function()
{
    $('#project2describe').fadeOut();
});