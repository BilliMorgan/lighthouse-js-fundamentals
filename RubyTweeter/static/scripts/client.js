/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 
 */

const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// rendering tweets
const renderTweets = (tweets) => {
  $("#tweets-container").html("")
  for (tweet of tweets) {
    $("#tweets-container").prepend(createTweetElement(tweet))
  }
}
//add escape to each user's inputs.
//creating tweets accordingly to the pattern
createTweetElement = (tweet) => {
  let $tweet = $("<article>").addClass("tweet");
  $tweet.html(`
  <header class="article-header">
          <div class="top-header">
            <img src=${tweet.user.avatars}>${tweet.user.name}</i>
          </div>
          <div class="top-header">${tweet.user.handle}</div>
        </header>
        <div id="tweet-text">
          ${escape(tweet.content.text)}
        </div>
        <footer>
          <span>${jQuery.timeago((tweet.created_at / 1000) * 1000)}</span>
          <div class="icon">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
  `)
  return $tweet;
};

//loading tweets
const loadTweets = () => {
  $.get("/tweets", function (data) {
    renderTweets(data)
  })
}
//empty input form
const clearForm = () => {
  $("#tweet-text").val("")
  $('.counter').text(140)
}

//jqury functionality
$(document).ready(function () {
  //renderTweets(data);
  loadTweets();
  //hiding
  $(".new-tweet").hide(200);

  // hide and show input form by click
  let hidenTextArea = false;
  $(".write-span").click(function () {
    if (hidenTextArea === false) {
      $(".new-tweet").show(200)
      $("#tweet-text").focus()
      hidenTextArea = true;
    } else {
      $(".new-tweet").hide(200)
      hidenTextArea = false;
    }
  });

  //submitting form
  $("#form").submit(function (event) {
    event.preventDefault();
    let data = $("#form").serialize()

    
    //error functionality
    if ($('#tweet-text').val() === "" || $('#tweet-text').val() === null) {
      $("#alert-empty-tweet").show(200)
    } 
    else if($('.counter').val() <= 0 ) {
      console.log()
     // $("#alert-exeed-length").show(200)
    }
    else {
      $.post("/tweets", data)
        .done(function () {
          loadTweets();
          clearForm();
        })
    }
  });
  //hiding alerts at the beginig
  $("#alert-empty-tweet").hide()
  $("#alert-exeed-length").hide()
  $("#tweet-text").on('keyup', function () {
    const inputLength = $('#tweet-text').val().length;
    if (inputLength > 0) {
      $("#alert-empty-tweet").hide(200)
    }
  })
});

