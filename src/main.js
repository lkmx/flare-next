import Page from "./core/Page.vue";
import Column from "./core/Columns.vue";
import Columns from "./core/Columns.vue";
import Block from "./core/Block.vue";

import SimpleLayout from "./layouts/SimpleLayout.vue";
import SidesLayout from "./layouts/SidesLayout.vue";

import SimpleHeader from "./components/SimpleHeader.vue";
import SimpleFooter from "./components/SimpleFooter.vue";


const components = {
  Page, Columns, Column, Block, 
  SimpleLayout, SidesLayout,
  SimpleHeader, SimpleFooter,
};

export default {
  install(Vue) {
    for (const name in components) {
      Vue.component(name, components[name]);
    }
  },
};
