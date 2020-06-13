<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    color: $footer-text-color;
    background-color: $footer-background-color;
    min-height: $footer-min-height;
    padding: $footer-vertical-padding 0;
  }
</style>


<script>
  export default {
    name: 'SimpleFooter',
  };
</script>
