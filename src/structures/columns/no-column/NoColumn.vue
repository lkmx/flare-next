<template>
  <div class="no-column column">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SingleColumn',
  };
</script>

<style lang="scss" scoped>
  .no-column {
    @include columns-common;
    padding-left: $columns-padding;
    padding-right: $columns-padding;
    width: 100%;

  }
</style>
