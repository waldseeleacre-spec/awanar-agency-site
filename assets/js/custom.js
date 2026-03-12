$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Aos
	AOS.init({
		once: true,
	});



    /* Language Switcher — EN (default) / DE
       Reads [data-en] / [data-de] attributes and swaps textContent.
       Persists selection in localStorage under key 'awanar-lang'. */
    var SUPPORTED    = ['en', 'de'];
    var DEFAULT_LANG = 'en';

    function applyLang(lang) {
        if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;

        // Mark active lang on root element
        document.documentElement.setAttribute('data-lang', lang);

        // Update EN | DE active state
        document.querySelectorAll('.awanar-lang-btn').forEach(function (btn) {
            var isActive = btn.getAttribute('data-lang-btn') === lang;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });

        // Swap every element that carries both data-en and data-de
        document.querySelectorAll('[data-en][data-de]').forEach(function (el) {
            el.textContent = el.getAttribute('data-' + lang);
        });

        // Swap form placeholders that carry data-ph-en and data-ph-de
        document.querySelectorAll('[data-ph-en][data-ph-de]').forEach(function (el) {
            el.setAttribute('placeholder', el.getAttribute('data-ph-' + lang));
        });

        // Persist
        try { localStorage.setItem('awanar-lang', lang); } catch (e) {}
    }

    function initLang() {
        var stored;
        try { stored = localStorage.getItem('awanar-lang'); } catch (e) {}
        applyLang(stored || DEFAULT_LANG);

        // Delegated click on document — fires regardless of jQuery ready timing
        document.addEventListener('click', function (e) {
            var btn = e.target.closest ? e.target.closest('.awanar-lang-btn') : null;
            if (btn) { applyLang(btn.getAttribute('data-lang-btn')); }
        });
    }

    initLang();

});
