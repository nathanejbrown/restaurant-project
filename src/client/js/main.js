(function () {

  console.log('sanity check!');

  //when user inputs information on signup page, update user table in db and redirect to the signin page

  $('[name="signup-form"]').on('submit', function() {
    console.log('it worked');
  });

})();
