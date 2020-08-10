<template>
  <section class="simple-hero">
    <div class="simple-hero__cover">
      <slot name="cover"></slot>
    </div>
    <single-column class="simple-hero__content">
        <div class="simple-hero__content">
          <slot></slot>
        </div>
    </single-column>
  </section>
</template>

<script>
  export default {
    name: 'SimpleHero',
    props: [ "background" ],
  };
</script>

<style lang="scss">
  .simple-hero {
    max-width: 100%;
    position: relative;

    @include respond-to("small and down") {
      min-height: $hero-mobile-height;
    }
    @include respond-to("medium") {
      min-height: $hero-tablet-height;
    }
    @include respond-to("large and up") {
      min-height: $hero-desktop-height;
    }

    &__content {
      height: 100%;
      display: grid;
      position: relative;
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
