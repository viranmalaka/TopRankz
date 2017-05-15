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
      {id : 3, english :'mechanics'},
      {id : 5, english :'measurements'},
      {id : 6, english :'Light'},
      {id : 7, english :'Waves'},
      {id : 8, english :'Electronics'},
      {id : 9, english :'Electrical'}
    ]
  }),
  new Subject({
    name : 'Chemistry',
    topics : [
      {id : 1, english:'Basic'},
      {id : 2, english :'S Block'},
      {id : 3, english :'D Block'},
      {id : 4, english :'organic'},
      {id : 5, english : 'gas lows'},
      {id : 6, english : 'Reactors'},
      {id : 7, english : 'Radiation'},
      {id : 8, english : 'A'},
      {id : 9, english : 'B'}

    ]
  }),
  new Subject({
    name : 'Programming Language',
    topics : [
      {id : 1, english:'Introduction'},
      {id : 2, english :'Syntax'},
      {id : 3, english :'Name, Scope'},
      {id : 4, english :'Binding'},
      {id : 5, english : 'Semantic Analysis'},
      {id : 6, english : 'Target Machine Architecture'},
      {id : 7, english : 'Control Flow'},
      {id : 8, english : 'Data Types'},
      {id : 9, english : 'Subroutines and Control Abstraction'}
    ]
  }),
  new Subject({
    name : 'AI',
    topics : [
      {id : 1, english:'Ununiformed Search'},
      {id : 2, english :'Inform Search'},
      {id : 3, english :'CSP'},
      {id : 4, english :'Game Playing'},
      {id : 5, english : 'Logic'},
      {id : 6, english : 'First Order Logic'},
      {id : 7, english : 'Uncertainty'},
      {id : 8, english : 'Bayesian Networks'},
      {id : 9, english : 'Planning'}
    ]
  }),
  new Subject({
    name : 'Computer Security',
    topics : [
      {id : 1, english:'Web'},
      {id : 2, english :'System'},
      {id : 3, english :'Threats'},
      {id : 4, english :'Access Control'},
      {id : 5, english : 'Authorization'},
      {id : 6, english : 'ITNS CERIAS'},
      {id : 7, english : 'UNIX'},
      {id : 8, english : 'Firealls'},
      {id : 9, english : 'Ethical Hacking'}
    ]
  })
];
