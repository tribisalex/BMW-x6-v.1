const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
modalElem.classList.remove('hidden');
};

const closeModal = () => {
modalElem.classList.add('hidden')
};

moreElems.forEach((moreElem, index) => {
    moreElem.addEventListener('click',openModal)
});

modalElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay')||
    target.classList.contains('modal__close')) {
        closeModal()
    }

    if (target.classList.contains('modal__title')) {
        target.style.color = 'red';
    }
})