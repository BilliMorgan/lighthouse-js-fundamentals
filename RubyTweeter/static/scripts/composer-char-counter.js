//counter and exceeding error functionality
$(document).ready(function () {
  $('#tweet-text').on('keyup', function () {
    const inputLength = $(this).val().length;
    const maxInput = 140;
    $('.counter').text(maxInput - inputLength)
    if (maxInput - inputLength <= 0) {
      $('.counter').css("color", "red")
      $("#alert-exeed-length").show(200)
    } else {
      $('.counter').css("color", " #545149")
      $("#alert-exeed-length").hide(200)
    }
  })
});
