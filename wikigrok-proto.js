if (Meteor.isClient) {
  var gameAnswered = false;

  Template.gamePrompt.events({

    'click .answerButtons li': function (event) {
      var answer = event.target.id;

      removeGamePrompt();
      Template.gamePrompt.gameAnswered = true;
      UI.insert(UI.render(Template.gamePrompt), document.body);

    },

    'click .xOut': function () {
      removeGamePrompt();
    }

  });

  var removeGamePrompt = function(){

    $('.gamePrompt').remove();

  };

  Template.gamePrompt.helpers({
    question: function(){
      console.log(Template.gamePrompt.gameAnswered);
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
