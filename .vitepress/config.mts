import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🥝 Miracle",
  description: "Подробная информация про наш сервер",
  base: "/Miracle-Wiki/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Главная', link: '/'},
      {text: 'Вики', link: '/wiki/вступление'},
      {text: 'Правила', link: '/rules'},
      {text: 'Магазин', link: 'https://miracle-mc.net/shop'}
    ],
    outline: {
      label: "На этой странице",
    },
    docFooter: {
      next: "Следующая страница",
      prev: "Предыдущая страница",
    },
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/wiki/': [
        {
          text: 'Основное',
          items: [
            { text: 'Вступление', link: '/wiki/вступление' },
            { text: 'Про сервер', link: '/wiki/про-сервер' },
            { text: 'Словарь терминов', link: '/wiki/словарь-терминов' },
            { text: 'Как зайти', link: '/wiki/как-зайти' },
            { text: 'Выбор лаунчера', link: '/wiki/лаунчер' }
          ]
        },
        {
          text: 'Игровой контент',
          items: [
            { text: 'Гайд по Litematica', link: '/wiki/лайтматика' },
            { text: 'Гайд по алкоголю', link: '/wiki/алкоголь' },
            { text: 'Кастомные крафты', link: '/wiki/крафты' },
            { text: 'Команды сервера', link: '/wiki/команды' },
            { text: 'Голосовой чат', link: '/wiki/голосовой-чат' },
            { text: 'Динамическая карта', link: '/wiki/карта' },
            { text: 'Кастомизация стоек для брони', link: '/wiki/кастомизация-стоек' },
            { text: 'Кастомные головы', link: '/wiki/головы' },
            { text: 'Репутация', link: '/wiki/репутация' },
          ]
        },
        {
          text: 'Поддержка сервера',
          items: [
              { text: 'Подписка Miracle+', link: '/wiki/miracleplus' },
              { text: 'Мониторинги', link: '/wiki/мониторинги' },
              { text: 'Политика возврата средств', link: '/wiki/возврат-средств' },
            ]
          },
      ],

      '/rules/': [
        {
          text: 'Список правил',
          items: [
            {text: 'Правила сервера', link: '/rules/'},
            {text: 'Разрешенные/запрещенные моды', link: '/rules/mods'},
          ]
        }
      ]
    },
    footer: {
      message: 'Created with love by awalki_ ❤️',
      copyright: 'Copyright © 2024 - Miracle. All Rights Reserved.',
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/2WmVke2b35' }
    ]
  }
})
