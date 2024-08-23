const gridContainer = document.getElementById('grid-container')

// Define grid size
let gridSize = 16;

gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

gridContainer.innerHTML = '';

for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#ff6347';
    });
}); 