$(function(){
	$('.scne_slider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideMargin: 0,
  ticker: true,
  speed: 150000,
  slideWidth: 800
	});
});
$(function(){
	$('.scne_slider_sp').bxSlider({
  minSlides: 2,
  maxSlides: 2,
  slideMargin: 0,
  ticker: true,
  speed: 110000,
  slideWidth: 800
	});
});
//slider
$(function(){
  $('.mh').matchHeight();
});
$(function(){
  $('.mh2').matchHeight();
});
//$(function(){
  //$('.p3_box li').matchHeight();
//});
$(function(){
  $('.scne_box li').matchHeight();
});
$(function(){
  $('.sz_g').matchHeight();
});
$(function(){
  $('.sz_b').matchHeight();
});
//matchheight
$(function() {
    $(".burger_menu").css("display","none");
    $(".burger").on("click", function() {
        $(".burger_menu").fadeToggle("slow");
    });
});
$(function(){
    $('.menu-trigger').on('click', function(){
        $(this).toggleClass('active');
    });
});
$(function() {
    $(".burger_menu a").click(function(){return $(".burger_menu").fadeToggle();});
});
//burger_menu
$(function() {
    var topBtn = $('.side_menu');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            topBtn.fadeIn("slow");
        } else {
            topBtn.fadeOut();
        }
    });
});
//pan
function init() {
var px_change  = 100;
window.addEventListener('scroll', function(e){
if ( $(window).scrollTop() > px_change ) {
$("header").addClass("smaller");
} else if ( $("header").hasClass("smaller") ) {
$("header").removeClass("smaller");
}
});
}
window.onload = init();
// header_smaller
$(function(){
  $('a[href^=#]').click(function(){
    var speed = 1300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
//smoothscroll
$(function(){
    $(window).scroll(function (){
        $('.fi').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.fi2').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.fi3').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 160){
                $(this).addClass('scrollin');
            }
        });
    });
});
//fadein
$(function(){
    $("article").eq(0).removeClass("fi");
});
//fadein
