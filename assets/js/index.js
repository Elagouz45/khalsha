$(document).ready(function () {
    $(".home-header-slider").owlCarousel({
        autoplay: true,
        smartSpeed: 800,
        dots: true,
        mouseDrag: true,
        margin: 10,
        navigation: true,
        slideBy: 1,
        items: 1,
    }) ;
    $(".about-us-slider").owlCarousel({
        autoplay: true,
        smartSpeed: 800,
        dots: true,
        mouseDrag: true,
        margin: 10,
        navigation: true,
        slideBy: 1,
        items: 1,
    })
});


$(document).ready(function () {


  function changeContent(links, content) {

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

  function toggleActiveClass(item) {
    $(item).click(function () {
      $(item).removeClass("active");
      $(this).addClass("active");
    });
  }

  // account-steper-detais
  toggleActiveClass('.account-details .steper .steps span:nth-child(odd)')
  changeContent('.account-details .steps span:nth-child(odd)', '.account-details .steper .content')

  var step = 200;
		var scrolling = true;

		$(".preSlide").bind("click", function(event) {
			event.preventDefault();
			$(".slideouter").animate({
				scrollLeft: "+=" + step + "px"
			});
		});

		$(".nextSlide").bind("click", function(event) {
			event.preventDefault();
			$(".slideouter").animate({
				scrollLeft: "-=" + step + "px"
			});
		})


  //my-account page
  toggleActiveClass(".sidebar ul li")
  changeContent('.sidebar ul li', '.my-account  .content')


  //register page
  toggleActiveClass(".toggle-active-btn")


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


