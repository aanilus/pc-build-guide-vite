import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Steeve's PC Build Guide",
  description: "How to build a PC",
  base: '/pc-build-guide-vite/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' },
      {
        text: 'Parts',
        items: [
          { text: 'Basic', link: '/basic-parts' },
          { text: 'Advanced', link: '/advanced-parts' },
        ],
      },
      { text: 'Build', link: '/build' },
      { text: 'Troubleshooting', link: '/troubleshooting' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Resources', link: '/resources' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Starting',
        collapsed: true,
        items: [
          { text: 'Get Started', link: '/get-started' },
          {
            text: 'Parts',
            collapsed: true,
            items: [
              { text: 'Basic', link: '/basic-parts' },
              { text: 'Advanced', link: '/advanced-parts' },
            ],
          },
        ]
      },
      {
        text: 'Building and TroubleShooting',
        collapsed: true,
        items: [
          { text: 'Build', link: '/build' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ]
      },
      {
        text: 'Get Help',
        collapsed: true,
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Resources', link: '/resources' },
          { text: 'Examples', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
