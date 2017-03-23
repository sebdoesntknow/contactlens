"use strict";

module.exports.postData = function(event, context, callback) {
  console.log({event});

  callback(null, "Success!!");
};