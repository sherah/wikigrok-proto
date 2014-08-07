if (Meteor.isClient) {

  Template.gamePrompt.events({
    'click .answerButtons li': function (event) {
      // template data, if any, is available in 'this'
      Template.gamePrompt.gameAnswered = true;
      removeGamePrompt();
      UI.insert(UI.render(Template.gamePrompt), document.body);
      console.log(Template.gamePrompt);
    }
  });

  var removeGamePrompt = function(){
    $('.gamePrompt').remove();
  };



}
