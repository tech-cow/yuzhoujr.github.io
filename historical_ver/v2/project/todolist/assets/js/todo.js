// jQuery

//Change text-decoration

$("ul").on("click", "li", function(){ //when li is clicked inside of ul
  $(this).toggleClass("completed")
});


//remove list
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//add todo

$("input").keypress(function(event) {
  if (event.which === 13) {
    var value = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + value +  "</li>");
  }
});

$(".fa-plus").click(function() {
  $("input").fadeToggle();
});
