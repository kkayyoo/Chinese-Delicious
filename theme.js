$(function(){

//Header animation
  $(document).scroll(function() {
     var scrollTop = $(this).scrollTop();
     var headerHeight = $('.hero').height();
     $('.hero-info').css({'opacity': (1 - scrollTop / headerHeight)});
  })

//Sticky Nav background-color
  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();
    //var headerTop= $('.hero').scrollTop();
    if(scrollTop > 320) {
      $('.navbar-default').addClass('sticky-background');
    } else {
      $('.navbar-default').removeClass('sticky-background');
    }
  })

 //Back to Top
  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();
    //var headerTop= $('.hero').scrollTop();
    if(scrollTop > 380) {
      $('#backToTop').show();
    } else {
      $('#backToTop').hide();
    }
  })

  $('#backToTop').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  })





})
