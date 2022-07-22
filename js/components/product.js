const button = document.querySelector('.product__btn');
const modal = document.querySelector('.product-modal');

button.addEventListener('click', openModal);

function openModal() {
    modal.classList.toggle('product-modal--active');
    overlay.classList.toggle('overlay--active');

    console.log(modal.style)
    
    let count = 0;
    const timerId = setInterval(() => {
        if(count === 50) {
            clearTimeout(timerId)
        } else {
            count += 1;
            modal.style.top = `${count}%`;
        }
    }, 1);
}