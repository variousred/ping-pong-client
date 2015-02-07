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
  dynamic_duo: DS.belongsTo('player')
});

//  ball_and_chain: DS.belongsTo('player'),
//  rival: DS.belongsTo('player'),
//  punching_bag: DS.belongsTo('player'),
//  nemesis: DS.belongsTo('player')
