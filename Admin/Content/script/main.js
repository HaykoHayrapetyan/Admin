$(function () {
    'use strict';
    var title = $('title');
    setInterval(function () {
        var titleText = title.textCont();
        title.html(titleText.substring(1) + titleText.substring(0, 1));
        }, 200);
});