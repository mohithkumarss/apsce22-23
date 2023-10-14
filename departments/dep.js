$(function () {
  $("#nav-placeholder").load("/public_html/navbar.html");
});

$(function () {
  $("#footer-placeholder").load("/public_html/footer.html");
});
$(function () {
  $("#back-to-top").load("/public_html/backtotop/index.html");
});
$(function () {
  $("#back-to-top").load("/public_html/backtotop/index.html");
});

var position = 500;
$(".leftBtn").click(function () {
  $(".overflow").animate(
    {
      scrollLeft: "-=" + position,
    },
    "slow"
  );
});

$(".rightBtn").click(function () {
  $("div").animate(
    {
      scrollLeft: "+=" + position,
    },
    "slow"
  );
});

window.onload = function () {
  //hide the preloader
  document.querySelector(".preload-bg").style.display = "none";
};
