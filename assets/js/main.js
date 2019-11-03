
// Page Scroll to Register
$(document).ready(function(){
	$('.page-scroll').on('click', function(e){
	  var tujuan = $(this).attr('href');
	  var elemenTujuan = $(tujuan);
	  
  
	  $("html, body").animate({
		  scrollTop: elemenTujuan.offset().top - 30
		}, 800, function(){
	  });
  
	  e.preventDefault();
  });
  });
  
