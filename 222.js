$(document).ready(function () {
  setMegaMenu()
})

function setMegaMenu() {
  $('.mega-menu .mega-menu__list').each(function () {
    let navWidth = $('nav.header__inline-menu').width()
    $(this).css('max-width', navWidth + 'px')
  })
  $('.sm-width-ul li').each(function () {
    const leftPos = $(this).offset().left
    if ($(this).children('header-menu').length > 0) {
      if (
        $(this)
          .find('ul.mega-menu__list.page-width')
          .attr('class')
          .indexOf('mega-menu__list--condensed') > -1
      ) {
        $(this).find('ul.mega-menu__list.page-width').css('max-width', '100%')
        $(this)
          .find('ul.mega-menu__list.page-width li')
          .css('margin-left', leftPos)
      }
    }
  })
}
