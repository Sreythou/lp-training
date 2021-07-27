$(document).ready(function () {
    $("#toggle-1").click(function () {
        if ($("#content-1").is(":hidden")) {
            $('#arrow-btn-1').attr('src', './resources/images/img_circle_arrow_up.png');
        } else {
            $('#arrow-btn-1').attr('src', './resources/images/img_circle_arrow_down.png');
        }
        $("#content-1").slideToggle("slow");
    });

    $("#toggle-2").click(function () {
        if ($("#content-2").is(":hidden")) {
            $('#arrow-btn-2').attr('src', './resources/images/img_circle_arrow_up.png');
        } else {
            $('#arrow-btn-2').attr('src', './resources/images/img_circle_arrow_down.png');
        }
        $("#content-2").slideToggle("slow");
    });

    $("#toggle-3").click(function () {
        if ($("#content-3").is(":hidden")) {
            $('#arrow-btn-3').attr('src', './resources/images/img_circle_arrow_up.png');
        } else {
            $('#arrow-btn-3').attr('src', './resources/images/img_circle_arrow_down.png');
        }
        $("#content-3").slideToggle("slow");
    });
    $("#toggle-12").click(function () {
        if ($("#content-12").is(":hidden")) {
            $('#arrow-btn-12').attr('src', './resources/images/img_circle_arrow_up.png');
        } else {
            $('#arrow-btn-12').attr('src', './resources/images/img_circle_arrow_down.png');
        }
        $("#content-12").slideToggle("slow");
    });
});