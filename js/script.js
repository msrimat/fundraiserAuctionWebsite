// JavaScript Document

$(document).ready(function() {
	// navigation
	document.addEventListener('click',function(e){
		// Hamburger menu
		if(e.target.classList.contains('hamburger-toggle')){
		  e.target.children[0].classList.toggle('active');
		}
	});

	$(' .hamburger').click(function () {
		$('.header').toggleClass('open');
	});

	// // gallery
	// $('.grid').isotope({
	// 	itemSelector: '.grid-item',
	// 	masonry: {
	// 	//   columnWidth: 100,
	// 	//   gutter: 20
	// 	}
	// });
  // end

	// scrollIt
	$.scrollIt({
		upKey: 38,             // key code to navigate to the next section
		downKey: 40,           // key code to navigate to the previous section
		easing: 'linear',      // the easing function for animation
		scrollTime: 600,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: -101           // offste (in px) for fixed top navigation
	});

  	// sticky-kit
	$(".left-sidebar").stick_in_parent({
		offset_top: 0,
		parent: ".content", // note: we must now manually provide the parent
		spacer: ".inner-pg",
	});


	// Masonry
	if($(".grid").length > 0) {
		$('.grid').isotope({
			// options...
			itemSelector: '.grid .grid-item',
			// masonry: {
			//   columnWidth: 200
			// }
		});

		// Image Loadead Masonry
		var $grid = $('.grid').isotope({
			// options...
		});
		// layout Isotope after each image loads
		$grid.imagesLoaded().progress(function () {
			$grid.isotope('layout');
		});
	}
	// Masonry

	// OFI Browser
	objectFitImages();

});
