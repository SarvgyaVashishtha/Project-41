  
class Umbrella {
    constructor(x, y, r) {
        var options = {
            isStatic: true
        }
        this.r = r;
        this.animation = loadAnimation("Walking Frame/walking_8.png","Walking Frame/walking_7.png","Walking Frame/walking_6.png","Walking Frame/walking_5.png","Walking Frame/walking_4.png","Walking Frame/walking_3.png","Walking Frame/walking_2.png","Walking Frame/walking_1.png",)
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        animation(this.animation, 0, 0, this.r, this.r);
        pop();
    }
}