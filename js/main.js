(function () {
    "use strict";

    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
            if (
                !container.is(e.target) &&
                container.has(e.target).length === 0
            ) {
                if ($("body").hasClass("offcanvas")) {
                    $("body").removeClass("offcanvas");
                    $(".js-fh5co-nav-toggle").removeClass("active");
                }
            }
        });
    };

    var offcanvasMenu = function () {
        // Disable old offcanvas system for minimalist design
        return;
    };

    var burgerMenu = function () {
        // Disable old burger menu for minimalist design
        return;
    };

    var contentWayPoint = function () {
        var i = 0;
        $(".animate-box").waypoint(
            function (direction) {
                if (
                    direction === "down" &&
                    !$(this.element).hasClass("animated-fast")
                ) {
                    i++;

                    $(this.element).addClass("item-animate");
                    setTimeout(function () {
                        $("body .animate-box.item-animate").each(function (k) {
                            var el = $(this);
                            setTimeout(
                                function () {
                                    var effect = el.data("animate-effect");
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn animated-fast");
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft animated-fast");
                                    } else if (effect === "fadeInRight") {
                                        el.addClass(
                                            "fadeInRight animated-fast"
                                        );
                                    } else {
                                        el.addClass("fadeInUp animated-fast");
                                    }

                                    el.removeClass("item-animate");
                                },
                                k * 200,
                                "easeInOutExpo"
                            );
                        });
                    }, 100);
                }
            },
            { offset: "85%" }
        );
    };

    var dropdown = function () {
        $(".has-dropdown")
            .mouseenter(function () {
                var $this = $(this);
                $this
                    .find(".dropdown")
                    .css("display", "block")
                    .addClass("animated-fast fadeInUpMenu");
            })
            .mouseleave(function () {
                var $this = $(this);

                $this
                    .find(".dropdown")
                    .css("display", "none")
                    .removeClass("animated-fast fadeInUpMenu");
            });
    };

    var testimonialCarousel = function () {
        var owl = $(".owl-carousel-fullwidth");
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoHeight: true,
        });
    };

    var goToTop = function () {
        $(".js-gotop").on("click", function (event) {
            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $("html").offset().top,
                },
                500,
                "easeInOutExpo"
            );

            return false;
        });

        $(window).scroll(function () {
            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $(".js-top").addClass("active");
            } else {
                $(".js-top").removeClass("active");
            }
        });
    };

    // Loading page
    var loaderPage = function () {
        $(".fh5co-loader").fadeOut("slow");
    };

    var counter = function () {
        $(".js-counter").countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals);
            },
        });
    };

    var counterWayPoint = function () {
        if ($("#fh5co-counter").length > 0) {
            $("#fh5co-counter").waypoint(
                function (direction) {
                    if (
                        direction === "down" &&
                        !$(this.element).hasClass("animated")
                    ) {
                        setTimeout(counter, 400);
                        $(this.element).addClass("animated");
                    }
                },
                { offset: "90%" }
            );
        }
    };

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        mobileMenuOutsideClick();
        parallax();
        offcanvasMenu();
        burgerMenu();
        contentWayPoint();
        dropdown();
        testimonialCarousel();
        goToTop();
        loaderPage();
        counter();
        counterWayPoint();
    });

    // Minimalist hamburger menu toggle
    $(document).ready(function () {
        $("#menu-toggle").on("click", function () {
            $(".minimalist-menu").toggleClass("open");
            $(this).toggleClass("active");
        });

        // Close menu when clicking on a link
        $(".minimalist-menu a").on("click", function () {
            $(".minimalist-menu").removeClass("open");
            $("#menu-toggle").removeClass("active");
        });

        // Close menu when clicking outside
        $(document).on("click", function (e) {
            if (!$(e.target).closest(".minimalist-nav").length) {
                $(".minimalist-menu").removeClass("open");
                $("#menu-toggle").removeClass("active");
            }
        });
    });
})();
