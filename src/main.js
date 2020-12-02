import Page from "./structure/Page.vue";
import Column from "./structure/Columns.vue";
import Columns from "./structure/Columns.vue";
import Block from "./structure/Block.vue";

import SimpleLayout from "./layouts/SimpleLayout.vue";

import SimpleHeader from "./ui/SimpleHeader.vue";
import SimpleFooter from "./ui/SimpleFooter.vue";


const components = {
  Page, Columns, Column, Block, 
  SimpleLayout,
  SimpleHeader, SimpleFooter,
};

export default {
  install(Vue) {
    for (const name in components) {
      Vue.component(name, components[name]);
    }
  },
};
