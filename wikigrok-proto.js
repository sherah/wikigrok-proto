if (Meteor.isClient) {
  var gameAnswered = false,
      gameAccepted = false,
      numberAsked  = 0;

  Template.gamePrompt.events({
    //these are messy as hell fix it omg

    'click #quit': function(){
      removeGamePrompt();
    },

    'click #playAgain': function(){
      rerenderGamePrompt();
    },

    'touchstart #quit': function(event){
      event.preventDefault();
      removeGamePrompt();
    },

    'touchstart #playAgain': function(event){
      event.preventDefault();
      rerenderGamePrompt();
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

    'touchstart .answerButtons li': function (event) {
      event.preventDefault();
      Template.gamePrompt.gameAnswered = true;
      rerenderGamePrompt();
    },

    'touchstart .xOut': function (event) {
      event.preventDefault();
      removeGamePrompt();
    }

  });

  var rerenderGamePrompt = function(){
    removeGamePrompt();
    UI.insert(UI.render(Template.gamePrompt), document.body);
    Template.gamePrompt.gameAnswered = false;
    $('.gamePrompt').removeClass('hidden');
  };

  var removeGamePrompt = function(){

    $('.gamePrompt').remove();

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
