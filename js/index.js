$(document).ready(function(){

// navbar template load
// $('#navbars').load('navbar.html');

// footer template load
$('#footer').load('footer.html');

$('.arrow-down').click(function(){
    $('.additional-logos').slideToggle(300);
      });


//Available Jobs Drop Down-01
$('#job-01').click(function(){
    $('.job-01').slideToggle(300);
        $('#chevron-up-01').toggle();
            $('#chevron-down-01').toggle();
});

// $('#job-01').click(function(){
    
// });

// $('#job-01').click(function(){
    
// });

//Available Jobs Drop Down-02
$('#job-02').click(function(){
    $('.job-02').slideToggle(300);
        $('#chevron-up-02').toggle();
            $('#chevron-down-02').toggle();
});

//Available Jobs Drop Down-03
$('#job-03').click(function(){
    $('.job-03').slideToggle(300);
        $('#chevron-up-03').toggle();
            $('#chevron-down-03').toggle();
});






const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav
  burger.addEventListener('click',() => {
      nav.classList.toggle('nav-active');

    //Animate Links
  navLinks.forEach((link, index) => {

    if(link.style.animation){
        link.style.animation = '';
    }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s` 
        }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
});

}
navSlide();


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}




});

