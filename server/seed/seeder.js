var schools = require('./school-seeder').schools;
// var subjects = require('./subject-seeder').subjects;

var seeds = {
    'schools' : schools,
    'subject' : require('./subject-seeder').subjects
    // 'question' : require('./questions-seeder').questions
};

var seed = function (arr, i, seeds) {
    //console.log(arr[i]);
    arr[i].save(function (err, res) {
        //console.log(arr[i]);
        if(i === arr.length - 1){
            console.log(i+1, seeds);
            process.exit();
        }else{
            seed(arr,i + 1, seeds);
        }
    });
};
// console.log(seeds[process.argv[2]]);
seed(seeds[process.argv[2]], 0, process.argv[2]);
