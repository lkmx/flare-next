<template>
  <form @submit.prevent="submit" class="simple-form">
    <slot name="default"></slot>
    <div class="simple-form__actions">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    submit: {
      type: Function,
      required: true
    },
  }
}
</script>

<style lang="scss">
@import "./_simple-form.scss";

$error-space: 32px;

.simple-form {
  [field] {
    position: relative;
    width: 100%;
    display: grid;
    grid-row-gap: $gutter-xsmall;
    margin-bottom: rem($error-space);

    &[inline] {
      display: grid;
      grid-template-areas: $field-inline-areas;
      grid-template-columns: $field-inline-columns;
      grid-column-gap: $gutter-xsmall;
      align-self: $field-inline-align;
      align-items: center;

      label {
        grid-area: label;
      }

      input {
        width: max-content;
        grid-area: input;
      }

      [error-message] {
        grid-area: error;

        & > :empty {
          display: none;
        }
      }
    }

    label {
      color: $input-label-color;
    }

    input, select, textarea {
      width: 100%;
      border: $input-border;

      &.invalid {
        border: 1px solid red;
      }

      &:focus {
        outline: $input-focus-color auto 1px;
      }
    }

    input {
      &::placeholder {
        color: $input-placeholder-color;
      }

      &[type="text"] {
        padding: $input-padding;
      }
    }

    textarea {
      resize: none;
    }

    select {
      padding: $input-padding;
    }

    [error-message] {
      position: absolute;
      color: $input-message-error-color;
      bottom: - ($error-space - $gutter-small);

      & > :empty {
        display: none;
      }
    }
  }
}
</style>
