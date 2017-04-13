/**
 * Created by malaka on 4/2/17.
 */

var Subject = require('../models/subject');

module.exports.subjects = [
  new Subject({
    name : 'Physics',
    topics : [
      {id : 1, english :'heat'},
      {id : 2, english :'radiation'},
      {id : 3, english :'mechenics'}]
  }),
  new Subject({
    name : 'Chemistry',
    topics : [
      {id : 1, english:'Basic'},
      {id : 2, english :'S Block'},
      {id : 3, english :'D Block'},
      {id : 4, english :'organic'}]
  })
];
