//
console.log('aaa');
$(document).ready(function(){
    $("#txtNote").val(localStorage["note"] || "");
});
$("#txtNote").change(function(){
    localStorage["note"] = $(this).val();
});