// import { qs, qsa, $on, $delegate } from './utils';

import '../stylesheets/style.scss';
import _get from 'lodash/get';

let arrLang = {
  en: {
    home: 'Home',
    about: 'About Us',
    contact: 'Contact US',
  },

  ru: {
    header: {
      home: 'Дом',
      classes: 'График',
      workshop: 'Занятия',
      blog: 'Блог',
      contacts: 'Контакты',
    },
    subtitle: {
      classes: 'выберете свои занятия и начните тренероватся',
    },
    title: {
      trainers: 'Наши мастера',
      instagram: 'Наш Instagram',
      classesTable: 'График занятий',
      workshopList: 'Список занятий',
      blog: 'Наш Блог',
      contacts: 'Наши контакты',
    },
  },
};

let lang = localStorage.getItem('language');
changeLanguage(lang || 'ru');

$('.translate').click(function() {
  lang = $(this).attr('id');
  localStorage.setItem('language', lang);
  changeLanguage(lang);
});

function changeLanguage(lang) {
  $('.lang').each(function(index, element) {
    $(this).text(_get(arrLang[lang], $(this).attr('key')));
  });
}

// $(document).ready(function() {
//     $('header__burger').click(function(event) {
//         $('.header__burger,.header__menu').toggleClass('active');
//         $('body').toggle('lock');
//     });
// });

//
