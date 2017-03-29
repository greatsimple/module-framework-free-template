$(function () {
	$(document).foundation();

	AOS.init({
		duration: 1050,
		once: true,
		delay: 20
	});

	setTimeout(function () {
		AOS.refresh();
	}, 0);
});

$(function () {
	$('.js-scroll-down').click(function (e) {
		var $this = $(this);

		e.preventDefault();

		$('html, body').animate({
			scrollTop: $this.closest('.js-block').next().offset().top,
		}, 600);

		$this.trigger('blur');
	});
});

$(function () {
	$('.textbox--password .textbox__toggle').on('click', function () {
		var $button = $(this);
		var $textbox = $button.closest('.textbox');
		var $input = $button.siblings(':input');

		if ($input.attr('type') === 'password') {
			$input.attr('type', 'text');
			$textbox.addClass('is-password-visible');
		} else {
			$input.attr('type', 'password');
			$textbox.removeClass('is-password-visible');
		}

		$button.trigger('blur');
	});
});

$(function () {
	"use strict";

	var $openButton = $('.open-button');
	var $leftMenu = $('.generator__left');
	var $leftMenuClose = $('.generator__right__close');
	var $leftMenuTopLink = $('.sub-list');
	var $rightBlock = $('.generator__right');

	// Open left menu button

	$openButton.on('click', function (event) {
		event.preventDefault();

		$openButton.addClass('is-hidden');

		$leftMenu.addClass('is-open').addClass('block-sublist');

		setTimeout(function () {
			$leftMenu.addClass('is-open-full').removeClass('block-sublist');
			$leftMenuClose.removeClass('is-hidden');
		}, 450);
	});

	// Close left menu button

	$leftMenuClose.on('click', function (event) {
		event.preventDefault();

		$leftMenuClose.addClass('is-hidden');

		$leftMenu.removeClass('is-open');
		$leftMenu.removeClass('is-open-full');

		setTimeout(function () {
			$openButton.removeClass('is-hidden');
		}, 450);

	});

	// Animation for slide-in inside list

	$('.generator__right__open').off('mouseenter');

	var $leftMenuSub = $('.generator__sublist');

	$leftMenu.find('.generator__left__menu__list').menuAim({
		activate: function (event) {

			$leftMenuSub.removeClass('is-hidden');

			setTimeout(function () {
				$leftMenuSub.addClass('is-open');
			}, 100);

			var $this = $(event);
			var currentLinkData = $this.data('group');

			$leftMenuSub
				.find('.inside-list')
				.addClass('is-hidden')
				.filter(function (i, e) {
					return ($(e).data('group') == currentLinkData)
				}).removeClass('is-hidden');
		},

		deactivate: function () {

		},

		exitMenu: function () {
			return true;
		}
	});

	$leftMenu.on('mouseleave', function (event) {

		$leftMenuSub.removeClass('is-open');

		setTimeout(function () {
			$leftMenuSub
				.addClass('is-hidden')
		}, 450);

	});

	// Scroll bar for inside-list

	var $insideList = $('.inside-list');

	$insideList.mCustomScrollbar({
		theme: "dark",
		axis: 'y',
		autoHideScrollbar: 'false',
		scrollbarPosition: 'outside'
	});

	// Scrollbar for popup blocks

	var $popupBlock = $('.generator__popup__wrap');

	$popupBlock.mCustomScrollbar({
		theme: "dark",
		axis: 'y',
		autoHideScrollbar: 'false',
		scrollbarPosition: 'outside'
	});

	// Drag and drop

	var dropzone = document.getElementById('dropzone');
	var dropHeaders = document.getElementById('mCSB_1_container');
	var dropContents = document.getElementById('mCSB_2_container');
	var dropPromo = document.getElementById('mCSB_3_container');
	var dropFeatures = document.getElementById('mCSB_4_container');
	var dropPortfolio = document.getElementById('mCSB_5_container');
	var dropEcommerce = document.getElementById('mCSB_6_container');
	var dropTeam = document.getElementById('mCSB_7_container');
	var dropTestimonials = document.getElementById('mCSB_8_container');
	var dropTables = document.getElementById('mCSB_9_container');
	var dropAction = document.getElementById('mCSB_10_container');
	var dropSubscribe = document.getElementById('mCSB_11_container');
	var dropFooters = document.getElementById('mCSB_12_container');

	if (dropzone) {
		var dropZone = new Sortable(dropzone, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: true
			},
			sort: true,
			animation: 150,
			draggable: '.drag-item',

			onSort: function (event) {
				$leftMenu.trigger('mouseleave');
				countElems();
			}
		});
	}

	if (dropHeaders) {
		var sortableHeaders = new Sortable(dropHeaders, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');
			},

			onEnd: function (event) {
				$('#headers').removeClass('is-visible');
			}
		});
	}

	if (dropContents) {
		var sortableContents = new Sortable(dropContents, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#contents').removeClass('is-visible');

			}
		});
	}

	if (dropPromo) {
		var sortablePromo = new Sortable(dropPromo, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#promo').removeClass('is-visible');

			}
		});
	}

	if (dropFeatures) {
		var sortableFeatures = new Sortable(dropFeatures, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#features').removeClass('is-visible');

			}
		});
	}

	if (dropPortfolio) {
		var sortablePortfolio = new Sortable(dropPortfolio, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#portfolio').removeClass('is-visible');

			}
		});
	}

	if (dropEcommerce) {
		var sortableEcommerce = new Sortable(dropEcommerce, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#ecommerce').removeClass('is-visible');

			}
		});
	}

	if (dropTeam) {
		var sortableTeam = new Sortable(dropTeam, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#team').removeClass('is-visible');

			}
		});
	}

	if (dropTestimonials) {
		var sortableTestimonials = new Sortable(dropTestimonials, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#testimonials').removeClass('is-visible');

			}
		});
	}

	if (dropTables) {
		var sortableTables = new Sortable(dropTables, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#tables').removeClass('is-visible');

			}
		});
	}

	if (dropAction) {
		var sortableActions = new Sortable(dropAction, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#actions').removeClass('is-visible');

			}
		});
	}

	if (dropSubscribe) {
		var sortableSubscribe = new Sortable(dropSubscribe, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#subscribe').removeClass('is-visible');

			}
		});
	}

	if (dropFooters) {
		var sortableFooters = new Sortable(dropFooters, {
			group: {
				name: 'shared',
				pull: 'clone',
				put: false
			},
			sort: false,
			handle: '.drag-item',
			animation: 150,

			onStart: function (event) {
				$leftMenu.trigger('mouseleave');

			},

			onEnd: function () {
				$('#footers').removeClass('is-visible');

			}
		});
	}

	// Drag and drop delete function

	var $deleteButton = $('.generator__right__delete');

	$deleteButton.on('click', function (event) {
		event.preventDefault();

		var $dragItem = $(dropzone).find('.drag-item');
		$dragItem.addClass('animated zoomOut');

		setTimeout(function () {
			$dragItem.remove();
			countElems();
		}, 400);
	});

	// Drag and drop delete single item

	var $singleDeleteButtons = $('.item-delete');

	$singleDeleteButtons.on('click', function (event) {
		event.preventDefault();

		var $this = $(event.currentTarget).parents('.drag-item');
		$this.addClass('animated zoomOut');

		setTimeout(function () {
			$this.remove();
			countElems();
		}, 400);
	});

	// Drag and drop zoom functions

	var $zoomOut = $('.generator__right__zoom__out');
	var $zoomIn = $('.generator__right__zoom__in');
	var $zoomContainer = $('.generator__content__drag');
	var $zoomTitle = $('.generator__content__title');

	var zoomState = [
		{
			'size': 100,
			'state': true,
			'index': 0
		},
		{
			'size': 75,
			'state': false,
			'index': 1
		},
		{
			'size': 50,
			'state': false,
			'index': 2
		}
	];

	$zoomOut.on('click', function (event) {
		event.preventDefault();

		var x = _.filter(zoomState, function (e) {
			return e.state;
		});

		if (zoomState[x[0].index + 1]) {
			zoomState[x[0].index].state = false;
			zoomState[x[0].index + 1].state = true;
		}

		var y = _.filter(zoomState, function (e) {
			return e.state;
		});

		if (y[0].size < 100) {
			$zoomIn.removeClass('is-hidden');
			$zoomTitle.addClass('is-hidden');
			$zoomContainer.addClass('is-zoomed');
		}

		$zoomContainer.css({
			width: y[0].size + '%'
		}).attr('data-zoomed', y[0].size)
			.data('zoom', y[0].size);
	});

	$zoomIn.on('click', function (event) {
		event.preventDefault();

		var x = _.filter(zoomState, function (e) {
			return e.state;
		});

		if (zoomState[x[0].index - 1]) {
			zoomState[x[0].index].state = false;
			zoomState[x[0].index - 1].state = true;
		}

		var y = _.filter(zoomState, function (e) {
			return e.state;
		});
		$zoomContainer.css({
			width: y[0].size + '%'
		}).attr('data-zoomed', y[0].size)
			.data('zoom', y[0].size);

		if (y[0].size === 100) {
			$zoomIn.addClass('is-hidden');
			$zoomTitle.removeClass('is-hidden');
			$zoomContainer.removeClass('is-zoomed').css('width', '100%');
		}
	});

	// Generator popup

	var $generatorOpenPopup = $('.generator__left__bottom__more, .generator__content__title__span');
	var $generatorPopup = $('.generator__popup');
	var $generatorClose = $('.generator__popup__close');

	$generatorOpenPopup.on('click', function (event) {
		event.preventDefault();

		$generatorPopup
			.removeClass('is-hidden')
			.animate({
				opacity: 1
			}, 300, function () {
				makeBlur();
			});
	});

	$generatorClose.on('click', function (event) {
		event.preventDefault();

		$generatorPopup
			.animate({
				opacity: 0
			}, 300, function () {
				$generatorPopup.addClass('is-hidden');
			});
		removeBlur();
	});

	$(document).on('keydown', function (event) {
		if (event.keyCode === 27) {
			$generatorPopup
				.animate({
					opacity: 0
				}, 300, function () {
					$generatorPopup.addClass('is-hidden');
				});
			removeBlur();
		}
	});

	// Make blur under popup

	function makeBlur() {
		$leftMenu.addClass('is-blur');
		$rightBlock.addClass('is-blur');
	}

	function removeBlur() {
		$leftMenu.removeClass('is-blur');
		$rightBlock.removeClass('is-blur');
	}

	// Generator popup export

	var $genExportPopupOpen = $('.generator__right__download');
	var $genExportPopup = $('.generator__popup__export');
	var $genExportClose = $('.generator__popup__export__close');

	$genExportPopupOpen.on('click', function (event) {
		event.preventDefault();

		$genExportPopup
			.removeClass('is-hidden')
			.animate({
				opacity: 1
			}, 300, function () {
				makeBlur();
			});
	});

	$genExportClose.on('click', function (event) {
		event.preventDefault();

		$genExportPopup
			.animate({
				opacity: 0
			}, 300, function () {
				$genExportPopup.addClass('is-hidden');
			});

		removeBlur();
	});

	// Generator popup version

	var $genVersionPopup = $('.generator__popup__version');
	var $genVersionClose = $('.generator__popup__version__close');

	$genExportPopupOpen.on('', function (event) {
		event.preventDefault();

		$genVersionPopup
			.removeClass('is-hidden')
			.animate({
				opacity: 1
			}, 300, function () {
				makeBlur();
			});
	});

	$genVersionClose.on('', function (event) {
		event.preventDefault();

		$genVersionPopup
			.animate({
				opacity: 0
			}, 300, function () {
				$genVersionPopup.addClass('is-hidden');
			});

		removeBlur();
	});

	// Generator popup thank

	var $genThankPopup = $('.generator__popup__thank');
	var $genThankClose = $('.generator__popup__thank__close');

	$genExportPopupOpen.on('', function (event) {
		event.preventDefault();

		$genThankPopup
			.removeClass('is-hidden')
			.animate({
				opacity: 1
			}, 300, function () {
				makeBlur();
			});
	});

	$genThankClose.on('', function (event) {
		event.preventDefault();

		$genThankPopup
			.animate({
				opacity: 0
			}, 300, function () {
				$genThankPopup.addClass('is-hidden');
			});

		removeBlur();
	});

	// Count box elems

	function countElems() {

		var countElems = $zoomContainer.find('.drag-item').length;

		$zoomContainer
			.attr('count-elems', countElems)
			.data('elements', countElems)
			.find('.drag-item');

		// Add pulse to cross
		var $plusItem = $('.generator__right__open');

		if (countElems !== 0) {
			$plusItem.removeClass('is-pulsed')
		} else {
			$plusItem.addClass('is-pulsed');
		}

		console.log(countElems);
	}

	// Check form

	var $licenseInput = $('.generator__popup__export__block__bottom__form__input');
	var $licenseSubmit = $('.generator__popup__export__block__bottom__form__submit');
	var $invalidIcon = $('.generator__popup__export__block__bottom__form__invalid');
	var $invalidMessage = $('.generator__popup__export__block__bottom__message');

	$licenseSubmit.on('click', function (event) {
		event.preventDefault();

		var value = $licenseInput.val();
		var regExp = /^\d{5}$/;

		if (value.match(regExp)) {
			$licenseInput.removeClass('is-invalid');
			$invalidIcon.addClass('is-hidden');
			$invalidMessage.addClass('is-opacity-full');
		} else {
			$licenseInput.addClass('is-invalid');
			$invalidIcon.removeClass('is-hidden');
			$invalidMessage.removeClass('is-opacity-full');
		}
	});

	// Generator templates

	var templatesBlock = [
		['header-1', 'features-12', 'promo-3', 'promo-4', 'features-13', 'contents-18', 'promo-5', 'testimonials-1', 'footer-1'],
		['header-2', 'screenshot-1', 'contents-7', 'features-2', 'promo-6', 'testimonials-2', 'testimonials-3', 'subscribe-1', 'footer-2'],
		['header-3', 'portfolio-1', 'portfolio-2', 'team-1', 'call-to-action-1', 'footer-3'],
		['header-4', 'features-3', 'contents-11', 'contents-12', 'contents-13', 'contents-14', 'call-to-action-2', 'subscribe-2', 'footer-4'],
		['header-5', 'contents-1', 'testimonials-4', 'contents-16', 'features-6', 'contents-17', 'call-to-action-3', 'call-to-action-4', 'footer-5'],
		['header-6', 'features-7', 'contents-10', 'features-8', 'promo-7', 'features-1', 'subscribe-3', 'footer-6'],
		['header-7', 'portfolio-3', 'contents-9', 'testimonials-5', 'team-2', 'call-to-action-5', 'footer-7'],
		['header-8', 'call-to-action-9', 'features-9', 'promo-8', 'features-10', 'testimonials-6', 'price-tables-2', 'subscribe-4', 'call-to-action-6', 'footer-8'],
		['header-9', 'ecommerce-1', 'contents-15', 'subscribe-5', 'footer-9'],
		['header-10', 'contents-2', 'ecommerce-2', 'contents-19', 'features-11', 'footer-10'],
		['header-11', 'promo-1', 'contents-3', 'portfolio-4', 'features-4', 'testimonials-7', 'subscribe-6', 'footer-11'],
		['header-12', 'ecommerce-3', 'contents-4', 'contents-5', 'contents-6', 'ecommerce-4', 'call-to-action-7', 'footer-12'],
		['header-13', 'promo-2', 'features-5', 'contents-8', 'testimonials-8', 'price-tables-1', 'call-to-action-8', 'footer-13']
	];

	var $dragBox = $('.generator__content__drag__place__box');
	var $blockItems = $leftMenu.find('.drag-item');

	$('body').on('click', '.generator__popup__block__item', function (event) {
		event.preventDefault();

		var $this = $(event.currentTarget);

		var itemNum = $this.data('template') - 1;

		$dragBox.empty();

		if (templatesBlock[itemNum]) {

			templatesBlock[itemNum].forEach(function (e, i) {
				$blockItems.each(function () {
					if ($(this).data('name') === e) {
						$(this).clone(true).appendTo($dragBox);
					}
				});
			});
		}

		$generatorPopup
			.animate({
				opacity: 0
			}, 300, function () {
				$generatorPopup.addClass('is-hidden');
			});

		removeBlur();
	});

	// Collect drop zone blocks

	var $collectButton = $('.generator__popup__export__block__top__button');

	$collectButton.on('click', function () {

		var collectedBlocks = [];
		
		$(dropzone)
			.find('.drag-item')
			.each(function () {
				collectedBlocks.push($(this).data('name'));
			});

		console.log(collectedBlocks);
	});

});

