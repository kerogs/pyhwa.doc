import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PyHwa",
  description: "Small python application for reading manhwa/manhua/manga.",
  head: [['link', { rel: 'icon', href: './contents/images/pyhwa.svg' }]],
  base: '/pyhwa.doc/',
  outDir: '/docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config



    search: {
      provider: 'local'
    },







    nav: [
      { text: 'Home', link: '/' },
      { text: 'Downloads', link: 'https://github.com/kerogs/pyhwa/releases/latest' }
    ],










    sidebar: [
      {
        text: 'Quick start',
        items: [
          { text: 'Setup', link: '/start/setup' },
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Hakuneko', link: '/configuration/hakuneko' },
        ]
      }
    ],





    socialLinks: [
      { icon: 'github', link: 'https://github.com/kerogs/pyhwa' },
    ]
  }
})
