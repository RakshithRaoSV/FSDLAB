angular.module('portfolioApp', [])
  .controller('MainController', function($scope) {
    $scope.name = "John Doe";
    $scope.title = "Frontend Developer | Angular Specialist";
    $scope.email = "john.doe@example.com";
    $scope.phone = "+1 234 567 890";
    $scope.about = "I’m a passionate web developer with 3+ years of experience specializing in AngularJS and building responsive web applications.";

    $scope.skills = [
      "AngularJS",
      "JavaScript",
      "HTML5 & CSS3",
      "RESTful APIs",
      "Git & GitHub"
    ];

    $scope.projects = [
      {
        name: "Portfolio Website",
        description: "A responsive, single-page app built using AngularJS for showcasing personal projects."
      },
      {
        name: "Task Manager",
        description: "A simple CRUD app to manage daily tasks using AngularJS and localStorage."
      }
    ];
  });
