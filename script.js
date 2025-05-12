$(document).ready(function () {

  $("#countBtn").on("click",function () {
    let text = $("#textInput").val();

    let words = text.trim().split(/\s+/);
    let wordCount = text === "" ? 0 : words.length;
    $("#wordCount").text(wordCount);
    let characterwithspace=text.trim().length;
 let characterwithoutspace=text.replace(/\s+/g, '').length;

 $("#charCount").text(characterwithspace);
 $("#charCountNoSpace").text(characterwithoutspace);




  });

  $("#resetBtn").on("click", function () {
    console.log("hello world");
    $("#textInput").val("");
    $("#wordCount").text("0");
    $("#charCount").text("0");
    $("#charCountNoSpace").text("0");

    
  });

});
