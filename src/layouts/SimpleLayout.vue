<template>
  <div class="simple-layout">
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
  </div>
</template>

<style lang="scss">
  .simple-layout {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: min-content 1fr min-content;
    min-height: 100vh;
  }
</style>