$(function(){
    $(".imgbox").hide();
    $(".link li>a:first").mouseover(function(){
        $(".imgbox").fadeIn();
    });
    $(".link li>a:first").mouseout(function(){
        $(".imgbox").fadeOut();
    })
});
$(function(){
    $(".imgbox2").hide();
    $(".second").mouseover(function(){
        $(".imgbox2").fadeIn();
    });
    $(".second").mouseout(function(){
        $(".imgbox2").fadeOut();
    })
});

$(function(){
    $(".imgbox3").hide();
    $(".three").mouseover(function(){
        $(".imgbox3").fadeIn();
    });
    $(".three").mouseout(function(){
        $(".imgbox3").fadeOut();
    })
});

$(function(){
    $(".imgbox4").hide();
    $(".last").mouseover(function(){
        $(".imgbox4").fadeIn();
    });
    $(".last").mouseout(function(){
        $(".imgbox4").fadeOut();
    })
});


