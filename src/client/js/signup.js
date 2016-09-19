(function () {

  console.log('Insanity. Check!');

  $('.image-submit').on('click', function(e) {
    e.preventDefault();
    var $userImage = $('.user-image').val();
    console.log($userImage);
    $('#user-image').attr('src', $userImage);
  });

})();
