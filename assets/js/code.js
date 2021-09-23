$(document).ready(function () {
    //Adults counter, increment and decrement
    const adult_minus = $('#quantity__minus-adult');
    const adult_plus = $('#quantity__plus-adult');
    const adult_input = $('#quantity__input-adult');
    adult_minus.click(function (e) {
        e.preventDefault();
        var value = adult_input.val();
        if (value > 1) {
            value--;
        }
        adult_input.val(value);
    });

    adult_plus.click(function (e) {
        e.preventDefault();
        var value = adult_input.val();
        value++;
        adult_input.val(value);
    })

    //Youth counter, increment and decrement
    const youth_minus = $('#quantity__minus-youth');
    const youth_plus = $('#quantity__plus-youth');
    const youth_input = $('#quantity__input-youth');
    youth_minus.click(function (e) {
        e.preventDefault();
        var value = youth_input.val();
        if (value > 0) {
            value--;
        }
        youth_input.val(value);
    });

    youth_plus.click(function (e) {
        e.preventDefault();
        var value = youth_input.val();
        value++;
        youth_input.val(value);
    })

    //Childrens counter, increment and decrement
    const childrens_minus = $('#quantity__minus-childrens');
    const childrens_plus = $('#quantity__plus-childrens');
    const childrens_input = $('#quantity__input-childrens');
    childrens_minus.click(function (e) {
        e.preventDefault();
        var value = childrens_input.val();
        if (value > 0) {
            value--;
        }
        childrens_input.val(value);
    });

    childrens_plus.click(function (e) {
        e.preventDefault();
        var value = childrens_input.val();
        value++;
        childrens_input.val(value);
    })

    //Prevents to close the specified dropdowns
    $('#dropdown-menu-2').on('click', function (e) {
        e.stopPropagation();
    });
    $('#dropdown-menu-3').on('click', function (e) {
        e.stopPropagation();
    });

    //Show dropdown and close other
    $('#btn-select-2').on('click', function (e) {
        $("#dropdown-menu-2").addClass("show");
        $("#dropdown-menu-3").removeClass("show");
    });
    //Hide dropdown menu
    $('#btn-done-2').on('click', function (e) {
        $("#dropdown-menu-2").removeClass("show");
    });

    //Show dropdown and close other
    $('#btn-select-3').on('click', function (e) {
        $("#dropdown-menu-3").addClass("show");
        $("#dropdown-menu-2").removeClass("show");
    });
    //Hide dropdown menu
    $('#btn-done-3').on('click', function (e) {
        $("#dropdown-menu-3").removeClass("show");
    });

    $('#dropdown-menu-1 #1').on('click', function (e) {
        var text=$('#dropdown-menu-1 #1').text();
        $('#btn-select-1 .selected').text(text);
    });

    $('#dropdown-menu-1 #2').on('click', function (e) {
        var text=$('#dropdown-menu-1 #2').text();
        $('#btn-select-1 .selected').text(text);
    });
});