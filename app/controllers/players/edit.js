import PlayersBaseController from './base';

export default PlayersBaseController.extend({
  actions: {
    cancel: function(){
      this.transitionToRoute('players.show', this.get('model'));
      return false;
    }
  }
});

