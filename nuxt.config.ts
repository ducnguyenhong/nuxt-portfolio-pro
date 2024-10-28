// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@pinia/nuxt', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/image'],
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiDataCenter: process.env.API_DATA_CENTER
    }
  },
  site: {
    url: 'https://nguyenhongduc.net',
    name: 'Nguyễn Hồng Đức - Portfolio | Trang thông tin cá nhân của Nguyễn Hồng Đức'
  },
  robots: {
    allow: '/',
    sitemap: 'https://nguyenhongduc.net/sitemap.xml',
    groups: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },
  ssr: true,
  devServer: {
    port: 7000,
    host: '0.0.0.0' // Lắng nghe trên tất cả các địa chỉ IPv4
  }
});
