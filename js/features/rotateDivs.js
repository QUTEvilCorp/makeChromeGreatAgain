// Apply random angle transform to every div.
function rotateDivs() {
    $('body div').each(function() {
        $(this).children('div').each(function() {
            var randomNumber = randBetween(1, 10);
            if (randomNumber === 1) { // 10% chance of rotating div
                var angle = Math.random().toFixed(2);
                $(this).css('-ms-transform', "rotate(" + angle + "deg)");
                $(this).css('-webkit-transform', "rotate(" + angle + "deg)");
                $(this).css('transform', "rotate(" + angle + "deg)");
            }
        });
    });
}

// Random number in range
function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

