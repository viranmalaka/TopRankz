/**
 * Created by malaka on 3/28/17.
 */

var School = require('../models/school');

/**
 * This function will return all the district details in the db
 * @param next
 */
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

/**
 * this function will return all school details in the db
 * @param next
 */
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

/**
 * this function will return all school of a given district
 * @param district - string
 * @param next
 */
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

