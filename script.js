const changeColorOnHover = e => {
    const currentColor = e.target.style.backgroundColor;

    // Extract RGB values
    const rgbValues = currentColor.match(/\d+/g);
    if (rgbValues && rgbValues.length === 3) {
        // Decrease each RGB component by 20
        const modifiedColor = `rgb(${Math.max(0, rgbValues[0] - 20)}, ${Math.max(0, rgbValues[1] - 20)}, ${Math.max(0, rgbValues[2] - 20)})`;

        e.target.style.backgroundColor = modifiedColor;    
    }
}


const createGrid = (numOfSquares=16) => {
    const grid = [];
    for (let row=0; row<numOfSquares; row++) {
        for (let col=0; col<numOfSquares; col++) {
            const square = document.createElement("div");

            square.style.width = 100 / numOfSquares + "%";
            square.style.height = 100 / numOfSquares + "%";
            square.style.backgroundColor = "rgb(200,200,200)";

            square.onmouseover = changeColorOnHover;

            grid.push(square);
        }
    }

    return grid
}


document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById("root");
    const newSketchBtn = document.getElementById("sketch-btn");

    // Append squares to the grid
    createGrid().forEach(square => gridContainer.appendChild(square));

    newSketchBtn.onclick = () => {
        const sketchSize = prompt("Select the size you want for the new sketch");
        if (sketchSize > 100) {
            return alert("Sketch size must be 100 or lower");
        }
        gridContainer.innerHTML = null;
        createGrid(sketchSize).forEach(square => gridContainer.appendChild(square));
    }
})

