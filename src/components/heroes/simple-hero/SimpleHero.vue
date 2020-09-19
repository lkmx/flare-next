<template>
  <section class="simple-hero">
    <div class="simple-hero__cover">
      <slot name="cover"></slot>
    </div>
    <single-column class="simple-hero__column">
        <div class="simple-hero__container">
          <div class="simple-hero__content">
            <slot></slot>
          </div>
        </div>
    </single-column>
  </section>
</template>

<script>
  export default {
    name: 'SimpleHero',
  };
</script>

<style lang="scss">
  .simple-hero {
    max-width: 100%;
    position: relative;

    &, &__column, &__container {
      @include respond-to("small and down") {
        min-height: $hero-mobile-height;
      }
      @include respond-to("medium") {
        min-height: $hero-tablet-height;
      }
      @include respond-to("large and up") {
        min-height: $hero-desktop-height;
      }
    }

    &__container {
      position: relative;
      display: grid;
      place-content: $hero-content-place;
    }

    &__content {
      display: block;
      @include respond-to("small and down") {
        width: $hero-content-mobile-width;
      }
      @include respond-to("medium") {
        width: $hero-content-tablet-width;
      }
      @include respond-to("large and up") {
        width: $hero-content-desktop-width;
      }
      &>h1, &>h2, &>h3 {
        margin-top: 0;
      } 
    }

    &__cover {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        object-fit: cover;
        @include respond-to("small and down") {
          height: $hero-desktop-height;
        }
        @include respond-to("medium") {
          height: $hero-desktop-height;
        }
        @include respond-to("large and up") {
          height: $hero-desktop-height;
        }
      }
    }

  }
</style>
