$(document).ready(function() {
    var originalFont = $('html').css('font-size');
    var originalFontNum = parseFloat(originalFont);
    var increasedFont = originalFontNum * 1.3;
    $('#nicememe').hide();
    $('#nicememe').toggle(1000);
   $('#nicememe').mouseover(function() {
       $('html').css('font-size', increasedFont)
   }); 
   $('#nicememe').mouseleave(function() {
       $('html').css('font-size', originalFont)
   });
});
