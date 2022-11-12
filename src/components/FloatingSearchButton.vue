<template>
    <div class="w-12 h-12  z-50 rounded-full flex  hover:bg-blue-50 cursor-pointer
  items-center justify-center shadow bg-blue-100"
    v-if="showSearch">
      <!--    tablet-->
      <span class="hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </span>
      <!--      mobile-->
      <span class="md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
     </span>

      <IconCut class="hover:text-blue" @click="toggleSearch"/>

    </div>

</template>

<script>
import IconCut from "./icons/IconCut.vue";
export default {
  name: "FloatingSearchButton",
  components: {IconCut},data(){
    return{
      showSearch:true,
    }
  },
  methods: {
    toggleSearch(){
      this.showSearch = !this.showSearch
    }
  }
}
</script>

<style scoped>

</style>