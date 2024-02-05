var check = false;

setInterval(function(){    
    if(check == true){
        $(".world").css("background-position","-=10"); 
    };   
},30);

$(".start").click(function(){
    if(check == true){
        check = false;
    }else{
        check = true;
    }
});

$(window).keydown(function(event){
   if(event.keyCode ==65){
    $(".start").click();     
   } 
})

