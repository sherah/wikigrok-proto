if (Meteor.isClient) {
  var gameAnswered = false,
      gameAccepted = false,
      numberAsked  = 0;

  Template.gamePrompt.events({
    'swipeleft .optIntoGame': function(event){
      event.preventDefault();
      //do 'no' thing
      removeGamePrompt();
    },

    'swiperight .optIntoGame': function(event){
      event.preventDefault();
      //do 'yes' thing
      Template.gamePrompt.gameAccepted = true;
      rerenderGamePrompt();
    },

    'click .answerButtons li': function (event) {
      Template.gamePrompt.gameAnswered = true;
      rerenderGamePrompt();
      if(numberAsked > 1){
        console.log('dont show thanks');
      } else {
        console.log('show the thanks');
      }
    },

    'click .optInButtons li': function (event) {
      if(event.target.id === "yesOption"){
        Template.gamePrompt.gameAccepted = true;
        rerenderGamePrompt();
      } else {
        removeGamePrompt();
      }
    },

    'touchstart .optInButtons li': function (event) {
      event.preventDefault();
      if(event.target.id === "yesOption"){
        Template.gamePrompt.gameAccepted = true;
        rerenderGamePrompt();
      } else {
        removeGamePrompt();
      }

    },

    'click .xOut': function () {
      removeGamePrompt();
    },

    'click .askAgain': function() {
      Template.gamePrompt.gameAnswered = false;
      rerenderGamePrompt();
    },

    'touchstart .answerButtons li': function (event) {
      event.preventDefault();
      Template.gamePrompt.gameAnswered = true;
      rerenderGamePrompt();
    },

    'touchstart .xOut': function (event) {
      event.preventDefault();
      removeGamePrompt();
    },

    'touchstart .askAgain': function (event) {
      event.preventDefault();
      askAgain();
    },

  });

  var rerenderGamePrompt = function(){
    removeGamePrompt();
    UI.insert(UI.render(Template.gamePrompt), document.body);
    $('.gamePrompt').removeClass('hidden');
  };

  var removeGamePrompt = function(){

    $('.gamePrompt').remove();

  };

  var askAgain = function(){
    Template.gamePrompt.gameAnswered = false;
    rerenderGamePrompt();
    numberAsked += 1;
  };

  Template.gamePrompt.helpers({
    question: function(){

      var questions = [
        "Is Paul Rand a Graphic Designer?",
        "Did Paul Rand win any awards?",
        "Did Paul Rand go to Pratt Institute?",
        "Did Paul Rand work for IBM?"
      ];
      return questions[parseInt(Math.random() * questions.length)];
    },
    gameAnswered: false
  });

  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var gamePosition = 850;

    if(y_scroll_pos > gamePosition) {
        $('.gamePrompt').removeClass('hidden');
    }
});

}
