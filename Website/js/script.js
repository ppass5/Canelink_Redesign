
//JS TO SHOW/HIDE SIDEBAR
$('.filter-toggle').on('click', function(){
    if( $('#side').is(':visible') ) {
        $('#side').animate({ 'width': '0px' }, 'slow', function(){
            $('#sidebar').hide();
        });
        $('#content').animate({ 'margin-left': '0px' }, 'slow');
    }
    else {
        $('#sidebar').show();
        $('#sidebar').animate({ 'width': '210px' }, 'slow');
        $('#content').animate({ 'margin-left': '210px' }, 'slow');
    }
});

//JS TO SHOW/HIDE FORMS, AS OF RIGHT NOW IT CALLS BACK TO A 'BUTTON' AND NOT THE ICON
$(document).ready(function(){
    $("#form1Button").click(function(){
        $("#form1").toggle();
    });
});
$(document).ready(function(){
    $("#form2Button").click(function(){
        $("#form2").toggle();
    });
});
$(document).ready(function(){
    $("#form3Button").click(function(){
        $("#form3").toggle();
    });
});
$(document).ready(function(){
    $("#form4Button").click(function(){
        $("#form4").toggle();
    });
});
