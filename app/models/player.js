import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  match_wins: DS.attr('number'),
  match_losses: DS.attr('number'),
  game_wins: DS.attr('number'),
  game_losses: DS.attr('number'),
  trueskill: DS.attr('number'),
  best_budy: DS.attr('string'),
  dynamic_duo: DS.belongsTo('player'),
  player_rating_trend_diff: DS.attr(),
  trueSkillRounded: Ember.computed('trueskill', function(){
    if (typeof this.get('trueskill') === 'number'){
      return this.get('trueskill').toFixed(3);
    }
  }),
  trendDiff: Ember.computed('player_rating_trend_diff', function(){
    if (typeof this.get('player_rating_trend_diff') === "number") {
      return this.get('player_rating_trend_diff').toFixed(3);
    }
  }),
  fullName: Ember.computed('first_name', 'last_name', function(){
    return this.get('first_name') + ' ' + this.get('last_name');
  })
});

//  ball_and_chain: DS.belongsTo('player'),
//  rival: DS.belongsTo('player'),
//  punching_bag: DS.belongsTo('player'),
//  nemesis: DS.belongsTo('player')
