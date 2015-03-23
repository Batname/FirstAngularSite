$(document).ready ->
  $('a[href^="#"]').click ->
    #Сохраняем значение атрибута href в переменной:
    target = $(this).attr('href')
    $('html, body').animate { scrollTop: $(target).offset().top }, 800
    false
  #navigation
  openSer = $('.openSer')
  #services
  #web angular
  $('.webWhite').click ->
    $('.maskWeb').animate({ 'width': '100%' }, 500).animate { 'left': '100%' }, 500
    $('.webCol').delay(500).queue ->
      $(this).show().dequeue()
      return
    $('.webWhite').delay(500).queue ->
      $(this).hide().dequeue()
      return
    $('.webFirst').delay(1000).animate { 'width': '100%' }, 500
    $('.webFirst .capTextCont').delay(1400).queue ->
      $(this).show().dequeue()
      return
    $('.webSecond').delay(1500).animate { 'width': '100%' }, 500
    $('.webSecond .capTextCont').delay(1900).queue ->
      $(this).show().dequeue()
      return
    return
  openSer.click ->
    $('.webSecond').animate { 'width': '0%' }, 500
    $('.webSecond .capTextCont').delay(100).queue ->
      $(this).hide().dequeue()
      return
    $('.webFirst').delay(500).animate { 'width': '0%' }, 500
    $('.webFirst .capTextCont').delay(600).queue ->
      $(this).hide().dequeue()
      return
    $('.webCol').delay(1500).queue ->
      $(this).hide().dequeue()
      return
    $('.webWhite').delay(1500).queue ->
      $(this).show().dequeue()
      return
    $('.maskWeb').delay(1000).animate({ 'left': '0%' }, 500).delay(100).animate { 'width': '0%' }, 500
    return
  #magento angular
  $('.magWhite').click ->
    $('.maskMagento').animate({ 'width': '100%' }, 500).animate { 'left': '100%' }, 500
    $('.magCol').delay(500).queue ->
      $(this).show().dequeue()
      return
    $('.magWhite').delay(500).queue ->
      $(this).hide().dequeue()
      return
    $('.magentoRight').delay(1000).animate { 'width': '100%' }, 500
    $('.magentoRight .capTextCont').delay(1400).queue ->
      $(this).show().dequeue()
      return
    $('.magentoLeft').delay(1500).animate { 'width': '100%' }, 500
    $('.magentoLeft .capTextCont').delay(1900).queue ->
      $(this).show().dequeue()
      return
    return
  openSer.click ->
    $('.magentoLeft').animate { 'width': '0%' }, 500
    $('.magentoLeft .capTextCont').delay(100).queue ->
      $(this).hide().dequeue()
      return
    $('.magentoRight').delay(500).animate { 'width': '0%' }, 500
    $('.magentoRight .capTextCont').delay(600).queue ->
      $(this).hide().dequeue()
      return
    $('.magCol').delay(1500).queue ->
      $(this).hide().dequeue()
      return
    $('.magWhite').delay(1500).queue ->
      $(this).show().dequeue()
      return
    $('.maskMagento').delay(1000).animate({ 'left': '0%' }, 500).delay(100).animate { 'width': '0%' }, 500
    return
  #angular for cms
  $('.cmsWhite').click ->
    $('.maskCms').animate({ 'width': '100%' }, 500).animate { 'right': '100%' }, 500
    $('.cmsCol').delay(500).queue ->
      $(this).show().dequeue()
      return
    $('.cmsWhite').delay(500).queue ->
      $(this).hide().dequeue()
      return
    $('.cmsFirst').delay(1000).animate { 'width': '100%' }, 500
    $('.cmsFirst .capTextCont').delay(1400).queue ->
      $(this).show().dequeue()
      return
    $('.cmsSecond').delay(1500).animate { 'width': '100%' }, 500
    $('.cmsSecond .capTextCont').delay(1900).queue ->
      $(this).show().dequeue()
      return
    return
  openSer.click ->
    $('.cmsSecond').animate { 'width': '0%' }, 500
    $('.cmsSecond .capTextCont').delay(100).queue ->
      $(this).hide().dequeue()
      return
    $('.cmsFirst').delay(500).animate { 'width': '0%' }, 500
    $('.cmsFirst .capTextCont').delay(600).queue ->
      $(this).hide().dequeue()
      return
    $('.cmsCol').delay(1500).queue ->
      $(this).hide().dequeue()
      return
    $('.cmsWhite').delay(1500).queue ->
      $(this).show().dequeue()
      return
    $('.maskCms').delay(1000).animate({ 'right': '0%' }, 500).delay(100).animate { 'width': '0%' }, 500
    return
  #expertise
  #front-end
  $('.frontWhite').click ->
    $('.maskFront').animate({ 'width': '100%' }, 500).animate { 'left': '100%' }, 500
    $('.frontCol').delay(500).queue ->
      $(this).show().dequeue()
      return
    $('.frontWhite').delay(500).queue ->
      $(this).hide().dequeue()
      return
    $('.frontFirst').delay(1000).animate { 'width': '100%' }, 500
    $('.frontFirst .capTextContExp').delay(1400).queue ->
      $(this).show().dequeue()
      return
    $('.frontSecond').delay(1500).animate { 'width': '100%' }, 500
    $('.frontSecond .capTextContExp').delay(1900).queue ->
      $(this).show().dequeue()
      return
    return
  openSer.click ->
    $('.frontSecond').animate { 'width': '0%' }, 500
    $('.frontSecond .capTextContExp').delay(100).queue ->
      $(this).hide().dequeue()
      return
    $('.frontFirst').delay(500).animate { 'width': '0%' }, 500
    $('.frontFirst .capTextContExp').delay(600).queue ->
      $(this).hide().dequeue()
      return
    $('.frontCol').delay(1500).queue ->
      $(this).hide().dequeue()
      return
    $('.frontWhite').delay(1500).queue ->
      $(this).show().dequeue()
      return
    $('.maskFront').delay(1000).animate({ 'left': '0%' }, 500).delay(100).animate { 'width': '0%' }, 500
    return
  #back-end
  $('.backWhite').click ->
    $('.maskBack').animate({ 'width': '100%' }, 500).animate { 'left': '100%' }, 500
    $('.backCol').delay(500).queue ->
      $(this).show().dequeue()
      return
    $('.backWhite').delay(500).queue ->
      $(this).hide().dequeue()
      return
    $('.backRight').delay(1000).animate { 'width': '100%' }, 500
    $('.backRight .capTextContExp').delay(1400).queue ->
      $(this).show().dequeue()
      return
    $('.backLeft').delay(1500).animate { 'width': '100%' }, 500
    $('.backLeft .capTextContExp').delay(1900).queue ->
      $(this).show().dequeue()
      return
    return
  openSer.click ->
    $('.backLeft').animate { 'width': '0%' }, 500
    $('.backLeft .capTextContExp').delay(100).queue ->
      $(this).hide().dequeue()
      return
    $('.backRight').delay(500).animate { 'width': '0%' }, 500
    $('.backRight .capTextContExp').delay(600).queue ->
      $(this).hide().dequeue()
      return
    $('.backCol').delay(1500).queue ->
      $(this).hide().dequeue()
      return
    $('.backWhite').delay(1500).queue ->
      $(this).show().dequeue()
      return
    $('.maskBack').delay(1000).animate({ 'left': '0%' }, 500).delay(100).animate { 'width': '0%' }, 500
    return
  #code design
  $('.codeWhite').click ->
    $('.maskCode').animate({ 'width': '100%' }, 500).animate { 'right': '100%' }, 500
    $('.codeCol').delay(500).queue ->
      $(this).show().dequeue()
      return
    $('.codeWhite').delay(500).queue ->
      $(this).hide().dequeue()
      return
    $('.codeFirst').delay(1000).animate { 'width': '100%' }, 500
    $('.codeFirst .capTextContExp').delay(1400).queue ->
      $(this).show().dequeue()
      return
    $('.codeSecond').delay(1500).animate { 'width': '100%' }, 500
    $('.codeSecond .capTextContExp').delay(1900).queue ->
      $(this).show().dequeue()
      return
    return
  openSer.click ->
    $('.codeSecond').animate { 'width': '0%' }, 500
    $('.codeSecond .capTextContExp').delay(100).queue ->
      $(this).hide().dequeue()
      return
    $('.codeFirst').delay(500).animate { 'width': '0%' }, 500
    $('.codeFirst .capTextContExp').delay(600).queue ->
      $(this).hide().dequeue()
      return
    $('.codeCol').delay(1500).queue ->
      $(this).hide().dequeue()
      return
    $('.codeWhite').delay(1500).queue ->
      $(this).show().dequeue()
      return
    $('.maskCode').delay(1000).animate({ 'right': '0%' }, 500).delay(100).animate { 'width': '0%' }, 500
    return