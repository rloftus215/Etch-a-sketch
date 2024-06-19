const gridContainer = document.querySelector('.grid-container');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');
const applyButton = document.querySelector('.apply-button');
const body = document.querySelector('body');
const gridAdd = document.querySelector('.add-to-grid');
const gridSub = document.querySelector('.sub-to-grid');
const gridText = document.querySelector('.grid-text')


let gridSize = 50;


let elementCount = 256;
for (let i = 0; i < elementCount; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-item');
    gridContainer.appendChild(div);
    div.addEventListener('mouseover', () => {
    div.setAttribute('style', 'background-color: red');
})
};

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


openModalBtn.addEventListener('click', openModal);


function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})


function addToGrid() {
    if (gridSize < 1000) {
        gridSize += 50;
        gridText.innerText = `${gridSize}`;
    }
};


function subToGrid() {
    if (gridSize > 50) {
        gridSize -= 50;
        gridText.innerText = `${gridSize}`;
    }
}

gridAdd.addEventListener('click', addToGrid);
gridSub.addEventListener('click', subToGrid);


applyButton.addEventListener('mousedown', () => {
    document.querySelector("#grid-container").remove();
});

applyButton.addEventListener('mouseup', () => {
    elementCount = gridSize;
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid-container');
    gridContainer.setAttribute('id', 'grid-container');
    body.appendChild(gridContainer);
    for (let i = 0; i < elementCount; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-item');
        gridContainer.appendChild(div);
        div.addEventListener('mouseover', () => {
        div.setAttribute('style', 'background-color: red');
    });
}});
