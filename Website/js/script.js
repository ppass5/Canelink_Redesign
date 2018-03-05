
$('.filter-toggle').on('click', function(){
    $('#sidebar').toggle('slide', { direction: 'left' }, 1000);
    $('#content').animate({
        'margin-left' : $('#main-content').css('margin-left') == '0px' ? '210px' : '0px'
    }, 1000);
});
