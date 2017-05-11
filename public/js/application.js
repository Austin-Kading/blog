$(document).ready(function() {
  $(".container").on('click', "a", function(e) {
    e.preventDefault();
    var $url = $(this).attr('href');
    var $link = $(this);
    $.ajax({
      url: $url,
      type: 'GET'
    }).done(function(response) {
    $link.append(response)
    })
  })
});
