function updateNavbarColours() {
    //alert('ready!');

	//goal
	//highlight the page section 
	//as it is scrolled to 
	//on the nav bar

	//steps
	//find out what section is on the screen
	//....When the following section is 25% from the top of the screen
	//....capture the following section
	//match that with the link to that section
	//....find the link
	//change the style of that link
	//....put the link in bold

	var $window = $(window);            // the window jQuery element
	var aboutSection = $('#section-about').offset().top - 60;  // the top (y) location of your element
	var stylesSection = $('#section-styles').offset().top - 60;  // the top (y) location of your element
	var listenSection = $('#section-listen').offset().top - 60;  // the top (y) location of your element
	var videoSection = $('#section-video').offset().top - 60;  // the top (y) location of your element
	var bookSection = $('#section-book').offset().top - 350;  // the top (y) location of your element - Offset is for desktop, prob too much for mobile
	var windowTop = $window.scrollTop();           // the top of the window
	var windowBottom = windowTop + $window.height();  // the bottom of the window
	//console.log(aboutSection);
	console.log('----------');
	console.log('TOP:' + windowTop);
	//console.log('ABOUT:' + aboutSection);
	console.log('STYLES:' + stylesSection);
	console.log('LISTEN:' + listenSection);
	//console.log('VIDEO:' + videoSection);
	//console.log('BOOK:' + bookSection);
	console.log('BOTTOM:' + windowBottom);
	console.log('----------');

	//if (windowTop < aboutSection && windowBottom > aboutSection) {
		if (windowBottom > aboutSection && windowTop < stylesSection) {
	    console.log('ABOUT');
	    $('#about').css("color", "#36342f");
	    $('#styles').css("color", "#887439");
	    // element is in the window
	    //console.log('alereet');
	    // alert('about section');
	    //highlight ABOUT
		} else if (windowBottom > stylesSection && windowTop < listenSection) {
		console.log('STYLES');
		$('#about').css("color", "#887439");
		$('#styles').css("color", "#36342f");
		$('#listen').css("color", "#887439");
		//alert('NOT about section');
		//console.log('NOT alereet');
	    // element is NOT in the window
	    // maybe use this to scroll... 
	    // $('html, body').animate({scrollTop: myTop}, 300);
	    //highlight STYLES
		} else if (windowBottom > listenSection && windowTop < videoSection) {
		console.log('LISTEN');
		$('#styles').css("color", "#887439");
		$('#listen').css("color", "#36342f");
		$('#video').css("color", "#887439");
		//highlight LISTEN
		} else if (windowBottom > videoSection && windowTop < bookSection) {
		console.log('VIDEO');
		$('#listen').css("color", "#887439");
		$('#video').css("color", "#36342f");
		$('#book').css("color", "#887439");
		//highlight VIDEO
		} else if (windowBottom > bookSection) {	
		//highlight BOOK
		console.log('BOOK');
		$('#video').css("color", "#887439");
		$('#book').css("color", "#36342f");

		}
		//highlight BOOK
}

function scrollTo (pageSection) {
	//alert(pageSection);
	var scrollToSection = "#section-" + pageSection;

	// alert(scrollToSection);
	 $('html, body').animate({ 
	 	scrollTop: $(scrollToSection).offset().top }, 'slow');
}

function ctaClick (ctaSection) {
//alert(ctaSection);


	var cta = "#section-" + ctaSection;
	$('html, body').animate({ 
		scrollTop: $(cta).offset().top }, 'slow');
    return false;
	//when a cta is clicked
	//find out what the next section is
	//go to the next section

}

$( document ).scroll(function() {

 updateNavbarColours()

});


//45mins
//53mins
//50min
//40 mins
//40 mins 
