$(document).ready(function() {
	$(".pagescroll").on("click", function() {
        $('html, body').animate({scrollTop: $($(this).attr("href")).offset().top}, 1200);
    });
});
