$('.dropdown-trigger').dropdown();
$('.fixed-action-btn').floatingActionButton();

$('.dark-toggle').on('click',function(){
  alert('clicked');
  if ($(this).find('i').text() == 'brightness_4'){
          $(this).find('i').text('brightness_high');
  } else {
          $(this).find('i').text('brightness_4');
  }
});