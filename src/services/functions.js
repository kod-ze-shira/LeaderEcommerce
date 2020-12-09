import $ from 'jquery';
import '../App.css';
export const headerBurgerOnClick = () => {
    var header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        menu = header.find('.js-menu'),
        items = menu.find('.js-menu-item'),
        close = menu.find('.js-menu-close'),
        back = menu.find('.js-menu-back'),
        html = $('html'),
        body = $('body');

    burger.toggleClass('active');
    menu.toggleClass('visible');
    html.toggleClass('no-scroll');
    body.toggleClass('no-scroll');

    //עובר על הקטגוריה ושולף את כל הרשימה
    items.each(function () {
        var item = $(this),
            head = item.find('.js-menu-head');

        head.on('click', function () {
            if (!item.hasClass('active')) {
                console.log("item", item.classList);
                menu.removeClass('left');
                items.removeClass('active');
                menu.addClass('left');
                item.addClass('active');
            } else {
                items.removeClass('active');
                menu.removeClass('left');
            }
        });

        back.on('click', function () {
            menu.removeClass('left');
            items.removeClass('active');
        });
        close.on('click', function () {
            items.removeClass('active');
            burger.toggleClass('active');
            menu.toggleClass('visible');
            menu.removeClass('left');
            html.removeClass('no-scroll');
            body.removeClass('no-scroll');
        });
    });
}
// search
export const searchFunc = () => {
    var search = $('.js-search'),
        btn = search.find('.js-search-btn');
    btn.on('click', function () {
        search.toggleClass('show');
    });
}