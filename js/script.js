window.addEventListener('DOMContentLoaded', function() {

    const mixer = mixitup('.gallery__content');
    Fancybox.bind();
    let parent = document.querySelector('.header__menu');
    let menuItem = parent.querySelectorAll('.header__menu-link');
    parent.addEventListener('click', (event) => {
        // Отлавливаем элемент у родителя, на который мы нажали
        let target = event.target;
        // Проверяем тот ли это элемент, который нам нужен
        if(target.classList.contains('header__menu-link')) {
            for(let i = 0; i < menuItem.length; i++) {
            headerTop.classList.remove('header__top--active');
            headerBtn.classList.remove('header__menu-btn--active');
            }
        }
    });

    const hamb = document.querySelector('.hamburger');
    // let headerBtn = document.querySelector('.header__menu-btn');
    let headerTop = document.querySelector('.header__top');

    hamb.addEventListener('click', function() {
        hamb.classList.toggle('hamburger--active');
        headerTop.classList.toggle('header__top--active');

    })

})
$(function(){
    
    $(".header__menu a").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    $("#pageup").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500
    });

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1100) {
        $('#page-up').fadeIn();
    } else {
        $('#page-up').fadeOut();
    }
})
