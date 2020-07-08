<template>
  <header class="header">
    <no-column class="header__content">
      <a class="header__nav-toggle" @click="toggleNav" aria-label="Navigation toggle">
        <slot name="nav-toggle"></slot>
      </a>
      <g-link class="header__logo" to="/">
        <slot name="logo"></slot>
      </g-link>
      <nav class="main-nav" :class="{ 'main-nav--open': isNavOpen }">
        <div class="main-nav__primary">
          <slot name="navigation"></slot>
          <button class="main-nav__close-button" @click="toggleNav" aria-label="Close">
            <slot name="nav-toggle-close"></slot>
          </button>
        </div>
      </nav>
      <div class="header__actions">
        <slot name="actions"></slot>
      </div>
    </no-column>
  </header>
</template>

<script>
  export default {
    name: 'SimpleHeader',
    data () {
      return {
        isNavOpen: false
      }
    },
    methods: {
      toggleNav () {
        this.isNavOpen = !this.isNavOpen
      }
    }
  };
</script>

<style lang="scss">
  .header {
    position: $header-position;
    @if($header-position == fixed) {
      z-index: 10000;
      top: 0;
    }

    color: $header-text-default-color;
    width: 100%;
    height: rem($header-height);
    background-color: $header-background-color;

    &__content {
      height: 100%;
      display: grid;
      grid-template-columns: rem($header-logo-space-width) 1fr rem($header-actions-space-width);
      grid-template-rows: 100%;

      @include respond-to("medium and down") {
        grid-template-columns: rem($header-lateral-column-mobile-width) 1fr rem($header-lateral-column-mobile-width);
      }
    }

    &__nav-toggle {
      padding: 0;
      align-self: center;

      @include respond-to("large and up") {
        display: none;
      }
    }

    &__logo {
      place-self: center left;

      @include respond-to("medium and down") {
        place-self: center center;
      }

      img {
        height: rem($header-logo-height);
        width: auto;
      }
    }

    &__actions {
      place-self: center right;
    }

    .main-nav {
      &__close-button {
        width: rem($header-nav-close-toggle-size);
        height: rem($header-nav-close-toggle-size);
      }

      @include respond-to("medium and down") {
        display: none;

        &--open {
          position: fixed;
          top: 0;
          left: 0;
          display: block;
          background-color: $header-nav-default-color;
          width: $header-nav-mobile-width;
          height: 100%;
          z-index: 1;
          outline: solid;
          outline-color: black;
          outline-width: 1px;
        }

        &__primary {
          padding: $gutter-xlarge $gutter $gutter;
          display: grid;
          grid-auto-flow: row;
          grid-row-gap: rem($header-nav-spacing);
        }

        &__close-button {
          position: absolute;
          top: $gutter-xlarge / 2 - $header-nav-close-toggle-size / 2;
          right: $gutter;
        }
      }

      @include respond-to("large and up") {
        display: $header-nav-primary-desktop-display;
        grid-auto-flow: column;
        grid-template-columns: $header-nav-primary-desktop-columns;
        grid-gap: $header-nav-primary-desktop-gap;
        align-self: center;

        &__primary {
          justify-content: center;
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: repeat(auto-fit, rem($header-nav-items-width));
          grid-column-gap: rem($header-nav-spacing);
        }

        &__close-button {
          display: none;
        }
      }
    }
  }
</style>
