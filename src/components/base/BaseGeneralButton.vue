<template>
  <button
      type="button"
      class="btn"
      :class="{'primary' : color ==='primary',
     'info' : color === 'info',
     'contrast' : color === 'contrast',
     'secondary' : color === 'secondary',
     'destructive' : color === 'destructive',
      }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseGeneralButton",
  props: {
    color: {
      type: String,
      required:false,
      default:'primary',
      validator(value) {
        return ['primary','secondary','info','contrast','destructive'].includes(value)
      }
    }
  }
}
</script>

<style scoped>
    .btn {
      @apply flex items-center w-fit gap-2 justify-between md:py-1.5 py-0.5 md:px-2 px-1  mt-1 mb-1 text-sm
    }
    .primary {
      @apply bg-blue-600 text-white hover:bg-blue-700
    }
    .secondary {
      @apply bg-green-400 text-white hover:bg-green-500
    }
    .info {
      @apply bg-gray-800 text-white hover:bg-black
    }
    .contrast {
      @apply bg-gray-50 text-black border hover:bg-white
    }
    .destructive {
      @apply bg-red-600 text-white hover:bg-red-700
    }
</style>