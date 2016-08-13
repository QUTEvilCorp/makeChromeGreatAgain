// Change every 7th hyperlink to the colour purple.
function colorLinks(hexValue) {
    var links = document.getElementsByTagName("a");
    console.log("running colorLinks function.");
    for (var i = 0; i < links.length; i += 7) {
        if (links[i].href) {
            links[i].style.color = hexValue;
        }
    }
}

