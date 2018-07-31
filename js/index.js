//SLIDER
$('.carousel').carousel();
//BUTTON TO SHOW ALL LANGUAGES
$('#see-more').on('click', function () {
    $('.thumbnail').removeClass('invisible');
    $('#hide-btn').removeClass('invisible');
    $('#see-more').addClass('invisible');
});
//BUTTON TO HIDE ALL SHOWN BEFORE LANGUAGES
$('#hide-btn').on('click', function () {
    $('.hide-thumbnail').addClass('invisible');
    $('#hide-btn').addClass('invisible');
    $('#see-more').removeClass('invisible');
});
//API, FRAMEWORK INFORMATION
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});
//BUTTON WHICH SHOW SOCIAL NETWORKS
$('#social').on('click', function(){
    $('#vk').toggleClass('invisible');
    $('#fb').toggleClass('invisible');
    $('#in').toggleClass('invisible');
    $('#social').toggleClass('btn-mini btn-large');
    $('.fa-bookmark').toggleClass('fa-2x fa-3x');
});
