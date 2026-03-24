class Shape {
    area() {}
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }
    area() {
        return this.width * this.height;
    }
}

const shapes = [new Circle(2), new Rectangle(2, 3), new Circle(7)];
shapes.forEach(item => console.log(item.area()));