$(function () {

	// Change blocks

	var $filterButtons = $('.contents-4__filter__button');

	$filterButtons.on('click', function (event) {
		event.preventDefault();
		var $this = $(event.currentTarget);

		var thisData = $(this).data('item');
		var $block = $('.contents-4__block');

		$filterButtons.removeClass('is-active');
		$this.addClass('is-active');
		$block.addClass('is-hidden');
		$block.eq(thisData - 1).removeClass('is-hidden');
	});

	var $scrollDown = $('.contents-4__scrollbutton__link');

	$scrollDown.on('click', function () {
		$('html, body').animate({
			scrollTop: $('.contents-5').offset().top
		}, 600);
	});

	// Swap buttons

	$(window).on('load', function (event) {
		if ($(window).width() <= 580 - 17) {
			var $swipeButtons = $('.contents-4__filter').addClass('owl-carousel');
			var $swipeItems = $('.contents-4__filter__button');

			$swipeItems.wrap('<div class="swipe-buttons-wrap">');

			var $buttonsSlider = $swipeButtons.owlCarousel({
				autoWidth: true,
				center: false,
				items: 3
			});

			$swipeButtons.find('.owl-stage').css({
				'width': '+=1'
			});
		}
	});
});

$(function () {

    var $activateButton = $('.contents-5__video__icon');
    var $videoPopup = $('.contents-5__video__popup');
    var $closeButton = $('.contents-5__video__popup__close');

    var videoFrame = document.getElementById('video-frame');

    if (window.Vimeo) {
        var player = new Vimeo.Player(videoFrame);
    }

    $activateButton.on('click', function (event) {
        event.preventDefault();
        $videoPopup.toggleClass('is-hidden');
    });

    $closeButton.on('click', function () {
        $videoPopup.toggleClass('is-hidden');
        player.unload();
    });

    if ($(window).width() <= 1020) {
        $(videoFrame).attr({
            width: 500,
            height: 281
        });
    }

    if ($(window).width() <= 520) {
        $(videoFrame).attr({
            width: 320,
            height: 180
        });
    }

});

