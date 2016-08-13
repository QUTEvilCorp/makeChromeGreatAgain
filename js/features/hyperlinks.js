//Break random hyperlinks
function hyperlinks() {
    var defaultFreq = 0.1;
    $("a").each(function(){
        if (Math.random() <= defaultFreq){
            $(this).attr('href', '#-1');
        }
    });
}

