$(function(){
	
	$(".hamburger").on("click", function(){	
		$('.m-nav-wrapper ul').slideToggle();
		$('.fa-bars').toggle(); /* toggles hamburger icon */
		$('.fa-xmark').toggle(); /* toggles close (x) icon */
	});
	
	/* adds a line through clicked li items*/
	// $('.m-nav-wrapper ul li').on("click", function(){
	// 	$(this).toggleClass("complete");
	// });
});