$(function () {
	'use strict';

	var $itemFull = $('.item-full').find('img');

	var images = {
		normal: 'blocks/contents-6/images/home-image-03.jpg',
		square: 'blocks/contents-6/images/home-image-03-02.jpg'
	};

	var srcset = $itemFull.attr('srcset');

	$(window).on('resize', function () {
		if ($(window).width() <= 360 - 17) {
			$itemFull.attr('src', images.square);
			$itemFull.removeAttr('srcset');
		} else {
			$itemFull.attr('src', images.normal);
			$itemFull.attr('srcset', srcset);
		}
	});

	if ($(window).width() <= 360 - 17) {
		$itemFull.attr('src', images.square);
		$itemFull.removeAttr('srcset');
	} else {
		$itemFull.attr('src', images.normal);
		$itemFull.attr('srcset', srcset);
	}

	console.log($(window).width());
});

$(function () {

    var $activateButton = $('.contents-7__video');
    var $videoPopup = $('.contents-7__video__popup');
    var $closeButton = $('.contents-7__video__popup__close');

    var videoFrame = document.getElementById('video-frame');

    if (window.Vimeo) {
        var player = new Vimeo.Player(videoFrame);
    }

    $activateButton.on('click', function (event) {
        event.preventDefault();
        $videoPopup.toggleClass('is-hidden');
    });

    $closeButton.on('click', function () {
        $videoPopup.toggleClass('is-hidden');
        player.unload();
    });

    if ($(window).width() <= 1020) {
        $(videoFrame).attr({
            width: 500,
            height: 281
        });
    }

    if ($(window).width() <= 520) {
        $(videoFrame).attr({
            width: 320,
            height: 180
        });
    }

});

