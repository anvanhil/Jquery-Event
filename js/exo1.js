import {} from "./jquery.js"
let nbClick = 0;
$('#clickNumber').click(function(){
    nbClick++;
    $('#nbClick').html(nbClick);
})