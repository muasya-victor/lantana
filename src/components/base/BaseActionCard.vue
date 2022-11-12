<template>
  <div class="shadow p-1 rounded
  bg-gray-50
  hover:shadow-xl flex flex-col gap-2 px-2 cursor-pointer">
<!--    icon   Name -->
    <slot class="flex flex-wrap gap-2 items-center"></slot>
<!--    records-->
    <div class="flex gap-2 items-center text-sm">
      <span class="font-bold"> Navigate </span>
      <RightArrow/>
    </div>

  </div>
</template>

<script>
import RightArrow from "../icons/RightArrow.vue";
export default {
  name: "BaseActionCard",
  components: {RightArrow}
}
</script>

<style scoped>

</style>