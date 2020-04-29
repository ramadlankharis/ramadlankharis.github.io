// smooth Scrolling when klik
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// Animasi Navbar
$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
//Akhir animasi Navbar

//parallax jumbotron
$(window).scroll(function () {
    // paralax kompenen di jumbotron
    var wScroll = $(this).scrollTop();

    $('.jumbotron .display-4').css({
        'transform': 'translate(0px, ' + wScroll / 2.5 + '%)'

    });


    $('.jumbotron .display-3').css({
        'transform': 'translate(0px, ' + wScroll / 5.5 + '%)'

    });

    $('.jumbotron .title').css({
        'transform': 'translate(0px, ' + wScroll / 1.3 + '%)'
    })

    $('.jumbotron .display-5').css({
        'transform': 'translate(0px, ' + wScroll / 5.5 + '%)'
    });
    // akhir parallax komponen di jumbotron


    //parallax portfolio

    if (wScroll > $('.portfolio').offset().top - 450) {
        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 350 * (i + 1));
        });
    } else {
        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .img-thumbnail').eq(i).removeClass('muncul');
            }, 350 * (i + 1));
        });
    }
    //parallax portofolio akhir
});