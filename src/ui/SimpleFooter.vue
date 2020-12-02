<template>
  <footer class="simple-footer">
    <columns :mode="mode">
      <slot></slot>
    </columns>
  </footer>
</template>

<script>
import Columns from "../structure/Columns.vue";
export default {
  components: { Columns },
  props: {
    mode: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.simple-footer {
  color: var(--f-footer-text-color);
  background-color: var(--f-footer-background-color);
  height: var(--f-footer-height);
}
</style>
