<template>
<div class="w-full mx-auto md:mx-0">
  <span
  class="linear-flex font-bold">
    Name :
    {{Name}}
  </span>

  <span
  class="linear-flex font-bold">
    Logo :

    <span class="border p-2 rounded shadow bg-gray-50">
      <slot></slot>
  </span>
  </span>

</div>
</template>

<script>
import EditDelete from "../../../components/EditDelete.vue";
export default {
  name: "ProjectCard",
  components: {EditDelete},
  data(){
    return {
    }
  },
  methods : {
    routeTo(url){
      this.$router.push({name:url})
    },

  },
  props: {
    Name:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>

</style>