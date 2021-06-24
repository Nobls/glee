$(function () {

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });

  $('.product-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
  });

  $('.catalog-content__filter-btn').on('click', function () {
    $('.catalog-content__filter-btn').removeClass('catalog-content__filter-btn--active');
    $(this).addClass('catalog-content__filter-btn--active');
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.catalog__filter-btn').on('click', function(){
    $('.catalog__filters').slideToggle();
  });

  // $('.button-list').on('click', function () {
  //   $('.products-item').addClass('products-item--list');
  // });

  // $('.button-grid').on('click', function () {
  //   $('.products-item').removeClass('products-item--list');
  // });

  $('.select-style, .product-item__input').styler();

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

  $('.product-star').rateYo({
    rating: 4,
    starWidth: "16px"
  });

  $('.slider-top__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  var mixer1 = mixitup('.products-gallery__items');



  var mixer2 = mixitup('.new-design__items');




});


