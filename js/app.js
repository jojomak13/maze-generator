let base = {
        cols: 0,
        rows: 0
    },
    grid = [];

const w = 50;

function setup() {
    createCanvas(450, 450);

    base.cols = floor(width / w);
    base.rows = floor(height / w);

    initCells();
}

function draw() {
    background(52);

    for (let i = 0, len = grid.length; i < len; i++) {
        grid[i].draw(w);
    }
}

/**
 *
 * Create all cell
 * then push it to the grid
 */
function initCells() {
    for (let row = 0; row < base.rows; row++) {
        for (let col = 0; col < base.cols; col++) {
            grid.push(new Cell(row, col));
        }
    }
}
