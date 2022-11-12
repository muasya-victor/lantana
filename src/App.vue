<template>
  <div>
    <RouterView/>
  </div>

</template>

<script>
  import DashboardView from "./views/dashboard/DashboardView.vue";
  import { mapGetters } from "vuex"


  import store from "./store";
export default {
    components: {DashboardView},
    data (){
      return {

      }
    },
  methods: {
  },
  computed : {
    ...mapGetters(['getRooms'])
  },
  mounted() {
      // this.fetchData()
  }
}
</script>

<style >
 @import "assets/main.css";

</style>
