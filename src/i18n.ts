export const languages = { ru: 'RU', en: 'EN' } as const;
export type Lang = keyof typeof languages;

export const t = {
  ru: {
    games: 'Игры',
    about: 'О себе',
    myGames: 'Мои игры',
    tagline: 'Небольшие проекты для Яндекс.Игр, Android и Web.',
    empty: 'Пока пусто. Добавь первую игру.',
    allGames: '← Все игры',
    play: 'Играть',
    screenshots: 'Скриншоты',
    aboutTitle: 'О себе',
    aboutText: 'Привет! Я делаю небольшие игры и приложения. Здесь собраны мои проекты — можно поиграть на Яндекс.Играх, скачать в Google Play или запустить прямо в браузере.',
    contact: 'Связаться',
    footer: 'Все права защищены.',
  },
  en: {
    games: 'Games',
    about: 'About',
    myGames: 'My games',
    tagline: 'Small projects for Yandex Games, Android and Web.',
    empty: 'Nothing here yet. Add your first game.',
    allGames: '← All games',
    play: 'Play',
    screenshots: 'Screenshots',
    aboutTitle: 'About',
    aboutText: "Hi! I make small games and apps. This is my portfolio — play on Yandex Games, download on Google Play, or run right in the browser.",
    contact: 'Contact',
    footer: 'All rights reserved.',
  },
} as const;

export const defaultLang: Lang = 'ru';
export const siteName = 'PerkGames';