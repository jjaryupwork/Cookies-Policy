$('.close').click(function() {
    $('.cookiesheader').hide();
});

$('#start').click(function() {
    $('.giraffe').animate({
        marginLeft: "+=800px",
    }, 6000);
    $('.giraffe').animate({
        marginLeft: "-=800px",
    }, 6000);
    $('.rocket').animate({
        top: "-=950px",
    }, 16000);
});