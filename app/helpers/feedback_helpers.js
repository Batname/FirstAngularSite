var _ = require('lodash');

/**
 * @description 
 * Handling validation in feedback form
 * 
 * @param  {Object} argument feedback post object
 * @param  {Array} keys keys for validation
 * @return {Boolean}          
 */
module.exports.validateKeysAvailability = function (keys, feedback) {
  isDefined = [];

  _.forEach(feedback, function(n, property) {
    isDefined.push(_.includes(keys, property));
  });

  return _.every(isDefined, Boolean);
};

/**
 * @description 
 * Handling filling validation
 * 
 * @param  {Object} argument feedback post object
 * @return {Boolean}          
 */
module.exports.validateFilling = function (feedback) {
  filling = [];

  _.forEach(feedback, function(n, property) {
    filling.push(!_.isEmpty(n));
  });

  return _.every(filling, Boolean);
};

/**
 * @description 
 * validate email
 * 
 * @param  {String} email 
 * @return {Boolean}          
 */
module.exports.validateEmail = function(email) {
    if(!email) {
      return false
    };
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}