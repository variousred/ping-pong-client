import PlayersBaseController from './base';

export default PlayersBaseController.extend({
  actions: {
    cancel: function(){
      this.transitionToRoute('friends.index');
      return false;
    }
  }
});
