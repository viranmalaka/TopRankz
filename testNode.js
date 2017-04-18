/**
 * Created by malaka on 4/2/17.
 */

var obj2 = {
  test : "asdfasdfasdfasdf"
}

var obj = {
  test : 'test',
  print : function (val) {
    console.log(this.test + " " + val);
  }.bind(obj2)
};


obj.print('asdf');
