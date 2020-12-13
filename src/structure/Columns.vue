<template>
  <section class="--flare --flare-frame --flare-columns" :class="classes" :style="style">
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import '../functions/respond-to.scss';

.--flare-columns {
  position: relative;
  display: grid;
  grid-auto-flow: row;

  $breakpoints: "xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl";

  @each $breakpoint in $breakpoints {
    @include respond-to($breakpoint) {

      &.--flare-columns--#{$breakpoint}-mode-normal {
        --f-columns-width-#{$breakpoint}:  var(--f-columns-normal-width-#{$breakpoint}); 
      }

      &.--flare-columns--#{$breakpoint}-mode-slim {
        --f-columns-width-#{$breakpoint}: calc(var(--f-columns-normal-width-#{$breakpoint}) / var(--f-columns-slim-ratio));
      }

      // Column margins are calculated first
      --f-columns-margins: calc(calc(100% - var(--f-columns-width-#{$breakpoint})) / 2);
      
      // Tries to calculate the value using pixels
      // which happens only if the --f-columns-with-X variable is set
      // otherwise the block must take 100% because the width
      // will be given by the parent grid-template-columns property
      --f-block-width-#{$breakpoint}--px: calc(var(--f-columns-width-#{$breakpoint}) / var(--f-columns-number-#{$breakpoint}));
      --f-block-width-#{$breakpoint}: var(--f-block-width-#{$breakpoint}--px, 100%);


      // For 1 columns the distribution is simple
      &.--flare-columns--#{$breakpoint}-1 {
        grid-template-columns: 1fr;
      }

      // Having 2 columns is special because the weight affects them
      &.--flare-columns--#{$breakpoint}-2 {
        --f-columns-ratio-small: calc(1 / calc(var(--f-columns-weight-ratio) + 1));
        --f-columns-ratio-big: calc(var(--f-columns-weight-ratio) / calc(var(--f-columns-weight-ratio) + 1));

        --f-columns-content-light--px: calc(var(--f-columns-width-#{$breakpoint}) * var(--f-columns-ratio-small));
        --f-columns-content-heavy--px: calc(var(--f-columns-width-#{$breakpoint}) * var(--f-columns-ratio-big));

        --f-columns-width-light--px: calc(var(--f-columns-content-light--px) + var(--f-columns-margins));
        --f-columns-width-heavy--px: calc(var(--f-columns-content-heavy--px) + var(--f-columns-margins));

        --f-columns-width-light--pct: calc(100% * var(--f-columns-ratio-small));
        --f-columns-width-heavy--pct: calc(100% * var(--f-columns-ratio-big));

        // When the weights is normal 
        &.--flare-weight--#{$breakpoint}-normal {
          grid-template-columns: 1fr 1fr;
        }

        &.--flare-weight--#{$breakpoint}-left {
          .--flare-block--#{$breakpoint}-left {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-heavy--px, 100%);
          }
          .--flare-block--#{$breakpoint}-right {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }
          grid-template-columns: var(--f-columns-width-heavy--px, var(--f-columns-width-heavy--pct)) var(--f-columns-width-light--px, var(--f-columns-width-light--pct));
        }

        &.--flare-weight--#{$breakpoint}-right {
          .--flare-block--#{$breakpoint}-left {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }
          .--flare-block--#{$breakpoint}-right {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-heavy--px, 100%);
          }
          grid-template-columns: var(--f-columns-width-light--px, var(--f-columns-width-light--pct)) var(--f-columns-width-heavy--px, var(--f-columns-width-heavy--pct));
        }
      }

      // Three columns has even more scenarios due to the combinations between left, right and middle
      // left-right combination is skipped because it just looks so ugly
      &.--flare-columns--#{$breakpoint}-3 {
        &.--flare-weight--#{$breakpoint}-normal {
          grid-template-columns: 1fr var(--f-block-width-#{$breakpoint}--px, calc(100% / var(--f-columns-number-#{$breakpoint}))) 1fr;
        }

        &.--flare-weight--#{$breakpoint}-middle {
          --f-columns-ratio-small: calc(1 / calc(var(--f-columns-weight-ratio) + 2));
          --f-columns-ratio-big: calc(var(--f-columns-weight-ratio) / calc(var(--f-columns-weight-ratio) + 2));

          --f-columns-width-light--pct: calc(100% * var(--f-columns-ratio-small));
          --f-columns-width-heavy--pct: calc(100% * var(--f-columns-ratio-big));
          
          --f-columns-content-light--px: calc(var(--f-columns-width-#{$breakpoint}) * var(--f-columns-ratio-small));
          --f-columns-content-heavy--px: calc(var(--f-columns-width-#{$breakpoint}) * var(--f-columns-ratio-big));

          --f-columns-width-light--px: calc(var(--f-columns-content-light--px) + var(--f-columns-margins));
          --f-columns-width-heavy--px: var(--f-columns-content-heavy--px);

          .--flare-block--#{$breakpoint}-left {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }
          .--flare-block--#{$breakpoint}-middle {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-heavy--px, 100%);
          }
          .--flare-block--#{$breakpoint}-right {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }

          grid-template-columns:
            var(--f-columns-width-light--px, var(--f-columns-width-light--pct))
            var(--f-columns-width-heavy--px, var(--f-columns-width-heavy--pct))
            var(--f-columns-width-light--px, var(--f-columns-width-light--pct));
        }

        &.--flare-weight--#{$breakpoint}-left-middle, &.--flare-weight--#{$breakpoint}-middle-left, 
        &.--flare-weight--#{$breakpoint}-middle-right, &.--flare-weight--#{$breakpoint}-right-middle {
          --f-columns-ratio-small: calc(1 / calc(var(--f-columns-weight-ratio) * 2 + 1));
          --f-columns-ratio-big: calc(var(--f-columns-weight-ratio) / calc(var(--f-columns-weight-ratio) * 2 + 1));

          --f-columns-width-light--pct: calc(100% * var(--f-columns-ratio-small));
          --f-columns-width-heavy--pct: calc(100% * var(--f-columns-ratio-big));

          --f-columns-content-light--px: calc(var(--f-columns-width-#{$breakpoint}) * var(--f-columns-ratio-small));
          --f-columns-content-heavy--px: calc(var(--f-columns-width-#{$breakpoint}) * var(--f-columns-ratio-big));

          --f-columns-width-light--px: calc(var(--f-columns-content-light--px) + var(--f-columns-margins));
          --f-columns-width-heavy--px: var(--f-columns-content-heavy--px);
          --f-columns-width-heavy-edge--px: calc(var(--f-columns-content-heavy--px) + var(--f-columns-margins));
        }

        &.--flare-weight--#{$breakpoint}-left-middle, &.--flare-weight--#{$breakpoint}-middle-left {
          .--flare-block--#{$breakpoint}-left {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-heavy--px, 100%);
          }
          .--flare-block--#{$breakpoint}-middle {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-heavy--px, 100%);
          }
          .--flare-block--#{$breakpoint}-right {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }

          grid-template-columns:
            var(--f-columns-width-heavy-edge--px, var(--f-columns-width-heavy--pct))
            var(--f-columns-width-heavy--px, var(--f-columns-width-heavy--pct))
            var(--f-columns-width-light--px, var(--f-columns-width-light--pct));
        }


        &.--flare-weight--#{$breakpoint}-right-middle, &.--flare-weight--#{$breakpoint}-middle-right {
          .--flare-block--#{$breakpoint}-left {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }
          .--flare-block--#{$breakpoint}-middle {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-heavy--px, 100%);
          }
          .--flare-block--#{$breakpoint}-right {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-heavy--px, 100%);
          }

          grid-template-columns:
            var(--f-columns-width-light--px, var(--f-columns-width-light--pct))
            var(--f-columns-width-heavy--px, var(--f-columns-width-heavy--pct))
            var(--f-columns-width-heavy-edge--px, var(--f-columns-width-heavy--pct));
        }

        // Single column left or right weight uses one heavy y two light ratios
        &.--flare-weight--#{$breakpoint}-left, &.--flare-weight--#{$breakpoint}-right {
          --f-columns-ratio-small: calc(1 / calc(var(--f-columns-weight-ratio) + 2));
          --f-columns-ratio-big: calc(var(--f-columns-weight-ratio) / calc(var(--f-columns-weight-ratio) + 2));

          --f-columns-width-light--pct: calc(100% * var(--f-columns-ratio-small));
          --f-columns-width-heavy--pct: calc(100% * var(--f-columns-ratio-big));

          --f-columns-content-light--px: calc(var(--f-columns-width-#{$breakpoint}) * var(--f-columns-ratio-small));
          --f-columns-content-heavy--px: calc(var(--f-columns-width-#{$breakpoint}) * var(--f-columns-ratio-big));

          --f-columns-width-light-edge--px: calc(var(--f-columns-content-light--px) + var(--f-columns-margins));
          --f-columns-width-light--px: var(--f-columns-content-light--px);
          --f-columns-width-heavy--px: calc(var(--f-columns-content-heavy--px) + var(--f-columns-margins));
        }


        &.--flare-weight--#{$breakpoint}-left {
          .--flare-block--#{$breakpoint}-left {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-heavy--px, 100%);
          }
          .--flare-block--#{$breakpoint}-middle {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }
          .--flare-block--#{$breakpoint}-right {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }

          grid-template-columns:
            var(--f-columns-width-heavy--px, var(--f-columns-width-heavy--pct))
            var(--f-columns-width-light--px, var(--f-columns-width-light--pct))
            var(--f-columns-width-light-edge--px, var(--f-columns-width-light--pct));
        }
        
        &.--flare-weight--#{$breakpoint}-right {
          .--flare-block--#{$breakpoint}-left {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }
          .--flare-block--#{$breakpoint}-middle {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-light--px, 100%);
          }
          .--flare-block--#{$breakpoint}-right {
            --f-block-width-#{$breakpoint}: var(--f-columns-content-heavy--px, 100%);
          }

          grid-template-columns:
            var(--f-columns-width-light-edge--px, var(--f-columns-width-light--pct))
            var(--f-columns-width-light--px, var(--f-columns-width-light--pct))
            var(--f-columns-width-heavy--px, var(--f-columns-width-heavy--pct));
        }

      }

      &:not(.--flare-columns--#{$breakpoint}-1):not(.--flare-columns--#{$breakpoint}-2):not(.--flare-columns--#{$breakpoint}-3) {
        &.--flare-columns--#{$breakpoint}-mode-normal, &.--flare-columns--#{$breakpoint}-mode-slim {
          --f-block-template-columns--px: repeat(calc(var(--f-columns-number-#{$breakpoint}) - 2), var(--f-block-width-#{$breakpoint}--px));
          grid-template-columns: 1fr var(--f-block-template-columns--px, calc(100% / var(--f-columns-number-#{$breakpoint}))) 1fr;
        }

        &.--flare-columns--#{$breakpoint}-mode-full {
          .--flare-block {
            --f-block-width-#{$breakpoint}: 100%;
          }
          grid-template-columns: repeat(var(--f-columns-number-#{$breakpoint}), 1fr);
        }

      }
    }
  }
}
</style>

<script>
import Block from "./Block.vue";
import Vue from "vue";

let BlockClass = Vue.extend(Block);

export default {
  // This method processes the mark up passed to the component
  // and adds the anonymous blocks wherever is necessary
  mounted() {
    this.process();
  },
  updated() {
    this.process();
  },

  methods: {
    process() {
      function instanceBlock() {
        const block = new BlockClass();
        block.$mount();
        return block.$el;
      }

      let block = instanceBlock();
      for (let i = 0; i < this.$el.children.length; i++) {
        const node = this.$el.children[i];

        if (node.classList.contains("--flare-block")) {
          if (block.children[0].children[0].hasChildNodes()) {
            this.$el.insertBefore(block, node);
            block = instanceBlock();
            i++;
          }
        } else {
          // If the element is not a block remove it and
          // append it to the current staging block
          this.$el.removeChild(node);
          block.children[0].children[0].appendChild(node);
          i--;
        }
        if (block.children[0].children[0].hasChildNodes()) {
          this.$el.appendChild(block);
        }
      }

      this.tagBlocks();
    },
    tagBlocks() {     
      for (let i = 0; i < this.$el.children.length; i++) {
        const node = this.$el.children[i];
        
        for (let breakpoint in this.numbers) {
          const colNumber = this.numbers[breakpoint];

          if(colNumber == 2 && (this.weight == "left" || this.weight == "right")) {
            //console.log(i, this.weight, breakpoint);
          }

          if(colNumber == 3 && this.weight == "middle") {
            //console.log(i, this.weight, breakpoint);
          }

          if ((i % colNumber) < colNumber / 2) {
            node.classList.add(`--flare-block--${breakpoint}-left`);
          }

          if ((i % colNumber) >=  colNumber / 2) {
            node.classList.add(`--flare-block--${breakpoint}-right`);
          }

          if (colNumber % 2 > 0 && i == Math.floor(colNumber / 2)) {
            node.classList.remove(`--flare-block--${breakpoint}-left`);
            node.classList.remove(`--flare-block--${breakpoint}-right`);
            node.classList.add(`--flare-block--${breakpoint}-middle`);
          }

          if (colNumber == 1) {
            node.classList.remove(`--flare-block--${breakpoint}-left`);
            node.classList.remove(`--flare-block--${breakpoint}-right`);
            node.classList.remove(`--flare-block--${breakpoint}-middle`);
            node.classList.add(`--flare-block--${breakpoint}-single`);
          } else {
            node.classList.remove(`--flare-block--${breakpoint}-single`);
          }

        }
      }
    },
  },

  computed: {
    classes() {
      return [

        // This could be done itearating the array but
        // explicit mode here is preferred 
        "--flare-columns--xxs-mode-" + this.modes["xxs"],
        "--flare-columns--xs-mode-" + this.modes["xs"],
        "--flare-columns--s-mode-" + this.modes["s"],
        "--flare-columns--m-mode-" + this.modes["m"],
        "--flare-columns--l-mode-" + this.modes["l"],
        "--flare-columns--xl-mode-" + this.modes["xl"],
        "--flare-columns--xxl-mode-" + this.modes["xxl"],
        "--flare-columns--xxxl-mode-" + this.modes["xxxl"],

        "--flare-columns--xxs-" + this.numbers["xxs"],
        "--flare-columns--xs-" + this.numbers["xs"],
        "--flare-columns--s-" + this.numbers["s"],
        "--flare-columns--m-" + this.numbers["m"],
        "--flare-columns--l-" + this.numbers["l"],
        "--flare-columns--xl-" + this.numbers["xl"],
        "--flare-columns--xxl-" + this.numbers["xxl"],
        "--flare-columns--xxxl-" + this.numbers["xxxl"],

        "--flare-weight--xxs-" + this.weights["xxs"],
        "--flare-weight--xs-" + this.weights["xs"],
        "--flare-weight--s-" + this.weights["s"],
        "--flare-weight--m-" + this.weights["m"],
        "--flare-weight--l-" + this.weights["l"],
        "--flare-weight--xl-" + this.weights["xl"],
        "--flare-weight--xxl-" + this.weights["xxl"],
        "--flare-weight--xxxl-" + this.weights["xxxl"],
      ]
    },
    style() {
      return {
        "--f-columns-number-xxs": this.numbers["xxs"],
        "--f-columns-number-xs": this.numbers["xs"],
        "--f-columns-number-s": this.numbers["s"],
        "--f-columns-number-m": this.numbers["m"],
        "--f-columns-number-l": this.numbers["l"],
        "--f-columns-number-xl": this.numbers["xl"],
        "--f-columns-number-xxl": this.numbers["xxl"],
        "--f-columns-number-xxxl": this.numbers["xxxl"],

      };
    },

    modes() {
      return {
        "xxs": this.modeXxs || this.modeXs || this.modeS || this.modeM || this.mode,
        "xs": this.modeXs || this.modeS || this.modeM || this.mode,
        "s": this.modeS || this.modeM || this.mode,
        "m": this.modeM || this.mode,
        "l": this.modeL || this.mode,
        "xl": this.modeXl || this.modeL || this.mode,
        "xxl": this.modeXxl || this.modeXl || this.modeL || this.mode,
        "xxxl": this.modeXxxl || this.modeXxl || this.modeXl || this.modeL || this.mode,
      }
    },

    numbers() {
      return {
        "xxs": this.numberXxs || this.numberXs || this.numberS || this.numberM || this.number,
        "xs": this.numberXs || this.numberS || this.numberM || this.number,
        "s": this.numberS || this.numberM || this.number,
        "m": this.numberM || this.number,
        "l": this.numberL || this.number,
        "xl": this.numberXl || this.numberL || this.number,
        "xxl": this.numberXxl || this.numberXl || this.numberL || this.number,
        "xxxl": this.numberXxxl || this.numberXxl || this.numberXl || this.numberL || this.number,
      }
    },

    weights() {
      return {
        "xxs": this.weightXxs || this.weightXs || this.weightS || this.weightM || this.weight,
        "xs": this.weightXs || this.weightS || this.weightM || this.weight,
        "s": this.weightS || this.weightM || this.weight,
        "m": this.weightM || this.weight,
        "l": this.weightL || this.weight,
        "xl": this.weightXl || this.weightL || this.weight,
        "xxl": this.weightXxl || this.weightXl || this.weightL || this.weight,
        "xxxl": this.weightXxxl || this.weightXxl || this.weightXl || this.weightL || this.weight,
      }
    },
  },

  name: "Columns",
  props: {
    mode: {
      type: String,
      default: "normal",
      required: false,
    },
    modeXxs: {
      type: String,
      default: null,
      required: false,
    },
    modeXs: {
      type: String,
      default: null,
      required: false,
    },
    modeS: {
      type: String,
      default: null,
      required: false,
    },
    modeM: {
      type: String,
      default: null,
      required: false,
    },
    modeL: {
      type: String,
      default: null,
      required: false,
    },
    modeXl: {
      type: String,
      default: null,
      required: false,
    },
    modeXxl: {
      type: String,
      default: null,
      required: false,
    },
    modeXxxl: {
      type: String,
      default: null,
      required: false,
    },

    number: {
      type: String,
      default: "1",
      required: false,
    },
    numberXxs: {
      type: String,
      default: null,
      required: false,
    },
    numberXs: {
      type: String,
      default: null,
      required: false,
    },
    numberS: {
      type: String,
      default: null,
      required: false,
    },
    numberM: {
      type: String,
      default: null,
      required: false,
    },
    numberL: {
      type: String,
      default: null,
      required: false,
    },
    numberXl: {
      type: String,
      default: null,
      required: false,
    },
    numberXxl: {
      type: String,
      default: null,
      required: false,
    },
    numberXxxl: {
      type: String,
      default: null,
      required: false,
    },

    // Weights
    weight: {
      type: String,
      default: "normal",
      required: false,
    },
    weightXxs: {
      type: String,
      default: null,
      required: false,
    },
    weightXs: {
      type: String,
      default: null,
      required: false,
    },
    weightS: {
      type: String,
      default: null,
      required: false,
    },
    weightM: {
      type: String,
      default: null,
      required: false,
    },
    weightL: {
      type: String,
      default: null,
      required: false,
    },
    weightXl: {
      type: String,
      default: null,
      required: false,
    },
    weightXxl: {
      type: String,
      default: null,
      required: false,
    },
    weightXxxl: {
      type: String,
      default: null,
      required: false,
    },
  },
};
</script>
