function ruinGoogle() {
    if (window.location.href.match(/.*www\.google\.com.*\q.*/)){
        var numToRemove = 5;
        var elements = $("div.g");
        for (var i = 0; i < numToRemove; i++)
            elements[i].parentNode.removeChild(elements[i]);
        // // Uncomment this section to remove ALL results instead.
        // $("div.g").each(function(i) {
            // this.parentNode.removeChild(this);
        // });
    }
}