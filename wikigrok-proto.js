if (Meteor.isClient) {
  var gameAnswered = false;

  Template.gamePrompt.events({
    'scroll body': function(){
      console.log('scrolling');
    },

    'click .answerButtons li': function (event) {
      Template.gamePrompt.gameAnswered = true;
      rerenderGamePrompt();
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
      Template.gamePrompt.gameAnswered = false;
      rerenderGamePrompt();
    },

  });

  var rerenderGamePrompt = function(){
    removeGamePrompt();

    UI.insert(UI.render(Template.gamePrompt), document.body);
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

}
