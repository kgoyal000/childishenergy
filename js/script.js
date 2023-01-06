$(document).ready(function(){

	$(window).on('scroll' ,function(){
		$('.hero__section>img').css("transform" , "translateY(-50%) translateX(-"+ $(window).scrollTop()*1 +"px)")
	});



	$('.offer__form button').on("mouseenter", function(){
		$('.offer__form .stick').css("width" ,"180px");
	});
	$('.offer__form button').on("mouseleave", function(){
		$('.offer__form .stick').css("width" ,"0px");		
	});


	$(".top__desc ul , .bottom__desc ul").webTicker({
			startEmpty:false,
			hoverpause:false,
			speed:130,
			duplicate:true
		});

	$(".offer__float ul").webTicker({
			startEmpty:false,
			hoverpause:false,
			speed:130,
			duplicate:true
		});


	if ($(window).width() < 540) {
		$('.gallery__wrapper .outer__gallery').slick({
			slidesToShow:1,
			autoplay: true,
			  autoplaySpeed: 4000,
			  arrows:false
		})
	}

	$('.quant>.plus').on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.quant').find("span").text(+$(this).closest('.quant').find("span").text() + 1);
		count($(this).closest('.quant').find("span").text())
	});
	$('.quant>.minus').on("click" ,function(e){
		e.preventDefault();
		if ($(this).closest(".quant").find('span').text() > 1) {
			$(this).closest('.quant').find("span").text(+$(this).closest('.quant').find("span").text() - 1);
			count($(this).closest('.quant').find("span").text())
		}
	});
	function  count(number){
		$('.offer__form>form>p>span').text((39.99  * number).toFixed(2));
	}


	$('.menu__wrapper>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass("active__menu")) {
			$(this).removeClass("active__menu");
			$(".float__menu").css("top" ,"-100%");
			$('body,html').css("overflow-y" ,"initial");
		} else {
			$(this).addClass("active__menu");
			$(".float__menu").css("top" ,"0px");
			$('body,html').css("overflow-y" ,"hidden");
		}
	});
});