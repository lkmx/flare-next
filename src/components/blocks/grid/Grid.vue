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
    justifyItems: String,
    tabletColumns: String,
    tabletRowGap: String,
    tabletColumnGap: String,
    tabletAlignItems: String,
    tabletJustifyItems: String,
    mobileColumns: String,
    mobileRowGap: String,
    mobileColumnGap: String,
    mobileAlignItems: String,
    mobileJustifyItems: String
  },
  computed: {
    style() {
      return {
        '--columns': this.columns,
        '--column-gap': this.columnGap,
        '--row-gap': this.rowGap,
        '--align-items': this.alignItems,
        '--justify-items': this.justifyItems,
        '--tablet-columns': this.tabletColumns,
        '--tablet-column-gap': this.tabletColumnGap,
        '--tablet-row-gap': this.tabletRowGap,
        '--tablet-align-items': this.tabletAlignItems,
        '--tablet-justify-items': this.tabletJustifyItems,
        '--mobile-columns': this.mobileColumns,
        '--mobile-column-gap': this.mobileColumnGap,
        '--mobile-row-gap': this.mobileRowGap,
        '--mobile-align-items': this.mobileAlignItems,
        '--mobile-justify-items': this.mobileJustifyItems,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  display: grid;

  @include respond-to("large and up") {
    grid-template-columns: repeat(var(--columns, #{$grid-columns}), 1fr);
    grid-row-gap: var(--row-gap, #{$grid-row-gap});
    grid-column-gap: var(--column-gap, #{$grid-column-gap});
    align-items: var(--align-items, #{$grid-align-items});
    justify-items: var(--justify-items, #{$grid-justify-items});
  }
  @include respond-to("medium") {
    grid-template-columns: repeat(var(--tablet-columns, #{$grid-tablet-columns}), 1fr);
    grid-row-gap: var(--tablet-row-gap, #{$grid-tablet-row-gap});
    grid-column-gap: var(--tablet-column-gap, #{$grid-tablet-column-gap});
    align-items: var(--tablet-align-items, #{$grid-tablet-align-items});
    justify-items: var(--tablet-justify-items, #{$grid-tablet-justify-items});
  }
  @include respond-to("small and down") {
    grid-template-columns: repeat(var(--mobile-columns, #{$grid-mobile-columns}), 1fr);
    grid-row-gap: var(--mobile-row-gap, #{$grid-mobile-row-gap});
    grid-column-gap: var(--mobile-column-gap, #{$grid-mobile-column-gap});
    align-items: var(--mobile-align-items, #{$grid-mobile-align-items});
    justify-items: var(--mobile-justify-items, #{$grid-mobile-justify-items});
  }
}
</style>
