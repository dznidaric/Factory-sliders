$(document).ready(function () {

    let upperList = $('.slider-list-g');
    let lowerList = $('.slider-list-d');

    let items = upperList.find('li'),
        lastUP = items.filter(':last');

    let lowerList_Items = lowerList.find('li'),
        lastDOWN = lowerList_Items.filter(':last');

    lastUP.after(items.clone(true));
    lastDOWN.after(lowerList_Items.clone(true));

    $(items[0]).addClass("aktivan");
    $(lowerList_Items[0]).addClass("aktivan");

    $('#arrow-blue-right').on('click', function () {

        if (upperList.is(':not(:animated)')) {

            upperList = $('.slider-list-g');
            items = upperList.find('li');
            lastUP = items.filter(':last');

            let currentUP = $(".slider-list-g .aktivan");

            currentUP.removeClass();

            let next = $(items[1]);
            next.addClass("aktivan");

            lastUP.after(currentUP.clone(true));

            let widthUP = currentUP.width();

            upperList.animate({
                right: "-=" + widthUP
            }, 850);
            setTimeout(
                function () {
                    items.slice(0, 1).remove();
                    upperList.removeAttr("style");
                }, 900);

        }
        if (lowerList.is(':not(:animated)')) {

            lowerList = $('.slider-list-d');
            lowerList_Items = lowerList.find('li');
            lastDOWN = lowerList_Items.filter(':last');

            let currentDOWN = $(".slider-list-d .aktivan");

            currentDOWN.removeClass();

            lastDOWN.after(currentDOWN.clone(true));

            let slj = $(lowerList_Items[1]);
            slj.addClass("aktivan");

            let widthDOWN = currentDOWN.width();

            lowerList.animate({
                right: "-=" + widthDOWN
            }, 850);

            setTimeout(
                function () {
                    lowerList_Items.slice(0, 1).remove();
                    lowerList.removeAttr("style");
                }, 900);
        }

    });

    $('#arrow-gray-left').on('click', function () {
        if (upperList.is(':not(:animated)')) {

            upperList = $('.slider-list-g');
            items = upperList.find('li');
            lastUP = items.filter(':last');

            currentUP = $(".slider-list-g .aktivan");

            lastUP.addClass("aktivan");
            currentUP.before(lastUP.clone(true));
            currentUP.removeClass();


            widthUP = lastUP.width();

            upperList.attr('style', 'right:' + (-widthUP - 4) + "px");

            lastUP.remove();

            upperList.animate({
                right: "+=" + (widthUP + 4)
            }, 850);

        }
        if (lowerList.is(':not(:animated)')) {

            lowerList = $('.slider-list-d');
            lowerList_Items = lowerList.find('li');
            lastDOWN = lowerList_Items.filter(':last');

            currentDOWN = $(".slider-list-d .aktivan");

            lastDOWN.addClass("aktivan");
            currentDOWN.before(lastDOWN.clone(true));
            currentDOWN.removeClass();

            widthDOWN = lastDOWN.width();

            lowerList.attr('style', 'right:' + (-widthDOWN - 4) + "px");

            lastDOWN.remove();

            lowerList.animate({
                right: "+=" + (widthDOWN + 4)
            }, 850);
        }

    });
});
