const grids = new WeakMap();
const optionsMap = new WeakMap();

const defaultOptions = {
    rows: 0,
    cols: 0,
    placeholder: null
};

export default class Grid {
    constructor(customOptions) {
        const options = Object.assign({}, defaultOptions, customOptions);
        const { rows, cols, placeholder } = options;

        const grid = Array(rows).fill(null).map(() => {
            return Array(cols).fill(placeholder);
        });

        grids.set(this, grid);
        optionsMap.set(this, options);
    }

    checkBounds(row, col) {
        const { rows, cols } = optionsMap.get(this);

        if (row < 0 || row >= rows) {
            throw new Error("grid error: row must be within bounds");
        } else if (col < 0 || col >= cols) {
            throw new Error("grid error: col must be within bounds");
        }
    }

    get(row, col) {
        this.checkBounds(row, col);

        return grids.get(this)[row][col];
    }

    set(row, col, val) {
        this.checkBounds(row, col);

        grids.get(this)[row][col] = val;
    }

    clear(rowRange, colRange) {
        const grid = grids.get(this);
        const { placeholder } = optionsMap.get(this);

        const rowStart = rowRange[0];
        const rowEnd = rowRange[1];
        const colStart = colRange[0];
        const colEnd = colRange[1];

        this.checkBounds(rowStart, colStart);
        this.checkBounds(rowEnd - 1, colEnd - 1);

        for (let i = rowStart; i < rowEnd; i++) {
            for (let j = colStart; j < colEnd; j++) {
                grid[i][j] = placeholder;
            }
        }
    }

    clearAll() {
        const { rows, cols } = optionsMap.get(this);

        this.clear([0, rows], [0, cols]);
    }
}