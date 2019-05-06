/**
 * Created by huyueyu on 2016/10/6.
 */
$(document).ready(function () {
   //Select all table items
    var mainTable = $('.news-container')[0];
    $.each($('.dev-item'), function (i, node) {
        var time = node.childNodes[1].innerHTML;
        var news = node.childNodes[3].innerHTML;
        var sample = $('#sample')[0].children[0].children[0].cloneNode(true);
        sample.childNodes[3].children[0].innerHTML = time;
        sample.childNodes[5].innerHTML = news;
        console.log(node);
        mainTable.appendChild(sample);
    });
});