$( document ).ready(function() {
    // document.ready translates to when the document is loaded...
    // usually you wrap this function around anything you want to run once your html & css is loaded
    // most of the time you only use this function once and wrap it around all your code

    // change styles using .css()
    $("h1").css("color", "coral");

    $("p").css("display", "none");
    // pretty similar to the style manipulation above
    $(".halloween").hide().css({
    	"color": "coral",
    	"font-size": "4em",
    	"text-shadow": "2px 2px 2px #555"
    });

    // add multiple styles
    $("h2").css({
    	"color": "#353535",
    	"font-size": "5em",
    	"position": "absolute",
    	"top": "40%",
    	"left": "25%"
    });

    // implement multiple functions...
    $("#goodbyeWorld").click(function(){
    	$("h2").fadeOut(1000);
    	$("p").slideDown("slow");

    	$("h1").fadeOut(500);
    	$(".halloween").show("slow");
    });




});