$(function () {
	if (!$('.contents-8').length) {
		return;
	}

	var $slider = $('.contents-8__content__slider');
	var $nextButton = $('.contents-8__content__slider__item__right__arrow');

	var $carousel = $slider.owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: false,
		dots: true
	});

	$nextButton.on('click', function () {
		$carousel.trigger('next.owl.carousel');
	});

	// Move owl carousel dots to right block

	var moveDots = function () {
		var $owlDots = $('.owl-dots');
		var $rightBlock = $('.owl-item.active').find('.contents-8__content__slider__item__right');
		var leftCoord = $rightBlock.position().left;
		var topCoord = $rightBlock.position().top;
		var rightBlockHeight = $rightBlock.height();

		$owlDots.css({
			left: leftCoord,
			top: topCoord + rightBlockHeight + 150
		});

		if ($(window).width() <= 450) {
			$owlDots.css({
				left: leftCoord + 25,
				top: topCoord + rightBlockHeight + 150
			});
		}
	};

	moveDots();

	$(window).on('resize', _.debounce(function () {
		moveDots();
	}, 300));
});

$(function () {
	var arrowIcon = (
		'<svg class="icon">' +
		'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-arrow"></use>' +
		'</svg>'
	);

	$('.contents-19__slider').owlCarousel({
		items: 1,
		autoHeight: true,
		dots: true,
		nav: true,
		loop: true,
		mouseDrag: false,
		navText: [arrowIcon, arrowIcon]
	});
});

$(function () {
	"use strict";

	var $filterButtons = $('.ecommerce-1__content__filter__button');

	$filterButtons.on('click', function (event) {
		event.preventDefault();
		var $this = $(event.currentTarget);

		$filterButtons.removeClass('is-active');
		$this.addClass('is-active');

	});

	// Change products

	$filterButtons.on('click', function (event) {
		event.preventDefault();
		var $this = $(event.currentTarget);

		var productItems = $('.ecommerce-1__content__block__product').not('is-hidden').toArray();

		$(productItems).animate({
			opacity: 0
		}, 350, function () {
			var shuffled = _.shuffle(productItems);
			$(shuffled)
				.prependTo('.ecommerce-1__content__block')
				.css({opacity: 1})
		});
	});

	// Load more products

	var $loadButton = $('.ecommerce-1__content__more');
	var $productsBlock = $('.ecommerce-1__content__block');

	$loadButton.on('click', function (event) {
		event.preventDefault();

		var products = $('.ecommerce-1__content__block__product').not('.is-hidden').clone().toArray();
		var shuffled = _.shuffle(products);
		var winWidth = $(window).width();

		if (winWidth >= 1200 - 17) {
			$(shuffled).slice(0, 4).appendTo($productsBlock);
		}

		if (winWidth < 1200 - 17 && $(window).width() >= 1024 - 17) {
			$(shuffled).slice(0, 3).appendTo($productsBlock);
		}

		if (winWidth < 1024 - 17 && $(window).width() >= 768 - 17) {
			$(shuffled).slice(0, 2).appendTo($productsBlock);
		}

		if (winWidth < 768 - 17) {
			$(shuffled).slice(0, 1).appendTo($productsBlock);
		}

		$('body, html').animate({
			scrollTop: $loadButton.offset().top - $(window).height() + $loadButton.outerWidth()
		}, 600)
	});

	// Swap buttons

	$(window).on('load', function (event) {
		if ($(window).width() <= 830 - 17) {
			var $swipeButtons = $('.ecommerce-1__content__filter').addClass('owl-carousel');
			var $swipeItems = $('.ecommerce-1__content__filter__button');

			$swipeItems.wrap('<div class="swipe-buttons-wrap">');

			var $buttonsSlider = $swipeButtons.owlCarousel({
				autoWidth: true,
				center: false,
				items: 6
			});

			$swipeButtons.find('.owl-stage').css({
				'width': '+=1'
			});
		}
	});
});

$(function () {
	"use strict";

	// Load more products

	var $loadButton = $('.ecommerce-2__more-link');
	var $productsBlock = $('.ecommerce-2__list');

	$loadButton.on('click', function (event) {
		event.preventDefault();

		var products = $('.ecommerce-2__item').clone().toArray();
		var shuffled = _.shuffle(products);

		$(shuffled).slice(0, 2).appendTo($productsBlock);

		$('body, html').animate({
			scrollTop: $loadButton.offset().top - $(window).height() + $loadButton.outerWidth()
		}, 600)
	});
});

$(function () {
	"use strict";

	var $slider01 = $('.ecommerce-3__image__slider');
	var $slider02 = $('.ecommerce-3__info__slider');
	var $sliderLeft = $('.ecommerce-3__image__slider__nav__left');
	var $sliderRight = $('.ecommerce-3__image__slider__nav__right');

	var $carousel01 = $slider01.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		center: true,
		autoWidth: true,
		mouseDrag: false
	});

	setTimeout(function () {
		$carousel01.trigger('refresh.owl.carousel');
	}, 700);

	$sliderLeft.on('click', function () {
		$carousel01.trigger('prev.owl.carousel');
	});

	$sliderRight.on('click', function () {
		$carousel01.trigger('next.owl.carousel');
	});

	var $number = $('.ecommerce-3__info__price__col').find('input');

	$number.spinner({
		'min': 1,
		'step': 1
	});

	var $favoriteStar = $('.ecommerce-3__info__fav-share__left__star');

	$favoriteStar.on('click', function (event) {
		event.preventDefault();
		$(this).find('svg').toggleClass('is-active');
	});

	var $colorItem = $('.ecommerce-3__info__colors__item');

	$colorItem.on('click', function (event) {
		var $this = $(event.currentTarget);
		$colorItem.removeClass('is-active');
		$this.addClass('is-active');
	});

	var $infoItem = $('.ecommerce-3__info__item');

	$infoItem.each(function () {
		var $ratingItem = $(this).find('.ecommerce-3__info__rating__item');

		$ratingItem.on('click', function (event) {
			var $this = $(event.currentTarget);
			var thisNumber = $this.data('number');

			$ratingItem.removeClass('is-active');

			for (var i = 0; i < thisNumber; i = i + 1) {
				$ratingItem.eq(i).addClass('is-active');
			}
		});
	});
});

