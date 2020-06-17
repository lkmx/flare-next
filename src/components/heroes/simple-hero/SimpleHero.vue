<template>
  <section class="simple-hero">
    <single-column class="simple-hero__content">
        <slot></slot>
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

    // Background default properties for a background that uses the complete area
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @include respond-to("small and down") {
      height: $hero-mobile-height;
    }
    @include respond-to("medium") {
      height: $hero-tablet-height;
    }
    @include respond-to("large and up") {
      height: $hero-desktop-height;
    }

    &__content {
      height: 100%;
      display: grid;
      position: relative;

      &>* {
        position: absolute;
      }
    }

  }
</style>
