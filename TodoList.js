
// this is the 1st approach
// $("li").click(function(){
//     // console.log($(this).css("color"))

//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         console.log("correct")
//         $(this).css({
//             color:"red",
//             textDecoration:"none"
//         })
//     }else{
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         })
//     }
// })


// this is the 2nd approach using classToggle
$("ul").on("click", "li",function () { 
    // e.preventDefault();
    $(this).toggleClass("completed");  
    // console.log("correct")  
});

// click on X to delete To-Do List
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(600,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text'").keypress(function (event) { 
    if(event.which === 13){
        // grabbing new todo text from input
        let todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }
});
$(".fa-plus").click(function () { 
    // e.preventDefault();
    $("input[type='text'").fadeToggle();
    
});