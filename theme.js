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

 //expanded function
  $('.open-button').on('click', function(e){
    var $this = $(this);
    //  var button = $(e.target),
    //    targetId = button.attr('href'),
    //    target = $(targetId);
      e.preventDefault();
     $('.content-wrapper').toggleClass('expanded');
    //  Change Button Content
     if($('.content-wrapper').hasClass('expanded')){
       $this.html('SHOW LESS');
     }else{
       $this.html('READ MORE');
     };
  });

})
