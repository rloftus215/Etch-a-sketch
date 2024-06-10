const gridContainer = document.querySelector('.grid-container');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');
const addY = document.querySelector('.y-axis-add');
const subY = document.querySelector('.y-axis-sub');
const addX = document.querySelector('.x-axis-add');
const subX = document.querySelector('.x-axis-sub');
const xAxisText = document.querySelector('.x-axis-text');
const yAxisText = document.querySelector('.y-axis-text');
let yAxisSize = 0;
let xAxisSize = 0;


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


function addToX() {
    if (xAxisSize < 100) {
        xAxisSize += 10;
        xAxisText.innerText = `${xAxisSize}`;
    }
};


function subToX() {
    if (xAxisSize > 0) {
        xAxisSize -= 10;
        xAxisText.innerText = `${xAxisSize}`;
    }
}


function addToY() {
    if (yAxisSize < 100) {
        yAxisSize += 10;
        yAxisText.innerText = `${yAxisSize}`;
    }
}


function subToY() {
    if (yAxisSize > 0) {
        yAxisSize -= 10;
        yAxisText.innerText = `${yAxisSize}`;
    }
}


addX.addEventListener('click', addToX);
subX.addEventListener('click', subToX);
addY.addEventListener('click', addToY);
subY.addEventListener('click', subToY);
