document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__list");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        if (!burger.classList.contains('active')) {
            burger.style.background = 'white'; // Исходный цвет
        } 
        else {
            burger.style.background = '#0cc'; // Фон при открытом меню
        }
    });
});