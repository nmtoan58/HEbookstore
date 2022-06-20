

$('.slick-product').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings:{
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },    
        {
        breakpoint: 1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  window.onload=function(){
    $('.famuos-slick').slick({
    autoplay:true,
    autoplaySpeed:4000,
    slidesToShow:1,
    slidesToScroll:1,
    arrows: false,
    infinite: true
    });
  };


