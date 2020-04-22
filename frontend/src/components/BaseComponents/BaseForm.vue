<template>
  <form v-on="$listeners" class="base-form" :class="formClass">
    <slot name="formFields"></slot>
    <slot name="formButtons"></slot>
  </form>
</template>

<script>
export default {
  props: {
    formClass: {
      type: String
    }
  }
};
</script>

<style>
</style>