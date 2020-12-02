import Page from "../flare/structure/Page.vue";
import Column from "../flare/structure/Columns.vue";
import Columns from "../flare/structure/Columns.vue";
import Block from "../flare/structure/Block.vue";

import SimpleLayout from "../flare/layouts/SimpleLayout.vue";

import SimpleHeader from "../flare/ui/SimpleHeader.vue";
import SimpleFooter from "../flare/ui/SimpleFooter.vue";


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
