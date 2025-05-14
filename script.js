$(document).ready(function () {

  $("#countBtn").on("click",calculation);

  $("#resetBtn").on("click", function () {
    console.log("hello world");
    $("#textInput").val("");
    $("#wordCount").text("0");
    $("#charCount").text("0");
    $("#charCountNoSpace").text("0");
    $("#phrases").text("0");
 $("#paragraphes").text("0");

    
  });

   $("#real-time").on("change",function(){
    let displayStatus=$('input[name="display"]:checked').val();
if(displayStatus=='real-time'){
  $("#countBtn").hide();

}
   });
   $("#button-counter").on("change",function(){
    let displayStatus=$('input[name="display"]:checked').val();
 if(displayStatus=='button-counter'){
    $("#countBtn").show();
   }
   });
   
    

$("#textInput").keyup(()=>{let displayStatus=$('input[name="display"]:checked').val();
if(displayStatus=='real-time'){calculation()}});

   function calculation(){
let text = $("#textInput").val();

    let words = text.trim().split(/\s+/);
    let wordCount = text === "" ? 0 : words.length;
    $("#wordCount").text(wordCount);
    let characterwithspace=text.trim().length;
 let characterwithoutspace=text.replace(/\s+/g, '').length;

 $("#charCount").text(characterwithspace);
 $("#charCountNoSpace").text(characterwithoutspace);


 const cleanedText=$("#textInput").val();
   const normalized = cleanedText.replace(/([.!?])(?!\s)/g, "$1 ");
 const sentences = normalized.split(/[.!?]\s+/).filter(s => s.trim().length > 0);  
 let countsentences=sentences.length;


 const cleanedparagraph=$("#textInput").val();
 const paragraphes=cleanedparagraph.split(/\n+/).filter(x=>x.trim().length>0);
 let countpragraphes=paragraphes.length;
 
 $("#phrases").text(countsentences);
 $("#paragraphes").text(countpragraphes);




   }
});
