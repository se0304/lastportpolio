$(function(){
    $(".img").hide();
    $(".link li>a:first").mouseover(function(){
        $(".img").fadeIn();
    });
    $(".link li>a:first").mouseout(function(){
        $(".img").fadeOut();
    })
});

$(function(){
    $(".img2").hide();
    $(".second").mouseover(function(){
        $(".img2").fadeIn();
    });
    $(".second").mouseout(function(){
        $(".img2").fadeOut();
    })
});

$(function(){
    $(".img3").hide();
    $(".last").mouseover(function(){
        $(".img3").fadeIn();
    });
    $(".last").mouseout(function(){
        $(".img3").fadeOut();
    })
});

