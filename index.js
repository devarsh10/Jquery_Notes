// ###Jquery

// ###query for style.

//getter
$("h1").css("color");
$("h1").css("font-size");
//And so on..
//setter
 $("h1").css("color","red");

// ###ClassList query.

//use
$("h1").addClass("hone margin-50");
//instead
// document.querySelector("h1").classList.add("hone");
//use
$("h1").removeClass("hone margin-50");
$("h1").toggleClass("hone margin-50");

//Manipulating text.
//use
$('h1').text()
// $('h1').text("Bye");
// $('h1').text();

//instead
document.querySelector('h1').textContent;
'Hello'

//manipulating attr
//get
console.log($("h1").attr("id"));
//set
$("h1").attr("id","newid");
//get again to check that id has been changed or not..
console.log($("h1").attr("id"));

//get and print image.
console.log($("img").attr("src"));

//eventListeners in jquery
$(document).keypress(function(event){
    //alert(event.key+" key pressed");
    $("h1").text(event.key);
    console.log(event.key);
})

//another method
$("h1").on("mouseover",function(){
    $("h1").css("color","maroon");
});
//u can use click or keypress or any property instead on mouseover...
// $("h1").on("click",function(){
//     $("h1").css("color","maroon");
// });

//ADDING & REMOVING ELEMENTS
// FUNCTION ARE: before(), after(), append(), prepend();

// $("h1").before("<button>1st button</button>");
// $("h1").after("<button>2nd button</button>");
// $("h1").append("<button>3rd button</button>");
// $("h1").prepend("<button>4th button</button>");

//to remove all
// $("button").remove();


//animation
// $("button").on("click",function(){
//     //toggle for hide() & show();
//     $("h1").toggle();
// });

$("button").on("click",function(){
    //fadeToggle for fadeOut() & fadeIn();
    $("h1").fadeToggle();
});