$(function () {
	var $slider = $('.ecommerce-4__block');
	var $leftArrow = $('.ecommerce-4__nav__prev');
	var $rightArrow = $('.ecommerce-4__nav__next');

	var $carousel = $slider.owlCarousel({
		items: 1,
		loop: true,
		dots: true
	});

	$leftArrow.on('click', function () {
		$carousel.trigger('prev.owl.carousel');
	});

	$rightArrow.on('click', function () {
		$carousel.trigger('next.owl.carousel');
	});
});

$(function () {
	"use strict";

	var $slider = $('.features-13__slider');

	var $carousel = $slider.owlCarousel({
		items: 3,
		nav: false,
		navText: ['', ''],
		dots: false,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			1200: {
				items: 2
			},
			1700: {
				items: 3
			}
		}
	});

	var makeCarousel = function () {
		if ($(window).width() >= 1007) {
			setTimeout(function () {
				var $owlItem = $slider.find('.owl-item');
				var $activeItem = $owlItem.filter('.active');

				$owlItem.removeClass('is-opacity');

				var $targetItem = $activeItem.not(':eq(1)');

				$targetItem.addClass('is-opacity');
			}, 400);
		}
	};

	makeCarousel();

	$carousel.on('changed.owl.carousel', makeCarousel);

	var $owlNav = $('.owl-nav');

	$owlNav.appendTo($slider);

	var $sliderPrev = $('.owl-prev');
	var $sliderNext = $('.owl-next');

	$sliderPrev.on('click', function () {
		$carousel.trigger('prev.owl.carousel');
	});

	$sliderNext.on('click', function () {
		$carousel.trigger('next.owl.carousel');
	});

});

$(function () {
	$('.js-to-top').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({'scrollTop': 0}, 400);
	});
});

$(function () {
	"use strict";

	var $select = $('.footer-5__language__select');

	$select.each(function () {
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('is-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				rel: $this.children('option').eq(i).val()
			}).prepend($('.select__icons').find('[data-country="' + $this.children('option').eq(i).data('country') + '"]').clone())
				.append('<div class="select__icons__text"><div class="select__icons__text__number">' + $.trim($this.children('option').eq(i).html()) + '</div><div class="select__icons__text__country">' + $this.children('option').eq(i).data('country-full') + '</div></div>').appendTo($list);
		}

		$styledSelect.append('<div class="select__icons__text">' + $.trim($this.children('option').eq(0).html()) + '</div>')
			.prepend($('.select__icons').find('[data-country="' + $this.children('option').eq(0).data('country') + '"]').clone());

		var $listItems = $list.children('li');

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function () {
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.html($(this).html()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});

		$(document).click(function () {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});
});

$(function () {
	var $languageSelect = $('#language-select');

	$languageSelect.on('change', function () {
		var $this = $(this);

		$this.siblings('.footer-13__content__language__arrow').removeClass('top-direction');

		var number = $this.find('.option-item:selected').data('item');

		if (number === 2) {
			$this.siblings('.footer-13__content__language__arrow').addClass('top-direction');
		}
	});
});

$(function () {
	"use strict";

	var $scrollBottom = $('.header-1__block__next');
	var $layoutsBlock = $('.features-12');

	$scrollBottom.on('click', function () {
		$('html, body').animate({
			scrollTop: $layoutsBlock.offset().top
		}, 300);
	});

	var $hamburgerButton = $('.hamburger-button');
	var $hamburgerPopup = $('.hamburger');
	var $hamburgerClose = $('.hamburger-close');

	$hamburgerButton.on('click', function (event) {
		event.preventDefault();

		$hamburgerPopup
			.removeClass('is-hidden')
			.animate({
				left: 0
			}, 0, function () {
				$hamburgerPopup.css({
					position: 'fixed'
				}).animate({
					opacity: 1
				}, 500);
			});
	});

	$hamburgerClose.on('click', function (event) {
		event.preventDefault();

		$hamburgerPopup
			.animate({
				opacity: 0
			}, 500, function () {
				$hamburgerPopup
					.addClass('is-hidden')
					.css({
						left: '-100%'
					});
			})
	});
});

$(function () {
	"use strict";

	var $hamburgerOpen = $('.header-3__button__hamburger');
	var $hamburgerPopup = $('.header-3__hamburger');
	var $hamburgerClose = $('.header-3__hamburger__close');

	$hamburgerOpen.on('click', function (event) {
		event.preventDefault();

		$hamburgerPopup.removeClass('is-hidden').animate({
			opacity: 1
		}, 500);
	});

	$hamburgerClose.on('click', function (event) {
		event.preventDefault();

		$hamburgerPopup.animate({
			opacity: 0
		}, 500, function () {
			$hamburgerPopup.addClass('is-hidden');
		})
	});
});

$(function () {
	"use strict";

	var $activateButton = $('.header-5__buttons__watch');
	var $videoPopup = $('.header-5__video__popup');
	var $closeButton = $('.header-5__video__popup__close');

	var videoFrame = document.getElementById('video-frame');

	if (window.Vimeo) {
		var player = new Vimeo.Player(videoFrame);
	}

	$activateButton.on('click', function (event) {
		event.preventDefault();
		$videoPopup.toggleClass('is-hidden');
	});

	$closeButton.on('click', function () {
		$videoPopup.toggleClass('is-hidden');
		player.unload();
	});

	if ($(window).width() <= 1020) {
		$(videoFrame).attr({
			width: 500,
			height: 281
		});
	}

	if ($(window).width() <= 520) {
		$(videoFrame).attr({
			width: 320,
			height: 180
		});
	}

	if ($(window).width() <= 750) {
		$('.header-5__logo').prependTo('.header-5__middle');
		$('.header-5__tag').remove();
	}

});

$(function () {
	var $searchButton = $('.header-6__top__auth__search__icon');
	var $searchForm = $('.header-6__top__auth__search__form');

	$searchButton.on('click', function () {

		if ($searchForm.hasClass('is-hidden')) {

			$searchButton.css({
				position: 'absolute'
			}).animate({
				left: -250
			}, 500);

			$searchForm.removeClass('is-hidden')
				.animate({
					width: 200
				}, 500);
		} else {

			$searchButton.animate({
				left: -42
			}, 500, function () {
				$searchButton.css({
					position: 'static'
				})
			});

			$searchForm
				.animate({
					width: 0
				}, 500, function () {
					$searchForm.addClass('is-hidden');
				});
		}
	});
});

