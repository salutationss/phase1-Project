require('dotenv').config()

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}


showMenu('nav-toggle', 'nav-menu')


const navLink = document.querySelectorAll('.nav__link')

function linkAction() {

    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const scrollR = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 2000,
    reset: true
});

scrollR.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .showcase__content,
            .app__data, .app__img, nav.bd-container,
            .contact__data, .contact__button, .api__,
            .footer__content`, {
    interval: 200

})

let likebtn = document.querySelector('#likebtn');
let dislikebtn = document.querySelector('#dislikebtn');
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");
let input5 = document.querySelector("#input5");
let input6 = document.querySelector("#input6");
let input7 = document.querySelector("#input7");
let input8 = document.querySelector("#input8");
let input9 = document.querySelector("#input9");
let input10 = document.querySelector("#input10");
let input11 = document.querySelector("#input11");
let input12 = document.querySelector("#input12");

let clicked = true;



document.querySelectorAll('#likebtn').forEach(function(child) {
    child.addEventListener('click', function(event) {
        if (input1 = document.querySelector("#input1")) {
            input1.value = parseInt(input1.value) + 1;
            input1.style.color = "green";
            console.log('1st post like');

        }
    });

})




document.querySelectorAll('#dislikebtn').forEach(function(child) {
    child.addEventListener('click', function(event) {
        if (clicked) {
            input2.value = parseInt(input2.value) + 1;
            input2.style.color = "red";
            console.log('1st post dislike');

        }
    })
})





const api_key = process.env.API_KEY


function getExchange(conversion_rate) {
    let api_url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`;
    fetch(api_url)
        .then(function(response) {
            return response.json();
        }).then(function(conversion_rate) {
            let conversion_rates = [] // array to store the conversion rates
            let exchange_rate = conversion_rate.conversion_rates.USD;
            let exchange_rate_in_euro = exchange_rate * 1.18;
            let exchange_rate_in_pound = exchange_rate * 0.89;
            let exchange_rate_in_yen = exchange_rate * 113.94;
            let exchange_rate_in_ruble = exchange_rate * 63.01;
            let exchange_rate_in_yuan = exchange_rate * 6.78;
            let exchange_rate_in_hkd = exchange_rate * 7.81;
            let exchange_rate_in_bitcoin = conversion_rate.conversion_rates.BTC;
            let time = conversion_rate.time_last_update_unix;
            let time_last_update = new Date(time * 1000);
            console.log(exchange_rate);
            console.log(exchange_rate_in_pound);
            console.log(time);
            console.log(exchange_rate_in_euro);
            console.log(exchange_rate_in_yuan);
            console.log(exchange_rate_in_ruble);
            console.log(exchange_rate_in_hkd)
            console.log(exchange_rate_in_yen);
            console.log(conversion_rates)

            conversion_rates.push(exchange_rate, exchange_rate_in_euro, exchange_rate_in_pound, exchange_rate_in_yen, exchange_rate_in_bitcoin);
            console.log(conversion_rate)

            document.getElementById("convert").addEventListener("click", function() {
                console.log("clicked");

                // display the conversion rates
                document.getElementById("conversion").innerHTML = `<div class="conversion-rates">
                <p>1 USD = ${exchange_rate_in_euro} EUR</p>
                <p>1 USD = ${exchange_rate_in_pound} GBP</p>
                <p>1 USD = ${exchange_rate_in_yen} JPY</p>
                <p>1 USD = ${exchange_rate_in_yuan} CNY</p>
                <p>1 USD = ${exchange_rate_in_ruble} RUB</p>
                <p>1 USD = ${exchange_rate_in_hkd} HKD</p> 
                last update time: ${time_last_update}
                <div class="conversion-rate">`;




            });

        })
}



console.log(getExchange("USD"));