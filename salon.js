$(function(){
$('#about1').hide().fadeIn(2000);
$('#about2').hide().fadeIn(4000);
});



$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});
