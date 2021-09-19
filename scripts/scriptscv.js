(function() {
    const burger = document.querySelector('.burgeron');
    const menu = document.querySelector('.div-menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burgeroff');
        menu.classList.toggle('div-menu-off');

    });
}());

(function() {
    const burger = document.querySelector('.one');
    const menu = document.querySelector('.two');
    const childmenu = document.getElementsByClassName('burgerclass');

    for (let elem of childmenu) {
        elem.addEventListener('click', () => {
            burger.classList.toggle('burgeroff');
            menu.classList.toggle('div-menu-off');
        })
    }

}());