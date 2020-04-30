// var slideIndex = [1,1,1];
// var slideId = ["mySlides1", "mySlides2", "mySlides3"]
// showDivs(1, 0);
// showDivs(1, 1);
// showDivs(1, 2);
//
// function plusDivs(n, no) {
//   showDivs(slideIndex[no] += n, no);
// }
//
// function showDivs(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }


$(function() {
    $(window).scroll( function(){


        $('.fadein').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            // Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it
            bottom_of_window = bottom_of_window + 500;

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }
        });

    });
});



$(document).ready(function(){
	$(".btn-slide").click(function(){
		$(".panel").slideToggle("1");
		$(".slide").toggleClass("active");
	});
});
