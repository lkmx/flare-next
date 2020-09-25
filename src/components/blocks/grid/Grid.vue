<template>
  <div class="grid" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  created () {
  },
  props: {
    columns: String,
    rowGap: String, 
    columnGap: String, 
    alignItems: String,
    justifyItems: String
  },
  computed: {
    style() {
      return {
        '--columns': this.columns,
        '--column-gap': this.columnGap,
        '--row-gap': this.rowGap,
        '--align-items': this.alignItems,
        '--justify-items': this.justifyItems,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(var(--columns, #{$grid-columns}), 1fr);
  grid-row-gap: var(--row-gap, #{$grid-row-gap});
  grid-column-gap: var(--column-gap, #{$grid-column-gap});
  align-items: var(--align-items, #{$grid-align-items});
  justify-items: var(--justify-items, #{$grid-justify-items});
}
</style>
