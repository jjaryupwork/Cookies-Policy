$(document).ready(function() {
    $('#slider').animate({
        bottom: '41%'
    }, 2500);
});
$('.close').click(function() {
    $('#slider').animate({
        bottom: "110%"
    }, 3000);
}); 