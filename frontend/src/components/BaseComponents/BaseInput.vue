<template>
  <div>
    <label v-if="label">{{label}}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  width: 95%;
  padding: 0 2.5%;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 5%;
}
div:last-of-type {
  margin-bottom: 0;
}
</style>>