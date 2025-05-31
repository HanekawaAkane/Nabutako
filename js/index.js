$(function(){
    $(".gallery").mouseover(function(){
        $(this).stop().animate({
            "width":"70%",
            "opacity":"1"
        },300).siblings().stop().animate({
            "width":"15%",
            "opacity":".5"
        },300)
    })
	
})