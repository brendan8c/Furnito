// Текст автопечати
$(function() {
    var typed2 = new Typed('#cout-01', {
        strings: ['Подпишитесь на нашу рассылку, чтобы быть в курсе'],
        // время до начала набора в миллисекундах  
        startDelay: 3000,
        // скорость печати
        typeSpeed: 60,
        // печатать true, стирать false
        fadeOut: true,
        // повторять?
        loop: false,
        // показать каретку?
        showCursor: false,
    });
});
// Фотографии паролабс 
$(function() {
    $('.jarallax').jarallax({
        speed: 0.2
    });
});
// #2grn scroll up
$(function() {
    $('.scroll--up').click(function() {
        $.scrollTo($('#header'), { duration: 800 });
    });
});
// #2grn coockies 
// Cookies создать для всего сайта
$(function() {
    $.Cookies.set('name', 'value')
});
// Cookies прочитать
$(function() {
    Cookies.get('name') // => 'value'
    Cookies.get('nothing') // => undefined
});
// Cookies удалить
$(function() {
    Cookies.remove('name')
});
// Бургкер меню
$(function() {
    jQuery(document).ready(function($) {
        $('#main-nav').hcOffcanvasNav({
            disableAt: 670,
            expanded: false,
            swipeGestures: true,
            keepClasses: false,
            height: 500
        });
    });
});