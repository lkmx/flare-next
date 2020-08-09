<template>
  <div class="simple-layout">
    <simple-header>
      <slot name="header"></slot>
    </simple-header>
    <slot></slot>
    <simple-footer>
      <slot name="footer"></slot>
    </simple-footer>
  </div>
</template>

<script>
  export default {
    name: 'SimpleLayout',
  };
</script>

<style lang="scss" scoped>
  .simple-layout {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    min-height: 100%;
    height: 100%;
  }
</style>
