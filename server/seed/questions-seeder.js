/**
 * Created by malaka on 4/22/17.
 */

var User = require('../models/user');
var Question = require('../models/question');
var Paper = require('../models/paper');

function random(start, end) {
  var range = end - start;
  var r = (Math.random() * 1000).toFixed();
  return (r % range + start);
}

var papers = [

];

var questionBody = [
  'The QuickStart seed contains the same application as the QuickStart playground. But its true purpose is to provide a solid foundation for local development. Consequently, there are many more files in the project folder on your machine, most of which you can',
  'All guides and cookbooks have at least these core files. Each file has a distinct purpose and evolves independently as the application grows.',
  "Compiles the application with the JIT compiler and bootstraps the application's main module (AppModule) to run in the browser. The JIT compiler is a reasonable choice during the development of most projects and it's the only viable choice for a sample running in a live-coding environment like Plunker. You'll learn about alternative compiling and deployment options later in the documentation.",
  "Node.js and npm are essential to modern web development with Angular and other platforms. Node powers client development and build tools. The npm package manager, itself a node application, installs JavaScript libraries.",
  "Links on almost every documentation page open completed samples in the browser. You can play with the sample code, share your changes with friends, and download and run the code on your own machine.",
  "You write Angular applications by composing HTML templates with Angularized markup, writing component classes to manage those templates, adding application logic in services, and boxing components and services in modules.",
  "While the root module may be the only module in a small application, most apps have many more feature modules, each a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.",
  "In JavaScript each file is a module and all objects defined in the file belong to that module. The module declares some objects to be public by marking them with the export key word. Other JavaScript modules use import statements to access public objects from other modules.",
  'Its easy to confuse the two systems because they share the common vocabulary of "imports" and "exports". Hang in there. The confusion yields to clarity with time and experience.',
  "Angular creates, updates, and destroys components as the user moves through the application. Your app can take action at each moment in this lifecycle through optional lifecycle hooks, like ngOnInit() declared above.",
  "In fact, HeroListComponent really is just a class. It's not a component until you tell Angular about it.",
  "The @Component decorator takes a required configuration object with the information Angular needs to create and present the component and its view",
  "Two-way data binding is an important fourth form that combines property and event binding in a single notation, using the ngModel directive. Here's an example from the HeroDetailComponent template:"
];

var answers = [
  "logging service",
  "data service",
  "message bus",
  "Yet services are fundamental to any Angular application. Components are big consumers of services.",
  "export class HeroService",
  "Services are everywhere.",
  "Component classes should be lean. ",
  "services they need.",
  "When Angular creates a component, it first asks an injector for the services that the component requires.",
  "The process of HeroService injection looks a bit like this:",
  "In general, add providers to the root module so that the same instance of a service is available everywhere.",
  "Dependency injection is wired",
  "Register providers with injectors.",
  "Change detection:",
  "After the import statements, you come to a class adorned with the @NgModule decorator.",
  "the application's lone component, which is als",
  "Only NgModule classes go in the imports array. Do not put any other kind of class in imports.",
  "Showing component properties with interpolation.",
  "You added two properties to the formerly empty component: title and myHero.",
  "More precisely, the redisplay occurs after some kind of asynchronous event related to the view, such as a keystroke, a timer completion, or a response to an HTTP request.",
  "Now run the app. It should display the title and hero name:",
  "The next few sections review some of the coding choices in the app.",
  "Showing an array property with *ngFor",
  "Notice the hero in the ngFor"
];

var tags = [ 'A',
  'form',
  'creates',
  'a',
  'cohesive,',
  'effective,',
  'and',
  'compelling',
  'data',
  'entry',
  'experience.',
  'An',
  'Angular',
  'form',
  'coordinates',
  'a',
  'set',
  'of',
  'data-bound',
  'user',
  'controls,',
  'tracks',
  'changes,',
  'validates',
  'input,',
  'and',
  'presents',
  'errors.' ]

var user = '';
function createQuestions(q, index, next) {
  if(index == papers.length){
    next(q);
  }else{
    function oneQues(i, next) {
      if (i < 20) {
        var ques = new Question({
          body: questionBody[random(0,12)],
          answers: [
            answers[random(0,23)],answers[random(0,23)],answers[random(0,23)],answers[random(0,23)]
          ],                          // {id : body}
          correct: [random(0,4)],    // array of corrected answers ids
          tags: [tags[random(0,27)], tags[random(0,27)]],                        // array of tags
          topics: [random(1,6)],                      // array of if of topics from Subject table
          paper: papers[index]._id,
          checkedBy: '58ef03f7d4aa602f58b5626e',
          difficulty : [],                     //{studentId, difficultyRate}
          comments: [],                         //{username, body, likes[], dislikes[]}
          mixOrder : true,
          questionNumber : index + 1
        });
        ques.save(function (err, newQuestions) {
          oneQues(i + 1, next);
        });
      }else{
        next();
      }
    }
    oneQues(0, function () {
      createQuestions(q,index + 1, function () {
        console.log('paper ' + index);
      })
    })
  }
}

User.find({acc_type : 'D'}, function (err, users) {
  user = users[0]._id;
  Paper.find().select('_id').exec(function (err, ids) {
    papers = ids;
    createQuestions([], 0, function (questions) {
      console.log('fuck you tmasha');
    });
  });

});

// console.log(questionBody.length);
// console.log(answers.length);
// console.log(tags.length);
