$(document).ready(function () {

  $("#banner-1").hover(function () {

      $("#bannerImg-1").css("filter", "blur(0)");
      $("#bannerBg-1").css("background-color", "rgba(255, 225, 128, 0.8)");
    }, function () {
      $("#bannerImg-1").css("filter", "blur(5px)");
      $("#bannerBg-1").css("background-color", "rgba(63, 93, 69, 0.8)");
    },

  );

  $("#banner-2").hover(function () {

      $("#bannerImg-2").css("filter", "blur(0)");
      $("#bannerBg-2").css("background-color", "rgba(255, 225, 128, 0.8)");
    }, function () {
      $("#bannerImg-2").css("filter", "blur(5px)");
      $("#bannerBg-2").css("background-color", "rgba(63, 93, 69, 0.8)");
    }

  );

  $("#banner-3").hover(function () {

      $("#bannerImg-3").css("filter", "blur(0)");
      $("#bannerBg-3").css("background-color", "rgba(255, 225, 128, 0.8)");
    }, function () {
      $("#bannerImg-3").css("filter", "blur(5px)");
      $("#bannerBg-3").css("background-color", "rgba(63, 93, 69, 0.8)");
    }

  );


});