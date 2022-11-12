<template>
  <button
      type="button"
      class="linear-flex rounded-lg p-1 px-4 shadow w-fit
      h-8 capitalize text-sm max:h-8 font-semibold focus:bg-blue-600 focus:text-white">
    <img
        class="h-6 w-6"
        v-if="image_url !== ''"
        :src="image_url">

    <ImageIcon
        v-if="image_url === ''"

      />

    {{filter_name}}
  </button>
</template>

<script>
import ImageIcon from "../icons/ImageIcon.vue";
export default {
  name: "BaseFilterItem",
  components: {ImageIcon},
  props : {
    image_url : {
      type:String,
      default:''
    },
    filter_name : {
      type:String,
      default:'filter'
    },
  }
}
</script>

<style scoped>

</style>