import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PyHwa",
  description: "Small python application for reading manhwa/manhua/manga.",
  head: [['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/kerogs/pyhwa.doc/be3d55c2c78745952b367aa0b366fc190252fd92/contents/images/pyhwa.svg' }]],
  base: '/pyhwa.doc/',
  outDir: '/docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config



    search: {
      provider: 'local'
    },







    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: 'https://github.com/kerogs/pyhwa/releases/latest' }
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
          { text: 'Server', link: '/configurations/server' },
          { text: 'Security', link: '/configurations/security' },
          { text: 'Metadata', link: '/configurations/metadata' },
          { text: 'Path', link: '/configurations/path' },
          { text: 'Logs', link: '/configurations/logs' },
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Hakuneko', link: '/integrations/hakuneko' },
          { text: 'Mangadex', link: '/integrations/mangadex' },
          { text: 'AniList', link: '/integrations/anilist' },
        ]
      }
    ],





    socialLinks: [
      { icon: 'github', link: 'https://github.com/kerogs/pyhwa' },
    ]
  }
})
