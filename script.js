$(document).ready(function() {
    var originalFont = $('html').css('font-size');
    var originalFontNum = parseFloat(originalFont);
    var increasedFont = originalFontNum * 1.3;
    $('#nicememe').hide();
    $('#nicememe').toggle(1000);
   $('.Dankmeme').mouseover(function() {
       $('html').css('font-size', increasedFont)
   }); 
   $('.Dankmeme').mouseleave(function() {
       $('html').css('font-size', originalFont)
   });
});
