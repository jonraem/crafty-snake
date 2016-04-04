/* The game scene where you play the game */

Crafty.scene("ingame", function() {
    Crafty.background("white");

    // The snake moves along the axis defined in the worm.attr("dir")
    var slither = function() {
        switch (worm.attr("dir")) {
            case "y+":
                worm.y = worm.y + 25;
                break;
            case "y-":
                worm.y = worm.y - 25;
                break;
            case "x+":
                worm.x = worm.x + 25;
                break;
            case "x-":
                worm.x = worm.x - 25;
        }
    }

    // The snake changes direction based on the arrow key pressed
    var changeDir = function(input) {
        if(input.key == Crafty.keys.LEFT_ARROW) {
          worm.attr("dir", "x-");
      } else if (input.key == Crafty.keys.RIGHT_ARROW) {
          worm.attr("dir", "x+");
      } else if (input.key == Crafty.keys.UP_ARROW) {
          worm.attr("dir", "y-");
      } else if (input.key == Crafty.keys.DOWN_ARROW) {
          worm.attr("dir", "y+");
        }
    }

    // Pauses the game when the spacebar is pressed
    var pause = function(input) {
        if(input.key == Crafty.keys.SPACE) {
            Crafty.pause();
        }
    }

    // The snake the player is controlling
    var worm = Crafty.e("2D, Canvas, Color, Delay")
                .attr({x: 225, y: 225, w: 25, h: 25, dir: "y+"})
                .color("red")
                .bind("KeyDown", changeDir)
                .delay(slither, 200, -1);

    // The little buttons the player must collect
    var treat = Crafty.e("2D, Canvas, Color")
                .attr({x: 0, y: 0, w: 25, h:25})
                .color("dodgerblue");

    // Creates a thick red border when the game is paused
    var pauseBorder = Crafty.e("2D, DOM")
                    .bind("KeyDown", pause)
                    .bind("Pause", function() {
                        document.getElementById("game").style.border = "1px solid red";
                        document.getElementById("game").style.outline = "3px solid red";
                    })
                    .bind("Unpause", function() {
                        document.getElementById("game").style.border = "1px solid black";
                        document.getElementById("game").style.outline = "none";
                    });
});
