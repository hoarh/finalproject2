/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var container = $('.mygrid').isotope({
  // options
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});

// $("#paid").click(function(e){
//     e.preventDefault();
//     container.isotope({ filter: '.paid' });
// })

$("#portfolio-item").click(function(e){
    e.preventDefault();
    container.isotope({ filter: '.portfolio-item' });
})

$("#genEd").click(function(e){
    e.preventDefault();
    container.isotope({ filter: '.genEd' });
})

$("#business").click(function(e){
    e.preventDefault();
    container.isotope({ filter: '.business' });
})

$("#tech").click(function(e){
    e.preventDefault();
    container.isotope({ filter: '.tech' });
})

$("#language").click(function(e){
    e.preventDefault();
    container.isotope({ filter: '.language' });
}) 

$("#free").click(function(e){
    e.preventDefault();
    container.isotope({ filter: '.free' });
})

$("#paid").click(function(e){
    e.preventDefault();
    container.isotope({ filter: '.paid' });
})

  // change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });