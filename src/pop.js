'use strict';

function block() {
    setTimeout(function () {
        console.log("start block");
        $(".Modal-wrapper").remove();
        $('html').attr('style', '');
        console.log("end block");
    }, 1000)

}
document.addEventListener('DOMContentLoaded', function () {
    block();
});
