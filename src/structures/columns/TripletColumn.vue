<template>
  <div class="triplets">
    <div class="triplets-section triplets-section--start">
      <div class="triplets-column triplets-column--start">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="triplets-section triplets-section--middle">
      <div class="triplets-column triplets-column--middle">
        <slot name="middle"></slot>
      </div>
    </div>
    <div class="triplets-section triplets-section--end">
      <div class="triplets-column triplets-column--end">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.triplets {
  width: 100%;
  display: grid;

  @include respond-to("medium and up") {
    $responsive-breakpoints: (
      "large": rem($breakpoint-large / 3),
      "xlarge": rem($breakpoint-xlarge / 3),
      "xxlarge": rem($breakpoint-xxlarge / 3),
      "xxxlarge": rem($breakpoint-xxxlarge / 3)
    );

    @each $breakpoint, $breakpoint-width in $responsive-breakpoints {
      @include respond-to($breakpoint) {
        grid-template-columns: 1fr $breakpoint-width 1fr;

        &-column {
          width: $breakpoint-width;

          &--start {
            justify-self: end;
          }
          &--end {
            justify-self: start;
          }
        }
      }
    }
  }

  &-section {
    display: grid;
  }
}
</style>
