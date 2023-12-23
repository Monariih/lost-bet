/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import Vuex from 'vuex'

export function registerPlugins (app) {

  loadFonts()
  app
    .use(Vuex)
    .use(vuetify)
    .use(router)
}
