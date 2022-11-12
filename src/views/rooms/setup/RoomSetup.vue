<template>
<div class="h-full w-full">
  <el-tabs type="border-card"
           class="h-full"
           v-model="view"
           @tab-change="tabClick">
    <el-tab-pane
        :label="route?.name"
        v-for="route in routes[0]"
        :value="route?.name"
    >
      <router-view/>
    </el-tab-pane>
  </el-tabs>

</div>
</template>

<script>
import BaseActionCard from "../../../components/base/BaseActionCard.vue";
import {ElTabs, ElTabPane} from "element-plus";
export default {
  name: "RoomSetup",
  components: {BaseActionCard,ElTabs, ElTabPane},
  data(){
    return {
      routes: [],
      view: null,
      route_name: ''
    }
  },
  methods:{
    fetchRoutes(){
      this.$router.options.routes.forEach(route=>{
        if (route.path === '/settings'){
          let links = route.children
          links.forEach(link=>{
            if(link.name === 'room-setup'){
              this.routes.push(link.children)
            }
          })
        }
      })
    },
    RouteTo(stx,name,ev){
      ev.this.$router.push({name:name})
    },
    tabClick(event){
      let r = this.view
      this.$router.push({name:this.routes[0][this.view]?.name})
    }
  },
  mounted() {
    this.fetchRoutes()
  },

}
</script>

<style>
.el-tabs__content {
  height: 100%;
}
</style>