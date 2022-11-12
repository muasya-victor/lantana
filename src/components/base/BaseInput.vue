<template>
  <div class="flex flex-col gap-2 py-1">
    <label class="capitalize text-gray-700 font-semibold"> {{label}} </label>
    <input
        v-bind="$attrs"
        class="input"
        required
        :placeholder="label"
        :id="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :name="label"
    >

  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },

  }
}
</script>

<style scoped>
  .input {
    @apply h-fit outline-none capitalize border-b-2 border-gray-200 w-fit focus:outline-gray-200 focus:border-0
  }
</style>