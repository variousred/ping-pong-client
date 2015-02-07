import Ember from 'ember';

export default Ember.Controller.extend({
  theProperty: "foo",
  trendClass: function(){
    return (this.get('model.player_rating_trend_diff') > 0 ? 'arrow-up' : 'arrow-down');
  }.property('model.player_rating_trend_diff')

});
