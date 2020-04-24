<template>
  <div class="base-profile" :class="profileClass">
    <slot name="profileHeader"></slot>
    <slot name="tabMenu"></slot>
    <slot name="tabList"></slot>
  </div>
</template>

<script>
export default {
  props: {
    profileClass: {
      type: String
    }
  }
};
</script>

<style>
</style>