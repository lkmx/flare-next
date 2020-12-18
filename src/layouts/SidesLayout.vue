<template>
  <div class="sides-layout">
      <slot name="left"></slot>
      <slot></slot>
      <slot name="right"></slot>
  </div>
</template>

<style lang="scss">
  .sides-layout {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: min-content 1fr min-content;
    height: 100%;
  }
</style>