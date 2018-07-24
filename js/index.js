$('.carousel').carousel()


$('#see-more').on('click', function(){
    $('.thumbnail').removeClass('invisible');
    $('#hide-btn').removeClass('invisible');
    $('#see-more').addClass('invisible');
});

$('#hide-btn').on('click', function(){
    $('.hide-thumbnail').addClass('invisible');
    $('#hide-btn').addClass('invisible');
    $('#see-more').removeClass('invisible');
})