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

  @include respond-to("small and down") {
    grid-template-columns: 1fr;

    &-column {
      padding: 0 $columns-padding;
    }
  }
  @include respond-to("medium") {
    grid-template-columns: $triplet-column-breakpoint-medium;
    justify-content: center;

    &-column {
      padding: 0 $columns-padding;
    }
  }
  @include respond-to("large and up") {
    $responsive-breakpoints: (
      "large": $triplet-column-breakpoint-large,
      "xlarge": $triplet-column-breakpoint-xlarge,
      "xxlarge": $triplet-column-breakpoint-xxlarge,
      "xxxlarge": $triplet-column-breakpoint-xxxlarge
    );

    @each $breakpoint, $breakpoint-width in $responsive-breakpoints {
      @include respond-to($breakpoint) {
        grid-template-columns: 1fr $breakpoint-width 1fr;

        &-column {
          width: $breakpoint-width;
          padding: 0 $columns-padding;

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
