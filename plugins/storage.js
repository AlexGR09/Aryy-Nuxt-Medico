import Vue from 'vue';
import { createStorage } from 'nuxt-universal-storage';

const storage = createStorage({
  // Configuración opcional
  // ...
});

Vue.use(storage);