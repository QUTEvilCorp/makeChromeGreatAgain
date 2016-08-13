function buildAWall() {
    document.body.innerHTML += "<div style='position:fixed;"
                            +      " bottom:77px;"
                            +      " width:100%;"
                            +      " height:77px;"
                            +      " background-color: antiquewhite;'>"
                            +      "<img src='"
                            +          chrome.extension.getURL("img/wall.jpg")
                            +          "'"
                            +          " width='100%'"
                            +          " />"
                            +  "</div>";
}

