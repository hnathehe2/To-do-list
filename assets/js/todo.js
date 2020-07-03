// check off by clicking
$("ul").on("click","li",function(){
    // if ($(this).css("color") === "rgb(0, 0, 0)"){
    //     $(this).css("color","red");
    //     $(this).css("text-decoration", "line-through");
    // }
    // else {
    //     $(this).css("color","black");
    //     $(this).css("text-decoration", "none");
    // }

    $(this).toggleClass("completed");
}); 

$("ul").on("click","[id=deleteX]",function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which==13){
        var new_text = $(this).val();
        $(this).val("");
        $("ul").append("<li><span id=\"deleteX\">X </span>" + new_text + "</li>")
    }
})