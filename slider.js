$(document).ready(function () {

    let gornjaLista = $('.slider-list-g');
    let donjaLista = $('.slider-list-d');

    let n = 0;
    let k = 5;

    $('#arrow-blue-right').on('click', function () {

        if (gornjaLista.is(':not(:animated)')) {
            let gornjaLista = $('.slider-list-g'),
                items = gornjaLista.find('li'),
                last = items.filter(':last');

            function pomicanjedesnoG() {
                let trenutnaSlikaG = $("#" + n);
                last.after(trenutnaSlikaG.clone(true));
                n += 1;

                let width = trenutnaSlikaG.width();
                gornjaLista.animate({
                    right: "-=" + width
                }, 850);

            }
            if (n < 5) {
                pomicanjedesnoG();
            }
            else {
                n = 0;
                pomicanjedesnoG();
            }

        }
        if (donjaLista.is(':not(:animated)')) {
            let donjaLista = $('.slider-list-d'),
                items = donjaLista.find('li'),
                last = items.filter(':last');

            function pomicanjedesnoD() {
                let trenutnaSlikaD = $("#" + k);
                last.after(trenutnaSlikaD.clone(true));
                k += 1;

                let width = trenutnaSlikaD.width();
                console.log(width);
                donjaLista.animate({
                    right: "-=" + width
                }, 850);

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
                n -= 1;

                let width = trenutnaSlikaG.width();
                gornjaLista.animate({
                    right: "+=" + width
                }, 850);

            }
            if (n > 0) {
                pomicanjedesnoG();
            }
            else {
                n = 4;
                pomicanjedesnoG();
            }

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
