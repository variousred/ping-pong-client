import DS from 'ember-data';
import config from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: config.APP.host,
  buildURL: function(record, suffix){
    var s = this._super(record, suffix);
    return s + ".json";
  }
});

