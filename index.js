import shapes, { W } from "./shapes.js"

const squares = Array.from(document.querySelectorAll('.square'));
const scores = document.querySelector("#score");
const H = 15;
const colors = ["#172774", "#7ECA9C", "#00EAD3", "#06FF00", "#FFE400"];

let currentShape = Math.floor(shapes.length * Math.random());
let currentRotation = 0;
let currentPosition = 4;

let moveDownTimeInterval;

const currentIndex = () => shapes[currentShape][currentRotation].map(i => currentPosition + i);

const drawShape = () => {
    currentIndex().forEach(i => squares[i].style.backgroundColor = colors[currentShape]);
};

const eraseShape = () => {
    currentIndex().forEach(i => squares[i].style.backgroundColor = "white");
}

const moveDown = () => {

    if (currentIndex().some(i => squares[i + W].classList.contains("filled"))) {

        currentIndex().forEach(i => squares[i].classList.add("filled"));

        removeRows();

        currentShape = Math.floor(shapes.length * Math.random());
        currentRotation = 0;
        currentPosition = 4;

        if (currentIndex().some(i => squares[i].classList.contains("filled"))) {
            clearInterval(moveDownTimeInterval);

            for (let i = 0; i < W * H; ++i) {
                squares[i].classList.remove("filled");
                squares[i].style.backgroundColor = "white";
            }

            alert(`Score : ${parseInt(scores.innerHTML)}`);

            scores.innerHTML = "0";
            currentShape = Math.floor(shapes.length * Math.random());
            currentRotation = 0;
            currentPosition = 4;

            moveDownTimeInterval = setInterval(moveDown, 1000);
        }

        drawShape();
    }
    else {
        eraseShape();
        currentPosition += W;
        drawShape();
    }
}

const moveLeft = () => {

    if (currentIndex().some(i => i % W == 0))
        return;

    if (currentIndex().some(i => squares[i - 1].classList.contains("filled")))
        return;

    eraseShape();
    currentPosition--;
    drawShape();
};

const moveRight = () => {

    if (currentIndex().some(i => i % W == W - 1))
        return;

    if (currentIndex().some(i => squares[i + 1].classList.contains("filled")))
        return;

    eraseShape();
    currentPosition++;
    drawShape();
};

const rotate = () => {

    const newIndex = shapes[currentShape][(currentRotation + 1) % 4].map(i => currentPosition + i);

    if (newIndex.some(i => i % W == 0))
        if (newIndex.some(i => i % W == W - 1))
            return;

    if (newIndex.some(i => squares[i].classList.contains("filled")))
        return;

    eraseShape();
    currentRotation = (currentRotation + 1) % 4;
    drawShape();
};

document.onkeydown = (event) => {
    switch (event.code) {
        case "ArrowDown": moveDown(); break;
        case "ArrowRight": moveRight(); break;
        case "ArrowLeft": moveLeft(); break;
        case "Space": rotate(); break;
    }
}



const removeRows = () => {

    for (let i = 0; i < H; ++i) {

        let check = true;

        for (let j = 0; j < W; ++j)
            if (squares[i * W + j].classList.contains("filled") == false)
                check = false;

        if (check) {
            scores.textContent = parseInt(scores.textContent) + 10;

            for (let k = i * W - 1; k >= 0; --k) {

                squares[k + W].classList.remove("filled");
                squares[k + W].style.backgroundColor = "white";

                if (squares[k].classList.contains("filled"))
                    squares[k + W].classList.add("filled");

                squares[k + W].style.backgroundColor = squares[k].style.backgroundColor;
            }

            for (let k = 0; k < W; ++k) {
                squares[k].classList.remove("filled");
                squares[k].style.backgroundColor = "white";
            }
        }
    }
}

moveDownTimeInterval = setInterval(moveDown, 1000);