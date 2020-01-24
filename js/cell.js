class Cell {
    /**
     *
     * @param {*} x Row position in X cordeinate
     * @param {*} y Column position in Y Cordenate
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.visited = false;
        this.walls = [true, true, true, true];
    }

    /**
     *
     * @param {*} width the width of each square
     */
    draw(width) {
        let x = this.x * width;
        let y = this.y * width;

        stroke(255);

        // top Wall
        if (this.walls[0]) line(x, y, x + w, y);

        // Right Wall
        if (this.walls[1]) line(x + w, y + w, x + w, y);

        // Bottom Wall
        if (this.walls[2]) line(x + w, y + w, x, y + w);

        // Left Wall
        if (this.walls[3]) line(x, y, x, y + w);

        if (this.visited) {
            noStroke();
            fill("#8BC34A");
            rect(x, y, w, w);
        }
    }

    /**
     *
     * @param {*} x
     * @param {*} y
     */
    position(x, y) {
        if (x < 0 || y < 0 || x > base.rows - 1 || y > base.cols - 1) {
            return -1;
        }

        return y + x * base.cols;
    }

    /**
     * Get a random neighbour that is availabe neighbor
     * for the current cell
     */
    getRandomNeighbour() {
        let neighbours = [];

        let top = grid[this.position(this.x, this.y - 1)];
        let bottom = grid[this.position(this.x, this.y + 1)];
        let left = grid[this.position(this.x - 1, this.y)];
        let right = grid[this.position(this.x + 1, this.y)];

        if (top && !top.visited) neighbours.push(top);
        if (right && !right.visited) neighbours.push(right);
        if (bottom && !bottom.visited) neighbours.push(bottom);
        if (left && !left.visited) neighbours.push(left);

        if (neighbours.length === 0) return undefined;

        return neighbours[floor(random(0, neighbours.length))];
    }

    highLight() {
        let x = this.x * width;
        let y = this.y * width;

        noStroke();
        fill("#090");
        rect(x, y, w, w);
    }
}
