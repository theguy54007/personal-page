$(document).on('ready', function(){
  $('.work-item').slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    pauseOnDotsHover:true
  });
  $('.personal-slick').slick({
    arrows: true,
    dots: true,
    infinite: true,
    adaptiveHeight:true,
    autoplay: true,
    pauseOnHover: true,
    pauseOnDotsHover:true

  });
  $('.service-slick').slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay:true,
    pauseOnHover:true

  });
  $('.resume-slick').slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true
  });
  $('.resume-image-slick').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.resume-image-slick-nav',
   autoplay: true,

  });
  $('.resume-image-slick-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.resume-image-slick',
   dots: true,
   centerMode: true,
   focusOnSelect: true,
   autoplay: true,
 });
});
