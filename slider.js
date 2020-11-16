$(document).ready(function () {

    let gornjaLista = $('.slider-list-g');
    let donjaLista = $('.slider-list-d');

    let items = gornjaLista.find('li'),
        last = items.filter(':last');

    let donjaListaStvari = donjaLista.find('li'),
        zadnji = donjaListaStvari.filter(':last');

    last.after(items.clone(true));
    zadnji.after(donjaListaStvari.clone(true));

    $(items[0]).addClass("aktivan");
    $(donjaListaStvari[0]).addClass("aktivan");

    $('#arrow-blue-right').on('click', function () {

        if (gornjaLista.is(':not(:animated)')) {

            gornjaLista = $('.slider-list-g');
            items = gornjaLista.find('li');
            last = items.filter(':last');

            let trenutnaSlikaG = $(".slider-list-g .aktivan");

            trenutnaSlikaG.removeClass();

            let sljedeci = $(items[1]);
            sljedeci.addClass("aktivan");

            last.after(trenutnaSlikaG.clone(true));

            let width = trenutnaSlikaG.width();

            gornjaLista.animate({
                right: "-=" + width
            }, 850);
            setTimeout(
                function () {
                    items.slice(0, 1).remove();
                    gornjaLista.removeAttr("style");
                }, 900);

        }
        if (donjaLista.is(':not(:animated)')) {

            donjaLista = $('.slider-list-d');
            donjaListaStvari = donjaLista.find('li');
            zadnji = donjaListaStvari.filter(':last');

            let trenutnaSlikaD = $(".slider-list-d .aktivan");

            trenutnaSlikaD.removeClass();

            zadnji.after(trenutnaSlikaD.clone(true));

            let slj = $(donjaListaStvari[1]);
            slj.addClass("aktivan");

            let sirina = trenutnaSlikaD.width();

            donjaLista.animate({
                right: "-=" + sirina
            }, 850);

            setTimeout(
                function () {
                    donjaListaStvari.slice(0, 1).remove();
                    donjaLista.removeAttr("style");
                }, 900);
        }

    });

    $('#arrow-gray-left').on('click', function () {
        if (gornjaLista.is(':not(:animated)')) {

            gornjaLista = $('.slider-list-g');
            items = gornjaLista.find('li');
            last = items.filter(':last');

            trenutnaSlikaG = $(".slider-list-g .aktivan");

            last.addClass("aktivan");
            trenutnaSlikaG.before(last.clone(true));
            trenutnaSlikaG.removeClass();


            s = last.width();

            gornjaLista.attr('style', 'right:' + (-s - 4) + "px");

            last.remove();

            gornjaLista.animate({
                right: "+=" + (s + 4)
            }, 850);

        }
        if (donjaLista.is(':not(:animated)')) {

            donjaLista = $('.slider-list-d');
            let stvari = donjaLista.find('li');
            zadnji = stvari.filter(':last');

            trenutnaSlikaD = $(".slider-list-d .aktivan");

            zadnji.addClass("aktivan");
            trenutnaSlikaD.before(zadnji.clone(true));
            trenutnaSlikaD.removeClass();

            sirina = zadnji.width();

            donjaLista.attr('style', 'right:' + (-sirina - 4) + "px");

            zadnji.remove();

            donjaLista.animate({
                right: "+=" + (sirina + 4)
            }, 850);
        }

    });
});
