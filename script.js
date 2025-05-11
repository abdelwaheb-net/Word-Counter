$(document).ready(function () {

  $("#countBtn").on("click",function () {
    let text = $("#textInput").val();

    let words = text.trim().split(/\s+/);
    let wordCount = text === "" ? 0 : words.length;
    $("#wordCount").text(wordCount);
  });

});
