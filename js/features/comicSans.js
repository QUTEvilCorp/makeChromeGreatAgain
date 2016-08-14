//Sometimes makes page use comic sans
function comicSans() {
    console.log("Running comicSans function.");
    var defaultFreq = 0.05;
    $("p").each(function(){
        if (Math.random() <= defaultFreq)
            $(this).attr('style', $(this).attr('style') + '; ' + 'font-family: "Comic Sans MS" !important');
    });
}
