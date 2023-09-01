let offset = 0;
const slider = document.querySelector('.slider-inner');

document.querySelector('.next').addEventListener('click', getNext);
document.querySelector('.prev').addEventListener('click', getPrev);

function getNext() {
    offset += 256;

    if (offset > 768) {
        offset = 0;
    }

    slider.style.left = -offset + 'px';
}

function getPrev() {
    offset -= 256;

    if (offset < 0) {
        offset = 768;
    }
    
    slider.style.left = -offset + 'px';
}