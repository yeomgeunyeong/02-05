$(function(){
    
    var check=false;

    setInterval(function(){

        if(check==true){
            $(".world").css({"background-position":"-=10"});
        }

    }, 30)//

    $(".start").click(function(){
        if(check==true){
            check=false;
            $(".button").removeClass("active")
            $(".button").removeClass("speed")
        }else{
            check=true;
            $(".button").addClass("active")
            $(".button").addClass("speed")
        }
    })


    $(window).keydown(function(e){
        console.log(e);
        if(e.keyCode==65){
            $(".start").click();
        }
    })
})