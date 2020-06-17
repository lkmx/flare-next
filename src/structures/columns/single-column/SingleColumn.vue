<template>
  <div class="single-column">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SingleColumn',
  };
</script>

<style lang="scss" scoped>
  .single-column {
    @include columns-common;
    padding-left: $columns-padding;
    padding-right: $columns-padding;

    margin: 0 auto;
    $responsive-breakpoints: (
            "xxsmall":  $column-width-xxsmall,
            "xsmall":   $column-width-xsmall,
            "small":    $column-width-small,
            "medium":   $column-width-medium,
            "large":    $column-width-large,
            "xlarge":   $column-width-xlarge,
            "xxlarge":  $column-width-xxlarge,
            "xxxlarge": $column-width-xxxlarge);

    @each $breakpoint, $breakpoint-width in $responsive-breakpoints {
      @include respond-to($breakpoint) {
        width: $breakpoint-width;
      }
    }
  }
</style>
