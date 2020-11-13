$(document).ready(function () {

    let gornjaLista = $('.slider-list-g');
    let donjaLista = $('.slider-list-d');

    let n = 0;
    let k = 5;
    let items = gornjaLista.find('li'),
        last = items.filter(':last');

    last.after(items.clone(true));

    $('#arrow-blue-right').on('click', function () {

        if (gornjaLista.is(':not(:animated)')) {

            slj = $(items[0].nextElementSibling);
            console.log(slj);
            //slj.addClass("aktivan");
            gornjaLista = $('.slider-list-g');
            items = gornjaLista.find('li');
            last = items.filter(':last');

            let trenutnaSlikaG = $("#" + n);
            n = (n + 1) % 5;
            console.log(n);

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
            let donjaListaStvari = donjaLista.find('li');
            let zadnji = donjaListaStvari.filter(':last');

            function pomicanjedesnoD() {
                let trenutnaSlikaD = $("#" + k);
                zadnji.after(trenutnaSlikaD.clone(true));
                k += 1;

                let width = trenutnaSlikaD.width();

                donjaLista.animate({
                    right: "-=" + width
                }, 850);
                setTimeout(
                    function () {
                        donjaListaStvari.slice(0, 1).remove();
                        donjaLista.removeAttr("style");
                    }, 900);

            }
            if (k < 9) {
                pomicanjedesnoD();
            }
            else {
                k = 5;
                pomicanjedesnoD();
            }

        }

    });

    $('#arrow-gray-left').on('click', function () {
        if (gornjaLista.is(':not(:animated)')) {
            let gornjaLista = $('.slider-list-g'),
                items = gornjaLista.find('li'),
                first = items.filter(':last');
            console.log(items, first);

            function pomicanjedesnoG() {
                let trenutnaSlikaG = $("#" + n);
                first.before(trenutnaSlikaG.clone(true));
                //n -= 1;
                n = (n - 1) % 5;

                let width = trenutnaSlikaG.width();
                gornjaLista.animate({
                    right: "+=" + width
                }, 850);
            }
            pomicanjedesnoG();
            /*
            if (n > 0) {
                pomicanjedesnoG();
            }
            else {
                n = 4;
                pomicanjedesnoG();
            }*/

        }
        if (donjaLista.is(':not(:animated)')) {
            let donjaLista = $('.slider-list-d'),
                items = donjaLista.find('li'),
                first = items.filter(':last');

            console.log(items, first);

            function pomicanjelijevoD() {
                let trenutnaSlikaD = $("#" + k);
                first.before(trenutnaSlikaD.clone(true));
                k -= 1;

                let width = trenutnaSlikaD.width();
                console.log(width);
                donjaLista.animate({
                    right: "+=" + width
                }, 850);

            }
            if (k > 4) {
                pomicanjelijevoD();
            }
            else {
                k = 9;
                pomicanjelijevoD();
            }

        }

    });
});
