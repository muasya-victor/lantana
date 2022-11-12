<template >
  <TopNavigationBar :department="sideBarFetch"/>
  <div class="md:flex ">
    <SideBar :department="sideBarFetch"/>
    <div class="w-full px-1 flex flex-col gap-3 py-1">
      <h1 class="capitalize text-sm font-bold text-gray-600 flex items-center gap-1 bg-gray-100 w-fit p-1 rounded">
        <span v-for="name in splitText($route.name)" :key="name">{{name}}</span>
      </h1>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import SideBar from "../../components/layout/SideBar.vue";
import TopNavigationBar from "../../components/layout/TopNavigationBar.vue";
export default {
  name: "DashboardView",
  components: {TopNavigationBar, SideBar},
  methods:{
    splitText(name){
      return name.split('-')
    },
  },
  props : {
    sideBarFetch:{
      type:String,
      default:'rooms'
    }

  }
}
</script>

<style scoped>

</style>