

$(document).ready(function () {

  //my-account page
  $(".sidebar ul li").click(function () {
    $(".sidebar ul li").removeClass("active");
    $(this).addClass("active");
  });


  function changeContent(links,content) {

    var linksList = Array.from(document.querySelectorAll(links));
    var contentList = Array.from(document.querySelectorAll(content));
    linksList.forEach((element) => {
      element.addEventListener('click', () => {
        let href = element.getAttribute('data-target')?.toString();

        contentList.forEach((content) => {
          if (content.classList.contains(href)) {
            content.classList.add('d-block');
            content.classList.remove('d-none');
          } else {
            content.classList.add('d-none');
            content.classList.remove('d-block');
          }
        });

      });
    });
  }


  changeContent('.sidebar ul li','.my-account  .content')
  changeContent('.account-details .steps span','.account-details .steper .content')




  //register page
  $(".toggle-active-btn").click(function () {
    $(".toggle-active-btn").removeClass("active");
    $(this).addClass("active");
  });

  // using-way
  $(".using-way .owl-carousel").owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items: 1,
    margin: 0,
    padding: 0,
    stagePadding: 0,
    smartSpeed: 800,
    navs: true,
    loop: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true
  })





});


