$(".images img").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
  $('#nav , #sub , #headimg').hide();
  
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
  $('#nav, #sub, #headimg').show();
  
});

$('#prev').click(function() {
  $('#image-viewer').prev();
});

$('#next').click(function() {

});