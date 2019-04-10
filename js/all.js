$(document).ready(function () {

  $("#bannerBg-1").hover(function () {

    $("#bannerImg-1").css("filter", "blur(0)");
  }, function () {
    $("#bannerImg-1").css("filter", "blur(5px)");

  });

  $("#bannerBg-2").hover(function () {

    $("#bannerImg-2").css("filter", "blur(0)");
  }, function () {
    $("#bannerImg-2").css("filter", "blur(5px)");

  });

  $("#bannerBg-3").hover(function () {

    $("#bannerImg-3").css("filter", "blur(0)");
  }, function () {
    $("#bannerImg-3").css("filter", "blur(5px)");

  });


});