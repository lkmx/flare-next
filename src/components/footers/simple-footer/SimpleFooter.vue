<template>
  <footer class="footer">
    <slot><single-column>Footer</single-column></slot>
  </footer>
</template>

<style lang="scss">
  .footer {
    color: $footer-text-color;
    background-color: $footer-background-color;
    min-height: $footer-min-height;
    padding: $footer-vertical-padding 0;
    a:link {
      color: $footer-link-default-color;
    }
    a:hover {
      color: $footer-link-hover-color;
    }
    a:active {
      color: $footer-link-active-color;
    }
    a:visited {
      color: $footer-link-visited-color;
    }
  }
</style>


<script>
  import SingleColumn from  '../../../structures/columns/single-column/SingleColumn';

  export default {
    name: 'SimpleFooter',
    components: { SingleColumn },
  };
</script>
