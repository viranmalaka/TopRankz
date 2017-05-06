/**
 * Created by malaka on 3/28/17.
 */

var School = require('../models/school');

module.exports.getAllDistricts = function (next) {
  // call find method in the school collection to get only districts
  School.find().distinct('district').exec(function (err, results) {
    if(err){              // handle database reading errors
      console.log(err);   // log the errors
      throw err;
    }
    next(results);            // return with the results
  });
};

module.exports.getAllSchools = function (next) {
  // call find method in school collection to get names
  School.find(function (err, results) {
    if(err){              // handle database reading errors
      console.log(err);   // log the errors
      throw err;
    }else{
      next(results);          // return with the results
    }
  })
};

module.exports.getAllSchoolsByDistricts = function (district, next) {
  // call find method in school collection to get all school names for a district
  School.find({district : district}).exec(function (err, results) {
    if(err){
      console.log(err);
      throw err;
    }else{
      next(results);
    }
  })
};

