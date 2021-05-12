$(function(){
    var header = $('#header');
    var introH = $('#intro').innerHeight();
    var scrollOfset = $(window).scrollTop();

    checkScroll(scrollOfset);

    $(window).on("scroll", function(){
      scrollOfset = $(this).scrollTop();

      checkScroll(scrollOfset);
    });

    function checkScroll(){
      if(scrollOfset >= introH - 10){
        header.addClass('fixed');
      }
      else{
        header.removeClass('fixed');
      }
    }
    $("[data-scroll]").on('click', function(event){
      event.preventDefault();

      var blockId = $(this).data("scroll");
      var blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("header__content__used");
      $(this).addClass("header__content__used");

      $("html, body").animate({
        scrollTop: blockOffset
      }, 1000);
    });

});
