// jQuery

//Change text-decoration
$("li").click(function(){
  $(this).toggleClass("completed")
});


//remove list
$("span").click(function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//add todo
// $("input[type='text']").keypress(function(event){
// 	if(event.which === 13){
// 		//grabbing new todo text from input
// 		var todoText = $(this).val();
// 		$(this).val("");
// 		//create a new li and add to ul
// 		$("ul").append("<li><span>X</span> " + todoText + "</li>")
// 	}
// });
