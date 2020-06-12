<template>
  <div class="no-column">
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
    
    width: 100%;

  }
</style>
