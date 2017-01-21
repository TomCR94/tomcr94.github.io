jQuery(document).ready(function ($) {

$('#tmo-short-btn').click(function() {
        $('.tmo-url').toggle("slide", {
            direction: "left"
        }, "fast", function() {
        });
      
    });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
var menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
  toggle.classList.toggle("");
};

function toggleMenu() {
  menu.classList.toggle("active");
  menu.classList.toggle("");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);

