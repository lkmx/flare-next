<template>
  <div class="--flare --flare-block">
    <div class="content"><slot></slot></div>
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

  .content {
    overflow: auto;

    padding: var(--f-block-content-padding);

    p img {
      width: calc(100% + calc(var(--f-block-content-padding) * 2));
    }

    :last-child {
      margin-bottom: 0;
    }
  }

  justify-items: center;


  $breakpoints: "xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl";
  @each $breakpoint in $breakpoints {
    @include respond-to($breakpoint) {
      .content {
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
