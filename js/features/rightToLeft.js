// Make text appear normal, but it's actually in right-to-left
function rightToLeft() {
    var defaultFreq = 0.1;
    if (Math.random() <= defaultFreq) {
        $("h1, h2, h3, h4, h5, h6, p, a, span, div, li").each(function(){
            // If the only child of this is text (so it doesn't break tags underneath)
            if ($(this).contents().length == 1 && $(this).contents()[0].nodeType == 3){
                var text = $(this).text();
                var reversed = text.split("").reverse().join("");
                $(this).text(reversed);
            }
        });
    }
}

