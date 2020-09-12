$(window).scroll(function () {
    $('.timeline-body').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        var scrollBottom = $(window).scrollTop() + $(window).height();
        if (imagePos < scrollBottom - imageHeight) {
            $('.dot1').addClass("timeline-event-years-4-5");
            $('.dot2').addClass("timeline-event-years-1");
            $('.dot3').addClass("timeline-event-years-4");
        } else {
            $('.dot1').removeClass("timeline-event-years-4-5");
            $('.dot2').removeClass("timeline-event-years-1");
            $('.dot3').removeClass("timeline-event-years-4");
        }
    });
});