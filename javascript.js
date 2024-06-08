const gridContainer = document.querySelector('.grid-container');

let elementCount = 256;
for (let i = 0; i < elementCount; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-item')
    gridContainer.appendChild(div);
    div.addEventListener('mouseover', () => {
    div.setAttribute('style', 'background-color: red')
})
};

function togglePopup() {

}

