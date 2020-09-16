$(document).ready(function(){
    
    //sticky menu
    $("js--services-section").waypoint(function)(direction){
        if(direction==down){
            $("nav").addClass("sticky");
           }else{
            $("nav").removeClass("sticky");
        }
    });
    
    
    
    //mixitup(portfolio-section)
    var mixer= mixitup('.container');
});

//Smoth-scroll for IE/EDGE/SUFURI
$('a').on('click',function(even){
    if(this.hash!== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html','body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash= hash;
        });
    }
});

