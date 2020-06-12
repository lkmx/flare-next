<template>
  <div class="twin-columns">
    <div class="twins-section twins-section--start">
      <div class="twins-column twins-column--start">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="twins-section twins-section--end">
      <div class="twins-column twins-column--end">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  .twin-columns {
    width: 100%;
    display: grid;

    $twin-column-breakpoint-large: rem($column-width-large / 2);
    $twin-column-breakpoint-xlarge: rem($column-width-xlarge / 2);
    $twin-column-breakpoint-xxlarge: rem($column-width-xxlarge / 2);
    $twin-column-breakpoint-xxxlarge: rem($column-width-xxxlarge / 2);


    @include respond-to("medium and down") {
      grid-template-columns: 1fr;
    }
    @include respond-to("large and up") {
      grid-template-columns: repeat(2, 1fr);
    }

    .twins-section {
      display: grid;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .twins-column {
      $responsive-breakpoints: (
              "xxsmall": 100%,
              "xsmall": 100%,
              "small": 100%,
              "medium": 100%,
              "large": $twin-column-breakpoint-large,
              "xlarge": $twin-column-breakpoint-xlarge,
              "xxlarge": $twin-column-breakpoint-xxlarge,
              "xxxlarge": $twin-column-breakpoint-xxxlarge
      );

      @each $breakpoint, $breakpoint-width in $responsive-breakpoints {
        @include respond-to($breakpoint) {
          width: $breakpoint-width;
        }
      }

      &--start {
	      justify-self: right;
        padding-left: $columns-padding;
        padding-right: $columns-padding * $golden-ratio;
      }
      &--end {
	      justify-self: left;
        padding-left: $columns-padding * $golden-ratio;
        padding-right: $columns-padding;
      }
    }
  }
</style>
