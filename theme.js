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

  //slider

    var width = 840;
    var animationSpeed = 1500;
    var pause = 3000;
    var currentSlide = 0;

    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    var interval;

    function startSlider(){
        interval = setInterval(function(){ //animate margin-left
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
                currentSlide++;
                if (currentSlide === $slides.length){
                    currentSlide = 0;
                    $slideContainer.css('margin-left', 0);   //If it's last slide, go back
             }
          });
        }, pause);
    }

    function stopSlider(){
        clearInterval(interval);
    }

    //listen for mouseenter and pause
    //resume on mouseleave
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    startSlider();


  //Home page open panel
  //Idea from http://codepen.io/saeedreza/pen/GgrEGX
    $('.panel').click(function() {

      var n = $(this).attr('number');
      var i, toggle_class;

      for(i = 1; i <= 4; ++i) {

        if(i == n) {
          toggle_class = 'panel-active';
        } else if ( i < n ) {
          toggle_class = 'panel-push-left';
        } else if ( i > n ) {
          toggle_class = 'panel-push-right';
        }

        $('.panel' + i).toggleClass(toggle_class);

        var curPanel = $('.panel' + i);

        if(curPanel.hasClass('panel-active')) {
          $('.panel-content' + i).addClass('view-panel');
        } else {
          $('.panel-content' + i).removeClass('view-panel');
        }
      }
    })

})
