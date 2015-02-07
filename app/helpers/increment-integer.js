import Ember from 'ember';

export function incrementInteger(input) {
  return input + 1;
}

export default Ember.Handlebars.makeBoundHelper(incrementInteger);
