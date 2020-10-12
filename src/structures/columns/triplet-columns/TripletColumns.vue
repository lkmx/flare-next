<template>
  <div class="triplets-columns column">
    <div class="triplets-columns__section">
      <div class="triplets-columns__column triplets-columns__column--start">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="triplets-columns__section">
      <div class="triplets-columns__column triplets-columns__column--middle">
        <slot name="middle"></slot>
      </div>
    </div>
    <div class="triplets-columns__section">
      <div class="triplets-columns__column triplets-columns__column--end">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.triplets-columns {
  width: 100%;
  display: grid;

  @include respond-to("small and down") {
    grid-template-columns: 1fr;

    &__column {
      padding: 0 $columns-padding;
    }
  }
  @include respond-to("medium") {
    grid-template-columns: $triplet-column-breakpoint-medium;
    justify-content: center;

    &__column {
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

        &__column {
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

  &__section {
    display: grid;
  }
}
</style>
