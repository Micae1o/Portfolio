"use strict";

// Бургер меню
var burger = document.querySelector('#burger');
var menu = document.querySelector('#menu');
var body = document.body;
var links = document.querySelectorAll('.header__link');

burger.onclick = function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      burger.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('lock');
    };
  }
}; // Слайдер


var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 150,
    depth: 100,
    modifier: 1,
    slideShadows: false
  },
  autoplay: {
    delay: 3000
  }
}); // Изменение слайдера в реальном времени дико жрет оптимизацию. Урезал

document.addEventListener("DOMContentLoaded", function (event) {
  var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var viewport_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  if (viewport_width >= 1030 && viewport_width <= 1440) {
    mySwiper.destroy();
    mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      effect: 'coverflow',
      coverflowEffect: {
        stretch: 150,
        slideShadows: false
      },
      autoplay: {
        delay: 3000
      }
    });
    mySwiper.init();
  }

  if (viewport_width <= 1440 && viewport_height >= 930) {
    mySwiper.destroy();
    mySwiper = new Swiper('.swiper-container');
    mySwiper.init();
  }

  if (viewport_width <= 1030 && viewport_height <= 930) {
    mySwiper.destroy();
    mySwiper = new Swiper('.swiper-container');
    mySwiper.init();
  }
});
window.addEventListener('resize', function (event) {
  var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var viewport_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  if (viewport_width >= 1030 && viewport_width <= 1440) {
    mySwiper.destroy();
    mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      effect: 'coverflow',
      coverflowEffect: {
        stretch: 150,
        slideShadows: false
      },
      autoplay: {
        delay: 3000
      }
    });
    mySwiper.init();
  }

  if (viewport_width <= 1440 && viewport_height >= 930) {
    mySwiper.destroy();
    mySwiper = new Swiper('.swiper-container');
    mySwiper.init();
  }

  if (viewport_width <= 1030 && viewport_height <= 930) {
    mySwiper.destroy();
    mySwiper = new Swiper('.swiper-container');
    mySwiper.init();
  }
}); // Эффект написания текста

var text = document.querySelector('.typing-text');
var words = ["Front-end developer", "Верстальщик", "Vue-js разработчик"];
setTyper(text, words);

function setTyper(element, words) {
  var LETTER_TYPE_DELAY = 75;
  var WORD_STAY_DELAY = 2000;
  var DIRECTION_FORWARDS = 0;
  var DIRECTION_BACKWARDS = 1;
  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;
  var wordTypeInterval;
  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    var word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    var textToType = word.substring(0, letterIndex);
    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}

; // Изменение лого на определенной ширине

var logoSrc = document.querySelector('#logo source');
var logoImg = document.querySelector('#logo img');
document.addEventListener("DOMContentLoaded", function (event) {
  var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewport_width <= 670) {
    logoImg.setAttribute('src', 'img/logo/mobile-logo.webp');
    logoSrc.setAttribute('srcset', 'img/logo/mobile-logo.webp');
  } else {
    logoImg.setAttribute('src', 'img/logo/logo.webp');
    logoSrc.setAttribute('srcset', 'img/logo/logo.webp');
  }
});
window.addEventListener('resize', function (event) {
  var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewport_width <= 670) {
    logoImg.setAttribute('src', 'img/logo/mobile-logo.webp');
    logoSrc.setAttribute('srcset', 'img/logo/mobile-logo.webp');
  } else {
    logoImg.setAttribute('src', 'img/logo/logo.webp');
    logoSrc.setAttribute('srcset', 'img/logo/logo.webp');
  }
}); // Для изображений webp

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
; // Скиллсет анимация

function skillSet() {
  $('.bar-info').each(function () {
    var total = $(this).data("total");
    $(this).css("width", total + "%");
  });
  $('.percent').each(function () {
    var $this = $(this);
    $({
      Counter: 0
    }).animate({
      Counter: $this.text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function step() {
        $this.text(Math.ceil(this.Counter) + "%");
      }
    });
  });
}

;
var skillOptions = {
  rootMargin: '0px',
  threshold: 0.150
};

var skillCallback = function skillCallback(skillEntries, skillObserver) {
  skillEntries.forEach(function (entry) {
    if (entry.isIntersecting === true) {
      skillSet();
      skillObserver.unobserve(entry.target);
    }
  });
};

var skillObserver = new IntersectionObserver(skillCallback, skillOptions);
var skillTarget = document.querySelector('#web-skills');
skillObserver.observe(skillTarget);
var vue = document.querySelector('.vue');
window.addEventListener("resize", function (event) {
  var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewport_width <= 495) {
    vue.setAttribute('data-total', 50);
  }
});
document.addEventListener('DOMContentLoaded', function (event) {
  var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewport_width <= 495) {
    vue.setAttribute('data-total', 50);
    skillObserver.unobserve(skillTarget);
    skillSet();
  }
});

