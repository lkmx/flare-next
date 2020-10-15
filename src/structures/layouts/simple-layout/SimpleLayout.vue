<template>
  <div class="simple-layout">
    <simple-header>
      <template #logo><slot name="logo"></slot></template>
      <template #navigation><slot name="navigation"></slot></template>
      <template #actions><slot name="actions"></slot></template>
      <template #nav-toggle><slot name="nav-toggle"></slot></template>
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
  }
</style>
