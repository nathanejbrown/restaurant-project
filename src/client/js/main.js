(function () {

  console.log('sanity check!');

  //when user inputs information on signup page, update user table in db and redirect to the signin page

  $('[name="signup-form"]').on('submit', function() {
    console.log('it worked');
  });

  $('#delete-restaurant').on('click', function() {
    const id = $(this).data('id');
    console.log(id);
    $.ajax({
      url: `/restaurants/${id}`,
      method: 'DELETE'
    }).done((result) => {
      window.location.replace('/restaurants');
    }).fail((error) => {
      console.log(error);
    });
  });

})();