function radialPB() {
  $('.status').each(function () {
    var firstHalfAngle = 180;
    var secondHalfAngle = 0;
    var drawAngle = $(this).data("precent") / 100 * 360;

    if (drawAngle <= 180) {
      firstHalfAngle = drawAngle;
    } else {
      secondHalfAngle = drawAngle - 180;
    }

    $(this).parent().children('.clip1').children('.slice1').css({
      "transform": "rotate(" + firstHalfAngle + "deg)"
    });
    $(this).parent().children('.clip2').children('.slice2').css({
      "transform": "rotate(" + secondHalfAngle + "deg)"
    });
  });
  $('.status').each(function (i, elem) {
    var $this = $(this);
    $({
      Counter: 0
    }).animate({
      Counter: $this.data("precent")
    }, {
      duration: 1700,
      easing: 'swing',
      step: function step() {
        $this.text(Math.ceil(this.Counter) + "%");
      }
    });
  });
}

var lanOptions = {
  rootMargin: '0px',
  threshold: 0.150
};

var lanCallback = function lanCallback(lanEntries, lanObserver) {
  lanEntries.forEach(function (entry) {
    if (entry.isIntersecting === true) {
      radialPB();
      lanObserver.unobserve(entry.target);
    }
  });
};

var lanObserver = new IntersectionObserver(lanCallback, lanOptions);
var lanTarget = document.querySelector('#language-skills');
lanObserver.observe(lanTarget);
; // Плавная прокрутка

document.addEventListener("DOMContentLoaded", function (event) {
  var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewport_width <= 670) {
    $(document).ready(function () {
      $(".header").on("click", "a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault(); // получем идентификатор блока из атрибута href

        var id = $(this).attr('href'); // находим высоту, на которой расположен блок

        var top = $(id).offset().top - 100; // анимируем переход к блоку, время: 600 мс

        $('body,html').animate({
          scrollTop: top
        }, 600);
      });
      $(".person__img").on("click", "a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault(); // получем идентификатор блока из атрибута href

        var id = $(this).attr('href'); // находим высоту, на которой расположен блок

        var top = $(id).offset().top - 100; // анимируем переход к блоку, время: 600 мс

        $('body,html').animate({
          scrollTop: top
        }, 600);
      });
      $(".full-button-side").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault(); // получем идентификатор блока из атрибута href

        var id = $(this).attr('href'); // находим высоту, на которой расположен блок

        var top = $(id).offset().top - 100; // анимируем переход к блоку, время: 600 мс

        $('body,html').animate({
          scrollTop: top
        }, 600);
      });
    });
  } else {
    $(document).ready(function () {
      $(".header").on("click", "a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault(); // получем идентификатор блока из атрибута href

        var id = $(this).attr('href'); // находим высоту, на которой расположен блок

        var top = $(id).offset().top - 120; // анимируем переход к блоку, время: 600 мс

        $('body,html').animate({
          scrollTop: top
        }, 600);
      });
      $(".person__img").on("click", "a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault(); // получем идентификатор блока из атрибута href

        var id = $(this).attr('href'); // находим высоту, на которой расположен блок

        var top = $(id).offset().top - 120; // анимируем переход к блоку, время: 600 мс

        $('body,html').animate({
          scrollTop: top
        }, 600);
      });
      $(".full-button-side").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault(); // получем идентификатор блока из атрибута href

        var id = $(this).attr('href'); // находим высоту, на которой расположен блок

        var top = $(id).offset().top - 120; // анимируем переход к блоку, время: 600 мс

        $('body,html').animate({
          scrollTop: top
        }, 600);
      });
    });
  }
});
var $top = $(".scroll-top");
$top.on("click", function (event) {
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100 && $top.hasClass("default")) {
    $top.removeClass("default").addClass("active");
  } else if ($(this).scrollTop() <= 100 && $top.hasClass("active")) {
    $top.removeClass("active").addClass("default");
  }
});
;
document.addEventListener("DOMContentLoaded", function (event) {
  var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var viewport_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  if (viewport_height <= 930 || viewport_width <= 1125) {
    var $header = $(".header");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 900 && $header.hasClass("default")) {
        $header.removeClass("default").addClass("active");
      } else if ($(this).scrollTop() <= 900 && $header.hasClass("active")) {
        $header.removeClass("active").addClass("default");
      }
    });
  } else {
    var _$header = $(".header");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100 && _$header.hasClass("default")) {
        _$header.removeClass("default").addClass("active");
      } else if ($(this).scrollTop() <= 100 && _$header.hasClass("active")) {
        _$header.removeClass("active").addClass("default");
      }
    });
  }
});
window.addEventListener('resize', function (event) {
  var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var viewport_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  if (viewport_height <= 930 || viewport_width <= 1125) {
    var $header = $(".header");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 900 && $header.hasClass("default")) {
        $header.removeClass("default").addClass("active");
      } else if ($(this).scrollTop() <= 900 && $header.hasClass("active")) {
        $header.removeClass("active").addClass("default");
      }
    });
  } else {
    var _$header2 = $(".header");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100 && _$header2.hasClass("default")) {
        _$header2.removeClass("default").addClass("active");
      } else if ($(this).scrollTop() <= 100 && _$header2.hasClass("active")) {
        _$header2.removeClass("active").addClass("default");
      }
    });
  }
});