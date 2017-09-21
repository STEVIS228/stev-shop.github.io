/**
 * Created by Soff on 20.01.2017.
 */
$('#slider').slick({
    infinite: true,
    dots: true,
    prevArrow: '',
    autoplay: false,
    adaptiveHeight: true,
    fade: true,
    nextArrow: ''
});
$('#good_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    variableWidth: true
});
$('.fancy').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true,
        tCounter: ''
    }
});
$('#page-nav a').click(function(e) {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
$('.tabs_btn').click(function() {
 $(this).siblings('.tabs_btn').removeClass('active');
 $(this).addClass('active');

 var tab_id = $(this).attr('id');
 var selector =  '#tabs div.tabs_tab-wrap[data-tab=\'' + tab_id + '\']';
  $(selector).show(0);
  $(selector).siblings('.tabs_tab-wrap').hide(0);
 

});
$('.btn-tab').click(function() {
	var typeFilter = '#' + $(this).data('filter');
	$(this).siblings('.btn-tab').removeClass('active');
	$(this).addClass('active');
	
	$('.good-wrap').hide();
	$(typeFilter).show();
});

$('.faq-q').addClass('active'); //Hide/close all containers
//On Click
$('.faq-q').click(function(){
	if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
		//$('.faq-q').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
		$(this).next().slideDown();
		$(this).addClass('active'); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
	}
	else {
		$(this).next().slideUp();
		$(this).removeClass('active');
	}
});

$('.controlxs-menu').click(function() {

    if($(this).next('.xs-menu').css('display') === 'none'){
        $('.xs-menu').hide();
        $(this).next('.xs-menu').slideDown(200);
    }else{
        $(this).next('.xs-menu').slideUp(200);
    }
});
$(function(){
    var xsmenubtn = $('.controlxs-menu');

    $(document).click( function(e){
		if($(".controlxs-menu").css('display') === 'block'){
			if(!xsmenubtn.is(e.target) && xsmenubtn.has(e.target).length === 0  ){
				xsmenubtn.next('.xs-menu').hide();
			}
		} 
    });
});

	$(document).bind("scroll",function(){
          var position = $('.allgoods').offset().top;
          var classToBeAdded = "visible";
         
          if (position+150 < $(window).scrollTop() + $(window).height()){
				$('.allgoods .shopgoods_good').addClass('visible');
				$('.allgoods .shopgoods_good').removeClass('invisible');
          }
          
      });

