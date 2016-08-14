//Break random hyperlinks
function hyperlinks() {
    var defaultFreq = 0.2;
    $("a").each(function(){
        if (Math.random() <= defaultFreq){
            $(this).attr('href', '#-1');
        }
    });
}

