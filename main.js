var s = $('#slider');
var w = $(window);

$(document).ready(function() {
    fixRocketLandingSite();
    s.addClass('land');
});

$('#close').click(function() {
    s.addClass('fly');
});

w.on('resize', fixRocketLandingSite);
function fixRocketLandingSite() {
    var ww = w.outerWidth();
    var wh = w.outerHeight();
    var m = 70;
    if ((ww/1600) > (wh/900)) {
        m *= (ww/1600);
    } else {
        m *= (wh/900);
    }
    s.css('margin-bottom', -parseInt(m) + 'px');
}


