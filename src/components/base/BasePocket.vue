<template>
  <div class="shadow w-11/12  rounded p-1 stacked max-h-screen ">
    <div class="w-full stacked">
      <div class="w-full stacked sticky">
        <div class="flex items-center gap-2">
          <h1 class="header bg-green-200 w-fit p-1 rounded text-green-800"
              v-if="status==='active'">
            Checked In
          </h1>

          <h1 class="header bg-orange-200 w-fit p-1 rounded text-orange-800"
              v-if="status==='pending'">
            Pending Ckeckin
          </h1>

          <BaseActionButton/>

        </div>
        <div class=" flex items-center w-full justify-between border-b py-1">
          <input
              v-model="searchTerm"
              aria-label="Search"
              class="w-fit px-2 text-sm font-bold text-black border h-8
             border-science-blue rounded form-input"
              placeholder="Search"
              type="text"
              @focus="indexMyItems"
              @keyup="searchLoadedData"
          />

          <div></div>

        </div>
      </div>
<!--      header-->

      <slot class=""></slot>
<!--      body-->
    </div>
  </div>
</template>

<script>
import BaseActionButton from "./BaseActionButton.vue";
export default {
  name: "BasePocket",
  components: {BaseActionButton},
  data (){
    return {
      searchTerm: ''
    }
  },
  methods : {
    indexMyItems(){

    },
    searchLoadedData(){

    },
  },
  props:{
    status: {
      type:String,
      default:'active'
    }
  }
}
</script>

<style scoped>

</style>