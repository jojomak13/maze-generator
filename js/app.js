let base = {
        cols: 0,
        rows: 0
    },
    grid = [],
    stack = [],
    current;

const w = 20;

function setup() {
    createCanvas(320, 320);

    frameRate(50);

    base.cols = floor(width / w);
    base.rows = floor(height / w);

    initCells();

    current = grid[0];
}

function draw() {
    background(50);

    for (let i = 0, len = grid.length; i < len; i++) {
        grid[i].draw(w);
    }

    current.visited = true;
    current.highLight();

    // Step1: Check if the current cell has neighbours
    let nextCell = current.getRandomNeighbour();
    if (nextCell) {
        nextCell.visited = true;

        // Step 2: push the current cell into the stack
        stack.push(current);

        // Step 3: Remove Walls between the current and next cell
        removeWall(current, nextCell);

        // Step 4: Set the next cell as current cell
        current = nextCell;

        // Step 5: if the stack not empty
    } else if (stack.length != 0) {
        current = stack.pop();
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

/**
 *
 * @param {Cell} current
 * @param {Cell} next
 */
function removeWall(current, next) {
    let x = current.x - next.x;
    let y = current.y - next.y;

    // move right
    if (x === -1) {
        current.walls[1] = false;
        next.walls[3] = false;

        // Move Left
    } else if (x === 1) {
        current.walls[3] = false;
        next.walls[1] = false;
    }

    // Move Top
    if (y === 1) {
        current.walls[0] = false;
        next.walls[2] = false;

        // Move Bottom
    } else if (y === -1) {
        current.walls[2] = false;
        next.walls[0] = false;
    }
}
