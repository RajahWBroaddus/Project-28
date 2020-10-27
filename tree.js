class Tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.image = loadImage("tree.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y, 450, 10, { isStatic: true });
        this.leftWallBody = Bodies.rectangle(0, this.y - 300, 10, 600, { isStatic: false });
        this.rightWallBody = Bodies.rectangle(this.x + 225, this.y - 300, 10, 600, { isStatic: false });

        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody);

    }
    display() {
        var posBottom = this.bottomBody.position;
        push();
        translate(posBottom.x, posBottom.y + 10);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, -300, 450, 600);
        pop();

    }
}