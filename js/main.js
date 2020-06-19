$(document).ready(function () {
  const mMenuButton = $(".mobile-buttons");
  const mMenu = $(".m-menu");
  const tab = $(".tab");

  mMenuButton.on('click', function() {
    mMenu.toggleClass("active");
    $('body').toggleClass("no-scroll");
    // console.log("hi button");
  });

  tab.on("click", function() {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $('.tabs-content').removeClass('visible');
    $(activeTabContent).toggleClass("visible");
    console.log($(activeTabContent));
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});