$(function () {
	'use strict';

	var $carousel = $('.header-7__slider').owlCarousel({
		items: 1,
		autoHeight: true,
		dots: true,
		nav: false,
		loop: false,
		mouseDrag: false
	});

	var $hamburgerButton = $('.header-7__button__hamburger');
	var $hamburgerPopup = $('.header-7__hamburger');
	var $hamburgerClose = $('.header-7__hamburger__header__close');

	$hamburgerButton.on('click', function (event) {
		event.preventDefault();

		$hamburgerPopup
			.removeClass('is-hidden')
			.animate({
				opacity: 1
			}, 500);

		$hamburgerButton.addClass('is-hidden');
	});

	$hamburgerClose.on('click', function (event) {
		event.preventDefault();

		$hamburgerPopup
			.animate({
				opacity: 0
			}, 500, function () {
				$hamburgerPopup.addClass('is-hidden');
			});

		$hamburgerButton.removeClass('is-hidden');
	});

	if ($(window).width() <= 1290 - 17) {
		$('.header-7__slider__item__container')
			.removeClass('container');
	}

	var $owlDots = $('.owl-dots');

	var positionDots = function () {

		var $posElem = $('.owl-item').filter('.active').find('.tag-2');

		var coords = $posElem.offset();

		if (coords) {
			$owlDots.css({
				left: coords.left
			});
		}

		$owlDots.css('display', 'block');
	};

	positionDots();

	$carousel.on('changed.owl.carousel', function () {

		$owlDots.css('display', 'none');
		setTimeout(function () {
			positionDots();
		}, 800);
	});
});

$(function () {
	$('.header-8__clients').owlCarousel({
		autoWidth: true,
		items: 6,
		loop: true,
		margin: 50,
		responsive: {
			0: {
				margin: 0
			},
			739: {
				margin: 20
			},
			967: {
				margin: 50
			}
		}
	});
});

$(function () {
	var $slider = $('.header-9__middle__slider');
	var $leftArrow = $('.header-9__middle__slider__nav__prev');
	var $rightArrow = $('.header-9__middle__slider__nav__next');

	var $carousel = $slider.owlCarousel({
		autoWidth: true,
		items: 3,
		loop: true,
		margin: 28,
		nav: false,
		mouseDrag: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1,
				center: true
			},
			820: {
				items: 2
			},
			1220: {
				items: 3
			}
		}
	});

	$leftArrow.on('click', function () {
		$carousel.trigger('prev.owl.carousel');
	});

	$rightArrow.on('click', function () {
		$carousel.trigger('next.owl.carousel');
	});
});

$(function () {
	"use strict";

	var colors = {
		'black': 'blocks/header-10/images/bg-black.jpg',
		'silver': 'blocks/header-10/images/bg-silver.jpg',
		'gold': 'blocks/header-10/images/bg-gold.jpg',
		'gloss': 'blocks/header-10/images/bg-gloss.jpg'
	};

	var $colorItem = $('.header-10__colors__item');
	var $image = $('.header-10__image');

	$colorItem.on('click', function (event) {
		var $this = $(event.currentTarget);

		$image.addClass('fadeIn').attr('src', '' + colors[$this.data('color')] + '');

		setTimeout(function() {
			$image.removeClass('fadeIn');
		}, 150);
	});
});

$(function () {
  "use strict";

  var $hamburgerButton = $('.header-12__button__hamburger');
  var $hamburgerPopup = $('.header-12__hamburger-popup');
  var $hamburgerLeft = $('.header-12__hamburger-popup__left');

  $hamburgerButton.on('click', function (event) {
    event.preventDefault();

    $hamburgerPopup
      .removeClass('is-hidden')
      .find('.popup-inside')
      .animate({
        left: 0
      }, 500);
  });

  $hamburgerLeft.on('click', function (event) {
    event.stopPropagation();
  });

  if ($hamburgerPopup.get(0)) {
    $hamburgerPopup.get(0).addEventListener('click', function (event) {
      event.preventDefault();

      $hamburgerPopup
        .find('.popup-inside')
        .animate({
          left: '-100%'
        }, function () {
          $hamburgerPopup.addClass('is-hidden');
        });
    }, false);
  }
});

$(function () {
	"use strict";

	var $userBlock = $('.header-13__content__user');

	$userBlock.on('mouseenter mouseleave', function () {

		$userBlock.toggleClass('is-active');

	});

});

$(function () {
	var arrowIcon = (
		'<svg class="icon">' +
		'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-arrow"></use>' +
		'</svg>'
	);

	$('.portfolio-1__items').owlCarousel({
		items: 1,
		autoHeight: true,
		dots: true,
		nav: true,
		loop: true,
		mouseDrag: false,
		navText: [arrowIcon, arrowIcon]
	});
});

$(function () {
	"use strict";

	var $moreButton = $('.portfolio-2__button');
	var $block = $('.portfolio-2__row');
	var $items = $('.portfolio-2__column');

	$moreButton.on('click', function (event) {
		event.preventDefault();

		var items = $items.clone().toArray();
		var shuffled = _.shuffle(items);

		$(shuffled).appendTo($block);

		$('html, body').animate({
			scrollTop: $moreButton.offset().top - $(window).height() + $moreButton.outerHeight()
		}, 600);
	});
});

$(function () {

	'use strict';

	var $filterButtons = $('.portfolio-3__tabs__button');
	var $filterBlocks = $('.portfolio-3__projects');

	$filterButtons.on('click', function (event) {
		var $this = $(event.currentTarget);
		event.preventDefault();

		$filterButtons.removeClass('is-active');
		$this.addClass('is-active');

		var thisData = $this.data('item');

		$filterBlocks.not('.is-hidden')
			.animate({
				opacity: 0
			}, 300, function () {
				$(this).addClass('is-hidden')
			}).end()
			.filter(function (index, elem) {
				return ($(elem).data('item') === thisData);
			}).css({
			opacity: 0
		}).removeClass('is-hidden').animate({
			opacity: 1
		}, 300);
	});

	var $moreButton = $('.portfolio-3__all');

	$moreButton.on('click', function (event) {
		event.preventDefault();

		var $items = $filterBlocks.not('.is-hidden').clone();
		$items.insertBefore($moreButton);

		$('html, body').animate({
			scrollTop: $moreButton.offset().top - $(window).height() + $moreButton.outerHeight()
		}, 600);
	});

	// Swap buttons

	$(window).on('load', function (event) {
		if ($(window).width() <= 600 - 17) {
			var $swipeButtons = $('.portfolio-3__tabs__inner').addClass('owl-carousel');
			var $swipeItems = $('.portfolio-3__tabs__button');

			$swipeItems.wrap('<div class="swipe-buttons-wrap">');

			var $buttonsSlider = $swipeButtons.owlCarousel({
				autoWidth: true,
				center: false,
				items: 3
			});

			$swipeButtons.find('.owl-stage').css({
				'width': '+=1'
			});
		}
	});
});

