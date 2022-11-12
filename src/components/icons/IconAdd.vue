<template>
<button
    type="button"
    class="hover:text-blue-400 cursor-pointer"
    @click="optionalRoute">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5">
    <path stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
</button>

</template>

<script>
export default {
  name: "IconAdd",
  props:{
    routeTo:{
      type:String,
      default:''
    }
  },
  methods:{
    optionalRoute(){
      if (this.routeTo != ''){
        this.$router.push({name: this.routeTo})
      }
    }
  }
}
</script>

<style scoped>

</style>