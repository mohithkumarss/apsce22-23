$(document).ready(function () {
  var slider_quant = $("#slider .item").length;
  var quant = slider_quant - 1;
  var tempoAutomatico = 10000;

  function timer() {
    $(".slider-timer").clearQueue().finish();
    $(".slider-timer").animate({ width: "0" }, 0);
    $(".slider-timer").animate({ width: "100%" }, tempoAutomatico);
  }

  function automatic() {
    timer();
    var posicao = $(".item").index($(".item-ativo"));
    var atual = $(".item").eq(posicao);
    atual.addClass("item-ativo");
    atual.css("display", "block");
    setTimeout(() => {
      $("#nav-right").css("background-color", "red");
    }, 10000);

    // if (posicao < quant) {
    //   var atual = $(".item").eq(posicao);
    //   $(".nav-li").eq(posicao).removeClass("nav-li-marcado");
    //   atual.fadeOut(500, function () {
    //     atual.removeClass("item-ativo");
    //   });

    //   posicao++;

    //   var atual2 = $(".item").eq(posicao);
    //   $(".nav-li").eq(posicao).addClass("nav-li-marcado");
    //   atual2.fadeIn(400, function () {
    //     atual2.addClass("item-ativo");
    //   });
    // } else {
    //   var atual = $(".item").eq(posicao);
    //   $(".nav-li").eq(posicao).removeClass("nav-li-marcado");
    //   atual.fadeOut(500, function () {
    //     atual.removeClass("item-ativo");
    //   });

    //   posicao = 0;

    //   var atual2 = $(".item").eq(posicao);
    //   $(".nav-li").eq(posicao).addClass("nav-li-marcado");
    //   atual2.fadeIn(400, function () {
    //     atual2.addClass("item-ativo");
    //   });
    // }
  }

  var tempoSlide = window.setInterval(automatic, tempoAutomatico);
  function endAndStartTimer() {
    window.clearTimeout(tempoSlide);
    tempoSlide = window.setInterval(automatic, tempoAutomatico);
    // $(".nav-right").css("background-color","none")
  }

  function navigation() {
    for (var i = 1; i <= slider_quant; i++) {
      $("#navs").append("<li class='nav-li'>" + "</li>");
    }

    $(".nav-li").on("click", function () {
      endAndStartTimer();
      timer();

      var posicao = $(this).index();
      $(".nav-li").removeClass("nav-li-marcado");
      var atual = $(".item-ativo");
      atual.fadeOut(500, function () {
        atual.removeClass("item-ativo");
      });

      var atual2 = $(".item").eq(posicao);
      $(this).addClass("nav-li-marcado");
      atual2.fadeIn(400, function () {
        atual2.addClass("item-ativo");
      });
    });
  }

  function direction() {
    var marcado = $(".item").index($(".item-ativo"));
    $(".nav-li").eq(marcado).addClass("nav-li-marcado");

    var dirLeft = $("#nav-left");
    var dirRight = $("#nav-right");

    dirRight.on("click", function () {
      timer();
      endAndStartTimer();
      $("#nav-right").css("background", "rgba(0,0,0,0.1)");
      var posicao = $(".item").index($(".item-ativo"));
      if (posicao < quant) {
        var atual = $(".item").eq(posicao);
        $(".nav-li").eq(posicao).removeClass("nav-li-marcado");
        atual.fadeOut(500, function () {
          atual.removeClass("item-ativo");
        });

        posicao++;

        var atual2 = $(".item").eq(posicao);
        $(".nav-li").eq(posicao).addClass("nav-li-marcado");
        atual2.fadeIn(400, function () {
          atual2.addClass("item-ativo");
        });
      } else {
        var atual = $(".item").eq(posicao);
        $(".nav-li").eq(posicao).removeClass("nav-li-marcado");
        atual.fadeOut(500, function () {
          atual.removeClass("item-ativo");
        });

        posicao = 0;

        var atual2 = $(".item").eq(posicao);
        $(".nav-li").eq(posicao).addClass("nav-li-marcado");
        atual2.fadeIn(400, function () {
          atual2.addClass("item-ativo");
        });
      }
    });

    dirLeft.on("click", function () {
      timer();
      endAndStartTimer();
      $("#nav-right").css("background", "rgba(0,0,0,0.1)");
      var posicao = $(".item").index($(".item-ativo"));
      if (posicao > 0) {
        // Se a  posição for menor, executa a parada
        var atual = $(".item").eq(posicao);
        $(".nav-li").eq(posicao).removeClass("nav-li-marcado");
        atual.fadeOut(500, function () {
          atual.removeClass("item-ativo");
        });

        posicao--;

        var atual2 = $(".item").eq(posicao);
        $(".nav-li").eq(posicao).addClass("nav-li-marcado");
        atual2.fadeIn(400, function () {
          atual2.addClass("item-ativo");
        });
      } else {
        var atual = $(".item").eq(posicao);
        $(".nav-li").eq(posicao).removeClass("nav-li-marcado");
        atual.fadeOut(500, function () {
          atual.removeClass("item-ativo");
        });

        posicao = quant;

        var atual2 = $(".item").eq(posicao);
        $(".nav-li").eq(posicao).addClass("nav-li-marcado");
        atual2.fadeIn(400, function () {
          atual2.addClass("item-ativo");
        });
      }
    });
  }

  automatic();

  navigation();
  timer();

  direction();
});

