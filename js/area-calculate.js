function buttonTriangle() {
    const base = getInputValue('base-input');
    const height = getInputValue('height-input');

    const area = 0.5 * base * height;
    getAreaOutput('area-output', area.toFixed(2));
}

function buttonRectangle() {
    const width = getInputValue('width-input');
    const length = getInputValue('length-input');

    const area = width * length;
    getAreaOutput('area-output', area.toFixed(2));
}

function buttonParallelogram() {
    const b = getInputValue('b-input');
    const h = getInputValue('h-input');

    const area = b * h;
    getAreaOutput('area-output', area.toFixed(2));
}

function buttonRhombus() {
    const diagonalOne = getInputValue('diagonal-one');
    const diagonalTwo = getInputValue('diagonal-two');

    const area = 0.5 * diagonalOne * diagonalTwo;
    getAreaOutput('area-output', area.toFixed(2));
}

function buttonPentagon() {
    const perimeter = getInputValue('perimeter-input');
    const apothem = getInputValue('apothem-input');

    const area = 0.5 * perimeter * apothem;
    getAreaOutput('area-output', area.toFixed(2));
}

function buttonEllipse() {
    const majorAxis = getInputValue('major-axis-input');
    const minorAxis = getInputValue('minor-axis-input');

    const area = 3.1416 * majorAxis * minorAxis;
    getAreaOutput('area-output', area);
}

const getInputValue = (inputName) => {
    const bInput = document.getElementById(inputName);
    const bInputText = bInput.value;
    const bInputValue = parseFloat(bInputText);
    bInput.value = '';
    return bInputValue;
}

const getAreaOutput = (areaOutput, area) => {
    const aInput = document.getElementById(areaOutput);
    aInput.innerText = area;
}