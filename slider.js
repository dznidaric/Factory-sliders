$(document).ready(function () {

    let lista = $('.slider-list'),
        items = lista.find('li'),
        len = items.length,
        current = 1,  /* the item we're currently looking */

        first = items.filter(':first'),
        last = items.filter(':last');


    console.log(lista, items);
    

    /* 1. Cloning first and last item */
    //first.before(last.clone(true));
    let n = 1;

    last.after(first.clone(true));
    first.addClass("aktivan");

    /* 2. Set button handlers */
    triggers = $('#arrow-blue-right').on('click', function () {
        let cycle, delta;

        if (lista.is(':not(:animated)')) {

            
            let trenutnaslika = $(".aktivan");
            last.after(trenutnaslika.clone(true));

            sljedeci = items[n];
            var sl = (items[0].nextElementSibling.toArray);
            console.log(sl);
            
            console.log(trenutnaslika,items[n]);
            n += 1;

            let img = trenutnaslika;
            console.log(img);
            let width = img.width();
            console.log(width);

            trenutni = $(".aktivan").removeClass("aktivan");
            //(sljedeci).classList.addClass("aktivan");


            cycle = false;
            delta = (this.id === "prev") ? -1 : 1;
            console.log(delta);
            /* in the example buttons have id "prev" or "next" */

            lista.animate({ right: "+=" + (-100 * delta) }, function () {

                current += delta;

                /** 
                 * we're cycling the slider when the the value of "current" 
                 * variable (after increment/decrement) is 0 or when it exceeds
                 * the initial lista length
                 */
                cycle = (current === 0 || current > len);

                if (cycle) {
                    /* we switched from image 1 to 4-cloned or 
                       from image 4 to 1-cloned */
                    current = (current === 0) ? len : 1;
                    lista.css({ right: -100 * current });
                }
            });
        }

    });
});
