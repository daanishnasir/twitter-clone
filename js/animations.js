// * As the user types, the character count should decrease.

// * When there are 10 or less characters, the character counter should turn red.
// * If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars).
// * When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname.

$(document).ready(function(){

$('#tweet-submit, #char-count').hide();



$(".tweet-compose").click(function(){
  console.log("Tweet composed clicked");
    $(this).css('height', '10em');
    $('#tweet-submit, #char-count').show();
});

/////////
var maxCharacters = 140;

$('#char-count').text(maxCharacters);

$('.tweet-compose').keyup(function(){
    var count = $('#char-count');
    var characters = $(this).val().length; //.length of the characters inside an input

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

$('#tweet-submit').click(function(){
  console.log('tweet click is working');
  $('.dashboard').prependTo('#stream');
});























});
