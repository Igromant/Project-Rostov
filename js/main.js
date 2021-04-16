document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal')
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
  