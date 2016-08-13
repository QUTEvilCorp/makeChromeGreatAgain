function ruinGoogle() {
    if (window.location.href.match(/.*www\.google\.com.*\q.*/)){
        console.log("ruin google start");
        $("div.g").each(function(i) {
            this.parentNode.removeChild(this);
        });
    }
    console.log("ruin google end");
}

