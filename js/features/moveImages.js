function moveImages() {
    var defaultFreq = 0.1;
    if (Math.random() < defaultFreq) {
        $("img").each(function() {
            this.style.position = 'relative';
            this.style.left = '50px';
        });
    }
}

