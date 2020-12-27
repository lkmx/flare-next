<template>
  <div class="--flare --flare-block">
    <div class="content"><div class="box"><slot></slot></div></div>
  </div>
</template>

<script>
export default {
  name: "Block",
};
</script>

<style lang="scss">
@import '../functions/respond-to.scss';

.--flare-block {
  width: 100%;
  display: grid;

  .box {
    padding: var(--f-block-default-padding);
    max-width: 100%;
    img {
      max-width: 100%;
    }
    &>:last-child {
      margin-bottom: 0;
    }
  }

  justify-items: center;


  $breakpoints: "xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl";
  @each $breakpoint in $breakpoints {
    @include respond-to($breakpoint) {
      .content {
        overflow: auto;
        width: var(--f-block-width-#{$breakpoint});
        max-width: 100%;
      }
      &--#{$breakpoint}-left {
        justify-items: end;
      }
      &--#{$breakpoint}-right {
        justify-items: start;
      }
    }
  }
}
</style>
