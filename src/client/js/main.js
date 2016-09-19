(function () {

  console.log('sanity check!');

  //when user inputs information on signup page, update user table in db and redirect to the signin page

  $('[name="signup-form"]').on('submit', function() {
    console.log('it worked');
  });

  $('#delete-restaurant').on('click', function() {
    const id = $(this).data('id');

    $.ajax({
      url: `/restaurants/${id}`,
      method: 'DELETE'
    }).done((result) => {
      window.location.replace('/restaurants');
    }).fail((error) => {
      console.log(error);
    });
  });

  $('#edit-restaurant').on('submit', function(event) {
    event.preventDefault();

    const id = $(this).data('id');
    const name = $('#name').val();
    const type = $('#type option:selected').val();
    const pic_url = $('#pic-url').val();
    const description = $('#description').val();

    var renderObject = {
      name: name,
      type: type,
      pic_url: pic_url,
      description: description
    };

    $.ajax({
      url: `/restaurants/${id}`,
      method: 'PUT',
      data: renderObject
    }).done((data) => {
      window.location.replace(`/restaurants/${id}`);
    }).fail((error) => {
      console.log(error);
    });
  });

  $('button#delete-comment').on('click', function() {
    const id = $(this).data('id');

    $.ajax({
      url: `/comments/${id}`,
      method: 'DELETE'
    }).done((result) => {
      location.reload();
    }).catch((error) => {
      console.log(error);
    });
  });
})();
