<template>
  <main class="--flare --flare-page">
    <slot></slot>
  </main>
</template>

<script>
import Columns from "./Columns.vue";
import Block from "./Block.vue";
import Vue from "vue";

const ColumnsClass = Vue.extend(Columns);
const BlockClass = Vue.extend(Block);

export default {
  methods: {
    process() {
      // The template column instance is created using components but
      // no slots are used at the moment so regular HTML elements are 
      // used to avoid having to create VirtualDOM elements.
      function instanceDefaultFrame() {
        const column = new ColumnsClass();
        column.$mount();
        return column;
      }

      let column = instanceDefaultFrame();

      // The parent page
      let page = this.$el;

      // Adjusts the parent page in which the items will be manipulated
      // since, for example, <VueRemarkContent /> introduces an empty div
      if (
        this.$el.children.length == 1 &&
        this.$el.children[0].nodeName.toUpperCase() == "DIV"
      ) {
        page = this.$el.children[0];
      }
      
      for (let i = 0; i < page.children.length; i++) {
        const node = page.children[i];

        // if there's a new column starting then the open column
        // must be closed and appended to the parent page
        // ...only if the staging column has nodes
        if (node.classList.contains("--flare-frame")) {
            if( column.$el.hasChildNodes()) {
              column.process();
              page.insertBefore(column.$el, node);
              column = instanceDefaultFrame();
              i++;
            }
        } else {
            page.removeChild(node);
            column.$el.appendChild(node);
            i--;
        }
        if (column.$el.hasChildNodes() && column.$el.children[0].hasChildNodes()) {
          page.appendChild(column.$el);
        }
      }
    },
  },
  updated() {
    this.process();
  },
  mounted() {
    this.process();
  }
};
</script>

<style></style>
