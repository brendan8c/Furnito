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