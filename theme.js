$(function(){

  //Header animation
    $(document).scroll(function() {
       var scrollTop = $(this).scrollTop();
       var headerHeight = $('.hero').height();
       $('.hero-info').css({'opacity': (1 - scrollTop / headerHeight)});
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
