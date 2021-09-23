$(document).ready(function () {
    //Prevents to close the specified dropdowns
    $('#dropdown-menu-2, #dropdown-menu-3').on('click', function (e) {
        e.stopPropagation();
    });

    $('#btn-select-2').on('click', function (e) {
        $("#btn-select-2").attr("aria-expanded", "true");
        $("#dropdown-menu-2").show();
    });
    $('#btn-select-3').on('click', function (e) {
        $("#btn-select-3").attr("aria-expanded", "true");
        $("#dropdown-menu-3").show();
    });

    function toggleMenu2() {
        var $mobileMenu = $('#dropdown-menu-2');
        $mobileMenu.slideToggle('fast');

    }
    function toggleMenu3() {
        var $mobileMenu = $('#dropdown-menu-3');
        $mobileMenu.slideToggle('fast');
    }

    $('#btn-done-1').on('click', toggleMenu2);
    $('#btn-done-2').on('click', toggleMenu3);


});