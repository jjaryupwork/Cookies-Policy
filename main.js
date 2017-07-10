$(document).ready(function() {
    $('#close').hide();
    $('.text').hide();
    $('#learnmore').hide();
    $('.cookies').animate({
        marginLeft: "+=1700px",
    }, 6000);
    $('#close').delay(6000).show(600);
    $('.text').delay(6000).show(600);
    $('#learnmore').delay(6000).show(600);
});

$('#close').click(function() {
    $('#close').hide();
    $('.text').hide();
    $('#learnmore').hide();
    $('.cookies').animate({
        marginLeft: "+=1700px",
    }, 6000);
});