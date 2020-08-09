<template>
  <footer class="footer">
    <slot><single-column>Footer</single-column></slot>
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
  import SingleColumn from  '../../../structures/columns/single-column/SingleColumn';

  export default {
    name: 'SimpleFooter',
    components: { SingleColumn },
  };
</script>
