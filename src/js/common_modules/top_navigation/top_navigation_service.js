(function() {

var app;

app = angular.module('common.module')

app.service('top.navigation.service', function() {
  var topMenu;

  topMenu = [
    {
      link: "/",
      name: "Home"
    },
    {
      link: "/news",
      name: "News"
    },
    {
      link: "/#news",
      name: "Services"
    }
  ];

  this.menuLinks = topMenu;

});

}).call(this);