$(document).ready(function () {
  setMegaMenu()
  setFooterWidth()
  slideshow()
})

$(window).resize(function () {
  setMegaMenu()
  /* setFooterWidth(); */
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

        /* */

        /* */
      } else {
        if ($(this).find('ul.mega-menu__list.page-width > li').length === 2) {
          console.log('this')
          $(this).find('ul.mega-menu__list.page-width > li').css('width', '50%')
        }
      }
    }
  })
}

function setFooterWidth() {
  $('.isma-width-footer.footer__blocks-wrapper.grid >div h2').each(function () {
    let h2_width = $(this).width()
    let next_h2_width = $(this).next().width()
    if (h2_width > next_h2_width) {
      $(this)
        .next()
        .css('width', h2_width + 'px')
    } else if (h2_width < next_h2_width) {
      $(this).css('width', next_h2_width + 'px')
    }
  })
}

let listSlides = []
let currSlide = 1
let maxSlides = $('li.product__media-item.grid__item.slider__slide').length

function slideshow() {
  $('li.thumbnail-list__item.slider__slide img').each(function () {
    $(this).removeAttr('srcset')
    $(this).removeAttr('sizes')

    listSlides.push($(this).attr('src'))
    console.log('toto')
  })

  $('button.isma-slide-next').on('click', function () {
    let widthThumbnail = $('ul.thumbnail-list.list-unstyled.slider >li').width()
    console.log(currSlide)
    if (currSlide < maxSlides) {
      $(
        'li.product__media-item.grid__item.slider__slide:nth-child(' +
          currSlide +
          ')'
      ).removeClass('is-active')
      $(
        'ul.thumbnail-list.list-unstyled.slider > li:nth-child(' +
          currSlide +
          ') button'
      ).removeAttr('aria-current')
      $(
        'li.product__media-item.grid__item.slider__slide:nth-child(' +
          (currSlide + 1) +
          ')'
      ).addClass('is-active')
      $(
        'ul.thumbnail-list.list-unstyled.slider > li:nth-child(' +
          currSlide +
          1 +
          ') button'
      ).attr('aria-current')
      console.log(
        'ul.thumbnail-list.list-unstyled.slider > li:nth-child(' +
          currSlide +
          ') button'
      )
      $('ul.thumbnail-list.list-unstyled.slider').css(
        'transform',
        'translatex(-' + currSlide * widthThumbnail + 'px)'
      )
      currSlide++
    }
  })

  $('button.isma-slide-prev').on('click', function () {
    let widthThumbnail = $('ul.thumbnail-list.list-unstyled.slider >li').width()
    if (currSlide <= maxSlides && currSlide > 1) {
      $(
        'li.product__media-item.grid__item.slider__slide:nth-child(' +
          currSlide +
          ')'
      ).removeClass('is-active')
      $(
        'ul.thumbnail-list.list-unstyled.slider > li:nth-child(' +
          currSlide +
          ') button'
      ).removeAttr('aria-current')

      $(
        'li.product__media-item.grid__item.slider__slide:nth-child(' +
          (currSlide - 1) +
          ')'
      ).addClass('is-active')
      $(
        'ul.thumbnail-list.list-unstyled.slider > li:nth-child(' +
          currSlide -
          1 +
          ') button'
      ).attr('aria-current', true)
      currSlide--
      $('ul.thumbnail-list.list-unstyled.slider').css(
        'transform',
        'translatex(-' + (currSlide + 1) * widthThumbnail + 'px)'
      )
    } else if (currSlide == 1) {
      currSlide = 1
      $('ul.thumbnail-list.list-unstyled.slider').css(
        'transform',
        'translatex(0)'
      )
      $(
        'li.product__media-item.grid__item.slider__slide:last-child'
      ).removeClass('is-active')
      $('ul.thumbnail-list.list-unstyled.slider > li:last-child button').attr(
        'aria-current',
        true
      )

      $('li.product__media-item.grid__item.slider__slide:first-child').addClass(
        'is-active'
      )
      $('ul.thumbnail-list.list-unstyled.slider > li:last-first button').attr(
        'aria-current',
        true
      )
    }
    console.log(currSlide)
  })
}
