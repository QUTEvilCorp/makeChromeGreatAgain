function buildAWall() {
    if (document.body.innerHTML.match(/([tT]rump|[mM]exic(o|an))/)){
        document.body.innerHTML += '<canvas id="canvas" class="wall" width="5000" height="150" style="z-index: 2500">';

        function drawBrick(context, brickNum, y){
            //Whole function can be cleaned up a bit
           var width = 40;
           var height = 20;
           var xPos = brickNum * width - (y % 2 ? width / 2 : 0);
           var yPos = y * height;
           var colours = ["red", "orange", "#ff6633", "#b32d00", "#cc3300", "#e63900", "#e60000", "#e67300"];
           var col = colours[Math.floor(Math.random()*colours.length)];
           context.fillStyle = col;
           context.fillRect(xPos, yPos, width, height);
           context.lineWidth = 2;
           context.strokeStyle = "black";
           context.strokeRect(xPos, yPos, width, height);
        }

        my_canvas = document.getElementById("canvas");
        context = my_canvas.getContext("2d");

        context.beginPath();
        //Could be improved.
        for (var y = 0; y < 100; y++){
            for (var x = 0; x < 1000; x++){
                drawBrick(context, x, y);
            }
        }
    }
}

