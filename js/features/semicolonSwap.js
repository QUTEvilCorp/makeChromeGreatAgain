String.prototype.replaceAll = function(search, replacement) {
    return this.split(search).join(replacement);
};

function semicolonSwap() {
    $('pre').each(function(i, el) {
        $(this).html($(this).html().replaceAll(';', ';'));
    });
}

