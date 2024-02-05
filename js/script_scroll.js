$(window).scroll(function(){
    var nowScroll = $(window).scrollTop();
    $(".scroll").text(nowScroll);
    $(".world").css("background-position", -1 * nowScroll);
    
    if(nowScroll>500){
        $(".title").addClass("show",400,"easeInBack");
    }else{
        $(".title").removeClass("show",400,"easeOutBack");
    }
});