// header Nav
var headerNav = document.getElementById('header_tabula');
window.addEventListener('scroll', function () {
    let scrollTops = document.getElementById('scrollTops');
    if (Math.floor(scrollTops.getBoundingClientRect().top) <= 0) {
        headerNav.classList.add('show')
    }else{
        headerNav.classList.remove('show')

    }
})
// optionShow
var tabulaOptionShow = document.querySelector('#tabula_optionShow');
tabulaOptionShow.addEventListener('click', function (e) {
    document.querySelector('.tabula_options').classList.toggle('show')

})
//SUBNAV
var showNavSub = document.querySelectorAll('.showNavSub')
for (let i = 0; i < showNavSub.length; i++) {
    showNavSub[i].addEventListener('click', function (e) {
        showNavSub[i].parentElement.parentElement.classList.toggle('show');
    });
}
var faUp = document.querySelectorAll('.fa-angle-up')
for (let i = 0; i < faUp.length; i++) {
    faUp[i].addEventListener('click', function (e) {
        faUp[i].parentElement.parentElement.classList.toggle('show');
    });
}
//navIcon
var navbarToggler = document.querySelector('.navbar-toggler')
navbarToggler.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('show');
});
//Home Hover
let tabulaSubHome = document.querySelector('.tabula_sub-home .tabula_sub')
window.addEventListener('resize', function (e) {
    let valueResize = 1280 - document.querySelector('body').clientWidth;
    var leftHome = tabulaSubHome.style.left
    tabulaSubHome.style.left = `${-375 + valueResize}px`
});
let valueResize = 1280 - document.querySelector('body').clientWidth;
var leftHome = tabulaSubHome.style.left
// selectEmail
let selectEmail = document.querySelectorAll('.tabula_select li');
for (let i = 0; i < selectEmail.length; i++) {
    selectEmail[i].addEventListener('click', function (e) {
        document.querySelector('#tabula_optionShow').innerHTML = selectEmail[i].innerHTML;
        document.querySelector('.tabula_options').classList.remove('show');
    })
}