<template>
  <a class="anchor-link" :id="id">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'AnchorLink',
    props: ['id'],
  };
</script>

<style lang="scss" scoped>
  .anchor-link {
    display: block;
    position: relative;
    visibility: hidden;
    font-size: 0;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;


    @if($header-position == fixed) {
      @include respond-to("small and down") {
        top: ($page-mobile-header-offset + $anchor-link-offset) * -1;
      }
      @include respond-to("medium") {
        top: ($page-tablet-header-offset + $anchor-link-offset) * -1;
      }
      @include respond-to("large and up") {
        top: ($page-desktop-header-offset + $anchor-link-offset) * -1;
      }
    }
  }
</style>