$(function () {
	var $pricingItem = $('.price-tables-1__content__block__item');

	$pricingItem.filter('.is-active').find('> *').addClass('is-active');

	$pricingItem.on('mouseenter', function (event) {
		var $this = $(event.currentTarget);

		$pricingItem.removeClass('is-active').find('> *').removeClass('is-active');
		$this.addClass('is-active').find('> *').addClass('is-active');
	});
});

$(function () {
	var $priceItem = $('.price-tables-2__content__block__item');

	$priceItem.on('mouseenter', function (event) {
		var $this = $(event.currentTarget);

		$this.find('.price-tables-2__content__block__item__info').removeClass('is-hidden');
	});

	$priceItem.on('mouseleave', function (event) {
		var $this = $(event.currentTarget);

		$this.find('.price-tables-2__content__block__item__info').addClass('is-hidden');
	});
});

$(function () {
	var arrowIcon = (
		'<svg class="icon">' +
		'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-arrow"></use>' +
		'</svg>'
	);

	$('.promo-1__items').owlCarousel({
		items: 1,
		autoHeight: true,
		dots: false,
		nav: true,
		loop: true,
		mouseDrag: false,
		navText: [arrowIcon, arrowIcon]
	});

	setTimeout(function () {
		$('.promo-1__more__link').removeClass('is-hidden');
	}, 500);
});

$(function () {
	var $platformsInner = $('.promo-6__platforms__inner');

	$platformsInner.draggable({
		axis: 'x',
		cursor: 'move',
		scroll: false,
		start: function (event, ui) {
			this.previousPosition = ui.position;
		},
		drag: function (e, ui) {
			var direction = (this.previousPosition.left > ui.position.left) ? 'left' : 'right';
			var $inner = ui.helper;
			var innerOffset = $inner.offset();
			var innerWidth = $inner.width();
			var $block = $inner.parent();
			var blockWidth = $block.width();

			if (innerWidth <= blockWidth) {
				$inner.css({left: 'auto'});

				return false;
			}

			if (innerOffset.left >= 0 && direction === 'right') {
				$inner.css({left: '-=' + innerOffset.left});

				return false;
			}

			if (innerOffset.left + innerWidth <= blockWidth && direction === 'left') {
				$inner.css({left: '+=' + (blockWidth - (innerOffset.left + innerWidth))});

				return false;
			}
		}
	});

	$(window).on('resize', function () {
		$platformsInner.css({left: 'auto'});
	});
});

$(function () {
	if ($(document).width() <= 1400) {
		$('.promo-8__content__left').wrap('<div>', {'class': 'container'});
	}
});

$(function () {
	"use strict";

	var $select = $('.subscribe-3__form__select');

	$select.each(function () {
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('is-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				rel: $this.children('option').eq(i).val()
			}).prepend($('.select__icons').find('[data-country="' + $this.children('option').eq(i).data('country') + '"]').clone())
				.append('<div class="select__icons__text"><div class="select__icons__text__number">' + $.trim($this.children('option').eq(i).html()) + '</div><div class="select__icons__text__country">' + $this.children('option').eq(i).data('country-full') + '</div></div>').appendTo($list);
		}

		$styledSelect.append('<div class="select__icons__text">' + $.trim($this.children('option').eq(0).html()) + '</div>')
			.prepend($('.select__icons').find('[data-country="' + $this.children('option').eq(0).data('country') + '"]').clone());

		var $listItems = $list.children('li');

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function () {
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.html($(this).html()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});

		$(document).click(function () {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});
});

$(function () {
	var $slider = $('.testimonials-1__slider');

	var $carousel = $slider.owlCarousel({
		items: 3,
		loop: true,
		nav: false,
		center: true,
		touchDrag: true,
		autoWidth: true,
		responsive: {
			0: {
				autoWidth: false,
				items: 1
			},
			1024: {
				items: 3
			}
		}
	});

	var positonCarouselItems = function () {
		if ($(window).width() >= 1007) {
			setTimeout(function () {
				var $items = $slider.find('.owl-item');

				$items.removeClass('is-opacity is-opacity-zero');

				var $centerItem = $slider.find('.owl-item.active.center');
				var $leftItem = $centerItem.prev();
				var $rightItem = $centerItem.next();

				$leftItem.css({
					left: -150,
					right: 'unset'
				}).addClass('is-opacity');

				$rightItem.css({
					right: -150,
					left: 'unset'
				}).addClass('is-opacity');

				$centerItem.css({
					right: 'unset',
					left: 'unset'
				});

				if ($(window).width() >= 1500) {

					$leftItem.css({
						left: -250
					});

					$rightItem.css({
						right: -250
					});
				}

				$items.not($centerItem).not($leftItem).not($rightItem).addClass('is-opacity-zero');

			}, 200);
		}
	};

	positonCarouselItems();

	$carousel.on('changed.owl.carousel', function () {
		positonCarouselItems();
	});

	var $starsBlock = $('.testimonials-1__slider__block__header__stars');

	$starsBlock.each(function () {
		var $this = $(this);
		var $ratingItem = $this.find('.testimonials-1__slider__block__header__stars__item');

		$ratingItem.on('click', function (event) {
			var $this = $(event.currentTarget);
			var thisNumber = $this.data('number');

			$ratingItem.find('svg').removeClass('is-active');

			for (var i = 0; i < thisNumber; i = i + 1) {
				$ratingItem.eq(i).find('svg').addClass('is-active');
			}
		});
	});
});

