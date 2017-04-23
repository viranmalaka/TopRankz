/**
 * Created by malaka on 4/2/17.
 */

function random(start, end) {
  var range = end - start;
  var r = (Math.random() * 1000).toFixed();
  return (r % range + start);
}


console.log(random(3,30));
