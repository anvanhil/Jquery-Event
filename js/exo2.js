import{} from "./jquery.js";

$('form').submit(function(e){
    e.preventDefault();
    $("#envoi").click(function () {
       $("#response").html(
           $("#nom").val() + "<br/>" +
           $('#prenom').val() + "<br/>"+
           $('#age').val()
       );
   });
});