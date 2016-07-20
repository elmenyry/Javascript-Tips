$(function() {
		
	// Filter the given class out of the array
	function filterArray(array, exclude) {
		var newArray = array.slice(0); // clone array (sort of)
		for (var i=newArray.length-1; i>=0; i--) {
			if (newArray[i] === exclude) {
				newArray.splice(i, 1);
			}
		}
		return newArray;
	}

	// Switch body classes for layout changing modals
	var bodyClasses = ['open-nav'];

	function switchBodyClass(className) {
		var delay = 0;
		var classArray = filterArray(bodyClasses, className);

		for (var i=0; i<classArray.length; i++) {
			if (document.body.classList.contains(classArray[i])) delay = 300;
			document.body.classList.remove(classArray[i]);
		}

		window.setTimeout( function() {
			document.body.classList.toggle(className);
			if (className === 'open-nav')  animateNavBackground();
		}, delay);

	}

	// Menu SVG animation
	var shapeElement = $( '.navigation-overlay .svg-background' );
	var s = Snap(( 'svg' ));
	var pathElement = s.select( 'path' );
	var paths = {
		reset : pathElement.attr( 'd' ),
		open : shapeElement.attr( 'data-morph-open' ),
		close : shapeElement.attr( 'data-morph-close' )
	};

	function animateNavBackground() {
		pathElement.stop().animate( { 'path' : paths.open }, 250, mina.easeout, function() {
			pathElement.stop().animate( { 'path' : paths.reset }, 800, mina.elastic );
		} );
	}

	// Expand Overlay
	$('.js-toggle-menu').on('click', function() {
		switchBodyClass('open-nav');
		console.log('gooooooood snap svg');
	});

	$('.js-toggle-share').on('click', function() {
		$('.share_overlay').addClass('opened');
	});

	});