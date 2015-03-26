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
  feedbackKeys = [];

  _.forEach(feedback, function(n, property) {
    feedbackKeys.push(property);
  });
  
  return _.isEqual(keys.sort(), feedbackKeys.sort());
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