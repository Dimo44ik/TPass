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

const promoLink = document.getElementById("promoLink");
const textInput = document.getElementById("textInput")

promoLink.addEventListener("click", function() {
    promoLink.textContent = "Successfully!";
    textInput.value = "";
});


textInput.addEventListener("input", function() {
    if (textInput.value !== "") {
        promoLink.textContent = "Send Link";
    }
});


const selectLang = document.getElementById('header__lang');

selectLang.addEventListener('change', function () {
    const url = this.value;
    if (url) {
    window.location.href = url;
    }
})