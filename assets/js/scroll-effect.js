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


/*
    land in 
*/
$(window).scroll(function () {
    $('.land-effect').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        var scrollBottom = $(window).scrollTop() + $(window).height();
        if (imagePos < scrollBottom - imageHeight) {


            /*
                land in 
            */
            $(this).addClass("landIn");
            let landInTexts = document.querySelectorAll(".landIn");
            landInTexts.forEach(landInText => {
                let landin_letters = landInText.textContent.split("");
                landInText.textContent = "";
                landin_letters.forEach((letter, i) => {
                    let landin_span = document.createElement("span");
                    landin_span.textContent = letter;
                    landin_span.style.animationDelay = `${i * 0.05}s`;
                    landInText.append(landin_span);
                });
            });



        } else {
            $(this).removeClass("landIn");
        }
    });
});