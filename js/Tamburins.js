$(window).scroll(function () {
    let ws = $(this).scrollTop();
    console.log(ws)

    let hidebox = $(".hide").offset().top;
    if (ws > hidebox - 700) {
        $(".hide").css({ "transform": "translateY(0px)", "opacity": "1" });
    }
});

$(window).scroll(function () {
    let ws1 = $(this).scrollTop();
    console.log(ws1)

    let textbox = $(".text").offset().top;
    if (ws1 > textbox - 520) {
        $(".text").css({ "transform": "translateY(0px)", "opacity": "1" });
    }
});