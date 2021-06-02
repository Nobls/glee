$(function () {

  $('.catalog-content__filter-btn').on('click', function() {
    $('.catalog-content__filter-btn').removeClass('catalog-content__filter-btn--active');
    $(this).addClass('catalog-content__filter-btn--active');
  });

  // $('.button-list').on('click', function () {
  //   $('.products-item').addClass('products-item--list');
  // });

  // $('.button-grid').on('click', function () {
  //   $('.products-item').removeClass('products-item--list');
  // });

  $('.select-style').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.star').rateYo({
    rating: 4,
    starWidth: "12px"
  });

  $('.catalog-star').rateYo({
    rating: 4,
    starWidth: "21px"
  });

  $('.slider-top__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  
  var mixer1 = mixitup('.products-gallery__items');
  
  
  
  var mixer2 = mixitup('.new-design__items');
  
 

  
});


