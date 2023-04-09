$(function() {
  $("#btn").click(function() {
    $("#frame").toggleClass("down-150");
    $("#esc").toggleClass("down-100");
    $("#bot-spacer").toggleClass("down-100");
    $("#motor").toggleClass("down-50");
    $("#fc").toggleClass("down-50");

    $("#nut").toggleClass("up-200");
    $("#prop").toggleClass("up-100");
    $("#top-spacer").toggleClass("up-75");
    $("#xt60").toggleClass("up-50");
    $("#wire").toggleClass("up-50");
    $("#fpv").toggleClass("up-100");
    $("#gopro").toggleClass("up-150");
    $("#vtx").toggleClass("up-100");

    $("#btn").html($("#btn").html() == "EXPLODE" ? "COLLAPSE" : "EXPLODE");
  });
});