<template>
  <main class="base-page">
    <slot></slot>
  </main>
</template>

<style lang="scss">
  .base-page {
    background-image: $page-background-color;
    display: grid;
    grid-auto-flow: row;
    min-height: 100%;

    @if($header-position == fixed) {
      @include respond-to("small and down") {
        margin-top: $page-mobile-header-offset;
      }
      @include respond-to("medium") {
        margin-top: $page-tablet-header-offset;
      }
      @include respond-to("large and up") {
        margin-top: $page-desktop-header-offset;
      }

      h1, h2, h3, h4, h5, h6 {
        a[id]:not([id=""]) {
          position: absolute;
          visibility: hidden;

          @if($header-position == fixed) {
            @include respond-to("small and down") {
              top: ($page-mobile-header-offset + $gutter) * -1;
            }
            @include respond-to("medium") {
              top: ($page-tablet-header-offset + $gutter) * -1;
            }
            @include respond-to("large and up") {
              top: ($page-desktop-header-offset + $gutter) * -1;
            }
          }
        }
      }
    }

  }
</style>
