<template>
  <div class="slim-column">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SingleColumn',
  };
</script>

<style lang="scss" scoped>
  .slim-column {
    @include columns-common;

    margin: 0 auto;
    $responsive-breakpoints: (
            "xxsmall":  $slim-column-width-xxsmall,
            "xsmall":   $slim-column-width-xsmall,
            "small":    $slim-column-width-small,
            "medium":   $slim-column-width-medium,
            "large":    $slim-column-width-large,
            "xlarge":   $slim-column-width-xlarge,
            "xxlarge":  $slim-column-width-xxlarge,
            "xxxlarge": $slim-column-width-xxxlarge);

    @each $breakpoint, $breakpoint-width in $responsive-breakpoints {
      @include respond-to($breakpoint) {
        width: $breakpoint-width;
      }
    }
  }
</style>