$(function () {
	var $slider = $('.testimonials-2__slider');

	var arrowIcon = (
		'<svg class="icon">' +
		'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-arrow"></use>' +
		'</svg>'
	);

	$('.testimonials-2__people__item').each(function (index) {
		$(this)
			.data('index', index)
			.attr('data-index', index);
	});

	$('.testimonials-2__slider__item').each(function (index) {
		$(this)
			.data('index', index)
			.attr('data-index', index);
	});

	$(document).on('click', '.testimonials-2__people__item', function (e) {
		var $item = $(this);

		e.preventDefault();
		$slider.trigger('to.owl.carousel', [$item.data('index')]);
		$item.trigger('blur');
	});

	$(document).on('mouseenter focus', '.testimonials-2__people__item', function () {
		$slider.find('.testimonials-2__people__item').removeClass('hover');
		$(this).addClass('is-hover');
	});

	$(document).on('mouseleave blur', '.testimonials-2__people__item', function () {
		$(this).removeClass('is-hover');
	});

	$slider.owlCarousel({
		items: 1,
		autoHeight: true,
		dots: false,
		nav: true,
		loop: true,
		mouseDrag: false,
		navText: [arrowIcon, arrowIcon],
		smartSpeed: 750
	});

	$slider.on('changed.owl.carousel', function (event) {
		setTimeout(function () {
			var $slider = $(event.target);
			var $activeSlide = $slider.find('.owl-item.active');
			var $activeItem = $activeSlide.find('.testimonials-2__slider__item');
			var index = $activeItem.data('index');

			$('.testimonials-2__people__item')
				.removeClass('is-active')
				.filter('[data-index="' + index + '"]')
				.addClass('is-active');
		}, 0);
	});
});

$(function () {
  "use strict";

  if ($(window).width() <= 360) {
    $('.testimonials-3__row').find('.testimonials-3__column:gt(1)').remove();
  }
});

$(function () {
	"use strict";

	var $slider = $('.testimonials-4__top__slider');
	var $sliderItem = $('.testimonials-4__top__slider__item');

	$sliderItem.each(function (index) {
		$(this)
			.data('index', index)
			.attr('data-index', index);
	});

	var $carousel = $slider.owlCarousel({
		autoWidth: true,
		items: 5,
		center: true,
		margin: 10,
		loop: true,
		nav: true,
		navText: ['', '']
	});

	function selectItem(index) {
		var $hiding = $('.testimonials-4__bottom__slider__item.is-active');
		var $showing = $('.testimonials-4__bottom__slider__item:eq(' + index + ')');

		if ($showing.hasClass('is-active')) {
			return;
		}

		$slider.find('.testimonials-4__top__slider__item').each(function () {
			var $item = $(this);

			$item.toggleClass('is-active', $item.data('index') === index);
		});

		clearTimeout($hiding.data('timeoutId'));
		clearTimeout($showing.data('timeoutId'));

		$hiding
			.css({opacity: 0})
			.data('timeoutId', setTimeout(function () {
				$hiding
					.css({display: 'none'})
					.removeClass('is-active');
			}, 0));

		$showing
			.css({display: 'block'})
			.data('timeoutId', setTimeout(function () {
				$showing
					.css({opacity: 1})
					.addClass('is-active');
			}, 0));
	}

	var $sliderPrev = $('.testimonials-4__bottom__prev');
	var $sliderNext = $('.testimonials-4__bottom__next');

	$sliderPrev.on('click', function () {
		$carousel.trigger('prev.owl.carousel');
	});

	$sliderPrev.on('click', function () {
		var $currentActive = $('.owl-item.active .testimonials-4__top__slider__item.is-active');

		$currentActive.parent().prev().find('.testimonials-4__top__slider__item').trigger('click');
	});

	$sliderNext.on('click', function () {
		$carousel.trigger('next.owl.carousel');
	});

	$sliderNext.on('click', function () {
		var $currentActive = $('.owl-item.active .testimonials-4__top__slider__item.is-active');

		$currentActive.parent().next().find('.testimonials-4__top__slider__item').trigger('click');
	});

	$(document).on('click', '.testimonials-4__top__slider__item', function () {
		selectItem($(this).data('index'));
	});

	var slideCompany = function () {
		$carousel
			.find('.owl-item')
			.css({
				opacity: 1
			})
			.not('.active')
			.css({
				opacity: 0
			})
			.end()
			.filter('.active').last().css({opacity: 0});
	};

	$carousel.on('changed.owl.carousel', function () {
		setTimeout(function () {
			slideCompany();
		}, 200);
	});
	slideCompany();
});

$(function () {
	var $slider = $('.testimonials-5__bottom__slider');

	$('.testimonials-5__bottom__slider__item').each(function (index) {
		$(this)
			.data('index', index)
			.attr('data-index', index);
	});

	$slider.owlCarousel({
		autoWidth: true,
		items: 5,
		center: true,
		margin: 15,
		loop: true,
		nav: true,
		navText: ['', '']
	});

	function selectItem(index) {
		var $hiding = $('.testimonials-5__top__slider__item.is-active');
		var $showing = $('.testimonials-5__top__slider__item:eq(' + index + ')');

		if ($showing.hasClass('is-active')) {
			return;
		}

		$slider.find('.testimonials-5__bottom__slider__item').each(function () {
			var $item = $(this);

			$item.toggleClass('is-active', $item.data('index') === index);
		});

		clearTimeout($hiding.data('timeoutId'));
		clearTimeout($showing.data('timeoutId'));

		$hiding
			.css({opacity: 0})
			.data('timeoutId', setTimeout(function () {
				$hiding
					.css({display: 'none'})
					.removeClass('is-active');
			}, 600));

		$showing
			.css({display: 'inline-block'})
			.data('timeoutId', setTimeout(function () {
				$showing
					.css({opacity: 1})
					.addClass('is-active');
			}, 0));
	}

	$(document).on('click', '.testimonials-5__bottom__slider__item', function () {
		selectItem($(this).data('index'));
	});

	var slideCompany = function () {
		$slider
			.find('.owl-item')
			.css({
				opacity: 1
			})
			.not('.active')
			.css({
				opacity: 0
			})
			.end()
			.filter('.active').last().css({opacity: 0});
	};

	$slider.on('changed.owl.carousel', function () {
		setTimeout(function () {
			slideCompany();
		}, 200);
	});
	slideCompany();
});

$(function () {
	var $slider = $('.testimonials-6__content');
	var $sliderNext = $('.testimonials-6__nav__next');
	var $sliderPrev = $('.testimonials-6__nav__prev');

	var $carousel = $slider.owlCarousel({
		autoWidth: false,
		items: 1,
		loop: true,
		margin: 50,
		mouseDrag: true,
		nav: true,
		navText: ['', ''],
		responsive: {}
	});

	$sliderNext.on('click', function () {
		$carousel.trigger('next.owl.carousel');
	});

	$sliderPrev.on('click', function () {
		$carousel.trigger('prev.owl.carousel');
	});
});

$(function () {
	var $partnersItems = $('.testimonials-8__content__block__item');
	var $textBlockItems = $('.testimonials-8__content__text__item');

	$partnersItems.on('click', function () {
		var $this = $(this);
		var thisItem = $this.data('item');

		$partnersItems.removeClass('is-active');
		$this.addClass('is-active');
		$textBlockItems.removeClass('is-active');
		$textBlockItems.eq(thisItem - 1).addClass('is-active');
	});
});

