

$(document).ready(function(){

  // STEP 1: Initially, the Tweet button and the character count button below should be hidden. -->

$('#tweet-submit, #char-count').hide();
$('.tweet-actions').hide();
$('.stats').hide();


//STEP 2: When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.

$(".tweet-compose").click(function(){
  // console.log("Tweet composed clicked");

    $(this).css('height', '10em');
    $('#tweet-submit, #char-count').show();
});

/////////


//STEP 4: If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars) -->

var maxCharacters = 140;

$('#char-count').text(maxCharacters);

$('.tweet-compose').keyup(function(){
    var count = $('#char-count');
    var characters = $(this).val().length; //.length of the characters inside an input

    //STEP 3: As the user types the character count should decrease. Once it hits 10 character or less the count should turn red -->

      count.text(maxCharacters - characters);

     if(characters >= 130){
       count.addClass('over');
    }

     if(characters >140){
      $('button').attr('disabled','disabled');
    }

    if(characters < 140){
      $('button').removeAttr('disabled','disabled');
    }


    if(characters < 130){
      count.removeClass('over');
    }

});
// Tweet button function below

$('#tweet-submit').click(function(){
  // console.log('tweet click is working');

  var $tweet = $('.tweet-compose');
  var $clone = $('#stream').children().first().clone();    //found the first .tweet and cloned it.

  $clone.find('.tweet-text').text($tweet.val());  // in that first tweet find the class .tweet-text (Today is an amazing day) and change/replace its value with the tweet compose value in the clone

  $clone.find('.fullname').text('Chuck Norris');
  $clone.find('.username').text('@daanishnasir');



  $clone.find('.avatar').attr('src', 'http://www.americaremembers.com/wp-content/uploads/2013/08/Chuck-Norris-BW.jpg');//find the image (class avatar) and change its attr to a new image, which is the same)


  $tweet.val('');   //the last thing happening in this function is changing the value to tweet-compose to blank.

  $('#stream').prepend($clone);   //add on top of stream the new tweet.
    //Basically we just cloned a tweet and replaced every value of that clone with what we needed instead to make it look like a new one.
});


// ## Part Two
// * The tweet actions (Reply, Retweet, etc) should only show up when you hover over that individual tweet. Otherwise, they should be hidden.
// * The Retweets/timestamp/Reply areas should also be hidden by default. These should only expand if you click on the tweet. Have the students use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com


// $( selector ).mouseenter( handlerIn ).mouseleave( handlerOut );

//STEP 6: The tweet actions below should only show up when you hover over the tweet. Otherwise, they should be hidden. -->


$('#stream').on('mouseenter', '.content', function(){
  $(this).find('.tweet-actions').show();
});

$('#stream').on('mouseleave', '.content', function(){
  $(this).find('.tweet-actions').hide();
});


//STEP 7: The Retweets/timestamp/Reply areas below should also be hidden by default. These should only expand if you click on the tweet. Use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com -->

$('#stream').on('click','.content', function(){
  $(this).find('.stats').fadeIn('slow');
});




});
