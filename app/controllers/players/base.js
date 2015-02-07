import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
             'model.email',
             'model.first_name',
             'model.last_name',
             function(){
               return !Ember.isEmpty(this.get('model.email')) &&
                      !Ember.isEmpty(this.get('model.first_name')) &&
                      !Ember.isEmpty(this.get('model.last_name'));
             }
  ),
  actions: {
    save: function(){
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(player){
          _this.transitionToRoute('players.show', player);
        });
      } else {
        this.set('errorMessage', "You have to fill all the fields");
      }
      return false;
    },
    cancel: function(){
      return true;
    }
  }
});

