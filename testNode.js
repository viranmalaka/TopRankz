/**
 * Created by malaka on 4/2/17.
 */

var x = new Date();

setTimeout(function () {
  console.log(x);
  var y = new Date();
  console.log(y+4000);
  console.log(y - x);
},2000);
