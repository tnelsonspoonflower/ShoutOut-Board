var placeHolder = 0;
var textOrder = [
  //Array of IDs, representing each shout out spot
  "#flowerPot1",
  "#flowerPot2",
  "#flowerPot3",
  "#flowerPot4",
  "#flowerPot5",
  "#flowerPot6",
  "#flowerPot7",
  "#flowerPot8"
];
$(document).ready(function() {
  $("#shoutOutForm").submit(function(e) {
    e.preventDefault();
    msg = $("textarea#user_message").val();
    //Shout out the user submits
    Rmsg = $("textarea#recipient_message").val();
    //Who the shout out is for
    Fmsg = $("textarea#from_message").val();
    //Who the shout out is from
    if (Fmsg == "") {
      Fmsg = "Anonymous";
      //If blank, shout out is anonymous
    }

    var currentShoutOut = textOrder[placeHolder];

    if (placeHolder < 7) {
      placeHolder += 1;
    } else {
      placeHolder = 0;
    }
    
    var picked_flower = $(currentShoutOut);
    picked_flower
      .hide()
      //Hides the initial Shoutout so that it can fade in
      .html("Shout out to " + Rmsg + "<br>From " + Fmsg + "<br>" + msg)
      //Shows the shout out in the textarea
      .fadeIn(500)
      //Starts the flash process for the shout out
      .fadeOut(500)
      .fadeIn(500);
    $("textarea#user_message").val("");
    //Clears the input area for the next shout out
  });
});