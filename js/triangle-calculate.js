function buttonTriangle() {
    const baseInput = document.getElementById('base-input');
    const baseInputText = baseInput.value;
    const baseInputNumber = parseFloat(baseInputText);
    console.log(baseInputNumber);


    const heightInput = document.getElementById('height-input');
    const heightInputText = heightInput.value;
    const heightInputNumber = parseFloat(heightInputText);
    console.log(heightInputNumber);

    const area = baseInputNumber * heightInputNumber;

    const areaOutput = document.getElementById('area-output');
    areaOutput.innerText = area;
}