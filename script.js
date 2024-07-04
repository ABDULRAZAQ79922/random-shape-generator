
function myRandomColor() {
    const myRandomColorCode = Math.floor(Math.random() * 16777215).toString(16);
    return `#${myRandomColorCode}`;
}

function myGenerateRandomShape() {
    const myShapeContainer = document.getElementById('shapeContainer');
    myShapeContainer.innerHTML = '';

    const myShapeElement = document.createElement('div');
    const myRandomWidth = Math.floor(Math.random() * 200) + 50;
    const myRandomHeight = Math.floor(Math.random() * 200) + 50;
    const myRandomColorValue = myRandomColor();
    
    myShapeElement.style.width = `${myRandomWidth}px`;
    myShapeElement.style.height = `${myRandomHeight}px`;
    myShapeElement.style.backgroundColor = myRandomColorValue;
    
    const myShapeTypes = ['circle', 'square', 'rectangle', 'oval'];
    const myRandomShapeType = myShapeTypes[Math.floor(Math.random() * myShapeTypes.length)];
    
    if (myRandomShapeType === 'circle') {
        myShapeElement.style.borderRadius = '50%';
    } else if (myRandomShapeType === 'oval') {
        myShapeElement.style.borderRadius = '50%';
        myShapeElement.style.height = `${myRandomHeight / 2}px`;
    } 
    myShapeContainer.appendChild(myShapeElement);
}

document.getElementById('generateShapeBtn').addEventListener('click', myGenerateRandomShape);
