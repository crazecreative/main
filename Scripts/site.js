$(document).ready(function () {

    $(function () {
        $("a").each(function () {
            if ($(this).attr("href") == window.location.pathname) {
                $(this).addClass("selected");
            }
        });
    });

    $(function () {
        $('.post-thumbnails li').each(function (i) {
            $(this).delay((i++) * 400).fadeTo(1000, 1);
        })
    });

    $(".sub-header-toggle").hover(function () {
        if ($(this).children(".sub-menu").is(":hidden")) {
            $(".sub-menu").slideDown();
        } else {
            $(".sub-menu").slideUp();
        }
    });

    $('#filters input').on('change', function () {

        var checkboxValue = $(this).attr('name');

        if(this.checked)
            $('#portfolio').find('.' + checkboxValue).fadeIn('slow');
        else
            $('#portfolio').find('.' + checkboxValue).fadeOut('slow');
    });

});