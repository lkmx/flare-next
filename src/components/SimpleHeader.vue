<template>
  <header class="simple-header">
    <column :mode="mode">
      <div class="simple-header__content">
        <slot></slot>
      </div>
    </column>
  </header>
</template>

<script>
import Columns from "../core/Columns.vue";
export default {
  components: { Columns },
  props: {
    mode: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.simple-header {
  min-height: var(--f-gutter-xl);
  height: var(--f-header-height);

  color: var(--f-header-text-color);
  background-color: var(--f-header-background-color);
  a {
    color: var(--f-header-text-color);
  }

  nav:not(.actions) {
    a {
      padding: 0 var(--f-gutter);
    }
  }
  
  .--flare {
    &-columns {
      height: 100%;
    }
    &-block {
      height: 100%;
      --f-block-content-padding: 0;
    }
  }

  &__content {
    height: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
