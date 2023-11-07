$(window).scroll(function () {
    let ws = $(this).scrollTop();
   

    let hidebox = $(".hide").offset().top;
    if (ws > hidebox - 700) {
        $(".hide").css({ "transform": "translateY(0px)", "opacity": "1" });
    }

    let textbox = $(".text").offset().top;
    if (ws > textbox - 520) {
        $(".text").css({ "transform": "translateY(0px)", "opacity": "1" });
    }

    // 상단 텍스트 
    

    let work = $(".work").offset().top;
    if (ws > work - 400) {
        $(".work").css({ "transform": "translateY(0px)", "opacity": "1" });
    }

    // 상단 탬버린즈 비디오


    let workimg = $(".workimg").offset().top;
    if (ws > workimg - 700) {
        $(".workimg").css({ "transform": "translateY(100px)", "opacity": "1" });
    }

    // 페이지 이미지 모음

    let worktext = $(".worktext").offset().top;
    if (ws > worktext - 800) {
        $(".worktext").css({ "transform": "translateY(0px)", "opacity": "1" });
    }

    let worktext2 = $(".worktext2").offset().top;
    if (ws > worktext2 - 900) {
        $(".worktext2").css({ "transform": "translateY(0px)", "opacity": "1" });
    }

    // 슬라이드 소개 영상과 설명 텍스트


    let textbox3 = $(".text2").offset().top;
    if (ws > textbox3 - 820) {
        $(".text2").css({ "transform": "translateY(-20px)", "opacity": "1" });
    }

    let worktext3 = $(".text3").offset().top;
    if (ws> worktext3 - 920) {
        $(".text3").css({ "transform": "translateY(0px)", "opacity": "1" });
    }

    // 메인페이지 서브 페이지 장바구니 영상과 설명 텍스트

    if(ws>worktext3-300){
        console.log('d')
        $(".icon").addClass("animate__zoomIn")
        $(".icon").show();
    }else {
        $(".icon").removeClass("animate__zoomIn")
        $(".icon").fadeOut();
    }


});
