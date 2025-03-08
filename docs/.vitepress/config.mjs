import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: '/pc-build-guide-vite/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' },
      {
        text: 'Parts',
        items: [
          { text: 'Basic', link: '/basic' },
          { text: 'Advanced', link: '/advanced' },
        ],
      },
      { text: 'Build', link: '/build' },
      { text: 'Trouble', link: '/troubleshooting' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Resources', link: '/resources' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
