import Vue from 'vue'
import Vuetify from 'vuetify/lib'
//import LRU from 'lru-cache'
import 'vuetify/src/stylus/app.styl'

//const themeCache = new LRU({
//  max: 10,
//  maxAge: 1000 * 60 * 60 // 1 hour
//})

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#54A0FF',
    secondary: '#fff',
    accent: '#C8D6E5',
    error: '#ee5253'
  },
  options: {
    //themeCache,
    customProperties: true,
    minifyTheme: function (css) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\s|\r\n|\r|\n]/g, '')
        : css
    },
  },
   
})