$(document).ready(function () {
  var Scrollbar = window.Scrollbar;

  Scrollbar.use(window.OverscrollPlugin);

  var customScroll = Scrollbar.init(document.querySelector(".js-scroll-list"), {
    plugins: {
      overscroll: true,
    },
  });

  var listItem = $(".js-scroll-list-item");

  listItem.eq(0).addClass("item-focus");
  listItem.eq(1).addClass("item-next");

  customScroll.addListener(function (status) {
    var $content = $(".js-scroll-content");

    var viewportScrollDistance = 0;

    viewportScrollDistance = status.offset.y;
    var viewportHeight = $content.height();
    var listHeight = 0;
    var $listItems = $content.find(".js-scroll-list-item");
    for (var i = 0; i < $listItems.length; i++) {
      listHeight += $($listItems[i]).height();
    }

    var top = status.offset.y;
    // console.log(top);
    var visibleCenterVertical = 0;
    visibleCenterVertical = top;

    var parentTop = 1;
    var $lis = $(".js-scroll-list-item");
    var $focusLi;
    for (var i = 0; i < $lis.length; i++) {
      var $li = $($lis[i]);
      var liTop = $li.position().top;
      var liRelTop = liTop - parentTop;

      var distance = 0;
      var distance = Math.abs(top - liRelTop);
      var maxDistance = $(".js-scroll-content").height() / 2;
      var distancePercent = distance / (maxDistance / 100);

      if (liRelTop + $li.parent().scrollTop() > top) {
        if (!$li.hasClass("item-focus")) {
          $li.prev().addClass("item-hide");
          $lis.removeClass("item-focus");
          $lis.removeClass("item-next");
        }
        $li.removeClass("item-hide");
        $li.addClass("item-focus");
        $li.next().addClass("item-next");
        break;
      }
    }
  });
});

const height = (elem) => {
  return elem.getBoundingClientRect().height;
};

const distance = (elemA, elemB, prop) => {
  const sizeA = elemA.getBoundingClientRect()[prop];
  const sizeB = elemB.getBoundingClientRect()[prop];

  return sizeB - sizeA;
};

const factor = (elemA, elemB, prop) => {
  const sizeA = elemA.getBoundingClientRect()[prop];
  const sizeB = elemB.getBoundingClientRect()[prop];

  return sizeB / sizeA;
};

document.querySelectorAll(".card").forEach((elem) => {
  const head = elem.querySelector(".card__head");
  const image = elem.querySelector(".card__image");
  const author = elem.querySelector(".card__author");
  const body = elem.querySelector(".card__body");
  const foot = elem.querySelector(".card__foot");

  elem.onmouseenter = () => {
    elem.classList.add("hover");

    const imageScale = 1 + factor(head, body, "height");
    image.style.transform = `scale(${imageScale})`;

    const bodyDistance = height(foot) * -1;
    body.style.transform = `translateY(${bodyDistance}px)`;

    const authorDistance = distance(head, author, "height");
    author.style.transform = `translateY(${authorDistance}px)`;
  };

  elem.onmouseleave = () => {
    elem.classList.remove("hover");

    image.style.transform = `none`;
    body.style.transform = `none`;
    author.style.transform = `none`;
  };
});

var leftButton = document.getElementById("eventAndNotif");
var rightButton = document.getElementById("eventAndNotif2");
var notiflist = document.getElementById("list");
var eventlist = document.getElementById("eventlist");
function eventColors() {
  rightButton.classList.add("activeColor");
  leftButton.classList.remove("activeColor");
  notiflist.style.visibility = "hidden";
  eventlist.style.visibility = "visible";
}

function notifColors() {
  leftButton.classList.add("activeColor");
  rightButton.classList.remove("activeColor");
  eventlist.style.visibility = "hidden";
  notiflist.style.visibility = "visible";
}

var navlink = document.getElementById("navlink");

function showmenu() {
  navlink.style.right = "0";
}
function hidemenu() {
  navlink.style.right = "-600px";
}

$(document).ready(function () {
  $(".modal").modal("show");
});

var preloader = document.getElementById("loader");
function myfunction() {
  preloader.style.display = "none";
}

$(function () {
  $("#nav-placeholder").load("navbar.html");
});

$(function () {
  $("#footer-placeholder").load("footer.html");
});

$(function () {
  $("#back-to-top").load("/public_html/backtotop/index.html");
});

const video = document.querySelector(".video");
const playButton = document.querySelector(".fa-play-circle");

video.addEventListener("mouseenter", () => {
  video.play();
  playButton.style.display = "none";
});

video.addEventListener("mouseleave", () => {
  video.pause();
  video.currentTime = 0;
  playButton.style.display = "block";
});
