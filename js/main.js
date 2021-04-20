document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(Element => {
        Element.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal);
});
  

document.addEventListener('keydown', function(event) {
    const modal = document.querySelector('.modal');
    if (event.key == 'Escape' || event.code === 27 ) {
    modal.classList.remove('modal--visible');
    }
});

