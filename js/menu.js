/* The menu scene from which you can start the game */

Crafty.scene("menu", function() {
    Crafty.background("url('img/crafty-snake-menu_500.png') center no-repeat");

    var menuText = Crafty.e("2D, Canvas, Text")
                    .attr({x: 105, y: 380})
                    .text("Press [SPACE] to play!")
                    .textFont({size: "22px", family: "Courier"})
                    .bind("KeyDown", function(e){
                        if (e.key == Crafty.keys.SPACE) {
                            Crafty.scene("ingame");
                        }
                    });
});
