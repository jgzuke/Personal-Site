$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#backgrounddiv').css('top',(0-(scrolled*.5))+'px');
}