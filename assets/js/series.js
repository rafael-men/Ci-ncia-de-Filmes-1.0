$(document).ready(function () {
    $(".cad").hover(
      function () {
        $(this).find("img").css("transform", "scale(1.1)");
      },
      function () {
        $(this).find("img").css("transform", "scale(1)");
      }
    );
  });