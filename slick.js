$('.slick-news').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1400,
            settings:{
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },    
        {
        breakpoint: 1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
    $('.slick-fact').slick({
    autoplay:true,
    autoplaySpeed:4000,
    slidesToShow:4,
    slidesToScroll:1,
    arrows: false,
    dots: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings:{
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }, 
        {
            breakpoint: 769,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }, 
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
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
  };


