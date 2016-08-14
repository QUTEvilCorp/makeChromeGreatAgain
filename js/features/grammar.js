function grammar() {
    // [original, new, frequency (optional)]
    var replaceTerms = [
        ["it's", "its"],
        ["it’s", "its"],
        ["I've", "Ive"],
        ["I’ve", "Ive"],
        ["I'm", "Im"],
        ["I’m", "Im"],
        ["you're", "your"],
        ["their", "there"],
        ["they're", "there"],
        ["they’re", "there"],
        ["you'll", "youll"],
        ["you’ll", "youll"],
        ["where", "were"],
    ]

    //Floating point number from 0 to 1 representing what % of the time this should show up.
    var defaultFreq = 0.1;

    console.log("grammar start");
    $("p, li").each(function() {
        for (var i = 0; i < replaceTerms.length; i++) {
            if (Math.random() <= defaultFreq) {
                var oldHTML = this.innerHTML;
                this.innerHTML = this.innerHTML.replace(replaceTerms[i][0], replaceTerms[i][1]); // Currently will only replace first instance in each tag, but should be good enough.
                if (oldHTML != this.innerHTML) {
                    console.log(this.innerHTML);
                }
            }
        }
    });
    console.log("grammar end");
}
