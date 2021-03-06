$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'ChowNow Discover',
      tag: 'FOOD ORDERING PLATFORM.',
      detail:
        'ChowNow Discover is a platform that lets customers discover new local restaurants and provides business owners with tools to convert first time orders into lifelong diners.',
      link: 'https://eat.chownow.com/'
    },
    health: {
      title: 'Health Care',
      tag: 'Balance Body & Mind',
      detail:
        'Health Care is a  online health maintenance system and people how to learn hear body festinese relax mind with youga manu other way.',
      link: 'http://mahthir.me/demo/Health/'
    },
    beyond: {
      title: 'Beyond Blinds',
      tag: 'Furniture & interior design.',
      detail:
        'Carefully-chosen raw material, environment-friendly business practice and customer-centric approach is what made Beyond Blinds Furniture & interior design a beloved brand at home and abroad. ',
      link: 'http://mahthir.me/demo/Byoned'
    },
    esite: {
      title: 'E-Commerce Website',
      tag: 'Online Stor.',
      detail:
        'online marketplace to serve customers with the best quality product .Online shop is selling Variety of Consumer electronics, Home appliance, Kitchen appliance, Office Stationary, latest smart phones, Camera, Computing & accessories and fashionable products like clothes, cosmetics, shoes, makeup, Grocery items and more',
      link: 'http://mahthir.me/Chaldal/'
    },
    mail: {
      title: 'Mali Project',
      tag: 'Mail Project demo project.',
      detail:
        'Get  designers Established, Green Peak Holdings Ltd. (GPHL) is a new generation Real Estate Developer in Bangladesh. ',
        link: 'http://mahthir.me/demo/Mail%20Project/'
    },
    powur: {
      title: 'Powur.com',
      tag: 'CONSUMER POWERED MARKETING.',
      detail:
        'Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.',
      link: 'http://www.powur.com/with/42'
    },
    mystand: {
      title: 'Mail Project',
      tag: 'CROWD-FUNDED CHARITY.',
      detail:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
        link: 'http://mahthir.me/demo/Mail%20Project/'
    },
    never: {
      title: 'NeverSurrender',
      tag: 'ALS AWARENESS.',
      detail:
        'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
    },
    tea: {
      title: 'ROBINSON TEA',
      tag: 'Each tea is carefully blended.',
      detail:
        'Each tea purchase comes with orgnically and ethically grow loose theleaf tea, carefully blended to create the perfect cup.',
        link: 'http://mahthir.me/demo/Tea/'

      }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
