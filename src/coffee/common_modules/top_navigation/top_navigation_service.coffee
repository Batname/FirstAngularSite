"use strict"

app = angular.module('common.module')
app.service 'top.navigation.service', ->
  topMenu = [
    {
      link: '/'
      name: 'Home'
    }
    {
      link: '/news'
      name: 'News'
    }
    {
      link: '/#news'
      name: 'Services'
    }
  ]
  @menuLinks = topMenu
  return @
