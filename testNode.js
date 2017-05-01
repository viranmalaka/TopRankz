/**
 * Created by malaka on 4/2/17.
 */

function test(next) {
  next("asdf");
  return;
  next("werwer");
}

test(function (v) {
  console.log(v);
});
