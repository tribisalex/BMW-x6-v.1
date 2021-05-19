document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');

    // for (let i = 0; i < featureLinkElems.length; i++) {
    //     featureLinkElems[i].addEventListener('click', () => {
    //         featureSubElems.forEach((featureSubElem)=> {
    //             featureSubElem.classList.add('hidden')
    //         })
    // }

    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            featureSubElems.forEach((featureSubElem, i) => {
                console.log (i, index)
                i === index
                    ? featureSubElem.classList.toggle('hidden')
                    : featureSubElem.classList.add('hidden');
            })
            featureLinkElems.forEach((featureLinkElem, i) => {
                i === index
                    ? featureLinkElem.classList.toggle('feature__link_active')
                    : featureLinkElem.classList.remove('feature__link_active');
            })
        })
    })
});
