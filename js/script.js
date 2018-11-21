$('.nav li').on("click", function() {

	var className = $(this).attr('class');

	var target = $('#'+className)
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);

});


$('.back-to-top').on("click", function() {
	var target = $('.logo')
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
});


$('.mobile-nav').on("change", function () {
	var className=$(this).val();

	var target = $('#'+className)
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);

});