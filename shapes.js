const W = 10;

const I = [
    [1, W + 1, W * 2 + 1, W * 3 + 1],
    [W, W + 1, W + 2, W + 3],
    [1, W + 1, W * 2 + 1, W * 3 + 1],
    [W, W + 1, W + 2, W + 3]
];

const L = [
    [1, 2, W + 1, W * 2 + 1],
    [W, W + 1, W + 2, W * 2 + 2],
    [1, W + 1, W * 2, W * 2 + 1],
    [W, W * 2, W * 2 + 1, W * 2 + 2]
];

const O = [
    [0, 1, W, W + 1],
    [0, 1, W, W + 1],
    [0, 1, W, W + 1],
    [0, 1, W, W + 1]
];

const T = [
    [1, W, W + 1, W + 2],
    [1, W + 1, W + 2, W * 2 + 1],
    [W, W + 1, W + 2, W * 2 + 1],
    [1, W, W + 1, W * 2 + 1]
];

const Z = [
    [W + 1, W + 2, W * 2, W * 2 + 1],
    [0, W, W + 1, W * 2 + 1],
    [W + 1, W + 2, W * 2, W * 2 + 1],
    [0, W, W + 1, W * 2 + 1]
];

const shapes = [I, L, O, T, Z];

export default shapes;
export {W};