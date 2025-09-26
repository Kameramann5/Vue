// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-09-26',
  modules: [
    'usebootstrap',
    '@nuxt/image-edge',
    ],
app: {
head:{
  title:'test',
  // link: [
  //   {rel:'stylesheet'}
  // ]
  meta:[
    {name:'charset', content:'utf-8'}
  ]
}
},
  
    image: {
      // дефолтный провайдер — ipx
      provider: 'ipx',
      ipx: {
        // опционально можно задать кастомные пути или параметры
        dir: '~/assets/images',
        sharp: {
          // опции sharp, если нужно
        }
      }   
     }
})