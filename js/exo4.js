import {} from "./jquery.js"


$('#colorSwap').click(function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    $('body').css('background-color',"#"+randomColor);
});


$('form').submit(function(e){
    e.preventDefault();
    let rouge = $("#rouge").val();
    let vert = $("#vert").val();
    let bleu = $("#bleu").val();
    $('body').css("background-color","rgb("+rouge+","+vert+","+bleu+")");
});