class Ground {
    constructor() {
        Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true })
    }
    display() {
        rect(width / 2, 650, width, 10);
    }
}