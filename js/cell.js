class Cell {
    /**
     *
     * @param {*} x Row position in X cordeinate
     * @param {*} y Column position in Y Cordenate
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     *
     * @param {*} width the width of each square
     */
    draw(width) {
        let x = this.x * width;
        let y = this.y * width;

        stroke(255);

        line(x, y, x + w, y);
        line(x, y, x, y + w);

        line(x + w, y + w, x + w, y);
        line(x + w, y + w, x, y + w);
        // noFill();
        // rect(x, y, w, w);
    }
}
