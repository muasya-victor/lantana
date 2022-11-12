<template>
  <div class="stacked">
    <HomeNav
    @reservation="RouteTo('res')"
    @history="RouteTo('reservations')"
    >
      <ElForm class="h-9">
        <el-form-item label="Calendar View">
          <el-switch  v-model="calendar_view"/>
        </el-form-item>
      </ElForm>
    </HomeNav>



    <RoomsHomeListView v-if="calendar_view === false"/>


    <RoomsHomeCalendarView v-if="calendar_view"/>

    <router-view/>
  </div>
</template>

<script>
import RefreshIcon from "../../components/icons/RefreshIcon.vue";
import IconAdd from "../../components/icons/IconAdd.vue";
import ClipboardIcon from "../../components/icons/ClipboardIcon.vue";
import BasePocket from "../../components/base/BasePocket.vue";
import CardHolder from "../../components/base/CardHolder.vue";
import RoomsHomeCalendarView from "./RoomsHomeCalendarView.vue";
import RoomsHomeListView from "./RoomsHomeListView.vue";
import {ElSwitch,ElForm, ElFormItem} from 'element-plus';
import HomeNav from "./components/HomeNav.vue";
import {Error} from "../../utils/error_success";
export default {
  name: "RoomsHome",
  components: {
    HomeNav, RoomsHomeListView, RoomsHomeCalendarView, CardHolder, BasePocket,
    ClipboardIcon, IconAdd, RefreshIcon,ElForm, ElFormItem,ElSwitch},
  data (){
    return {
      active_reservations:[],
      pending_reservations:[],
      complete_reservations:[],
      calendar_view:false,
      filter:false

    }
  },
  methods : {
    fetchData(){
      this.$store.dispatch('fetchData',{url:'guest-reservation'}).then(res=>{
        res.data.forEach(reservation=>{
          if(reservation.status === 'ACTIVE'||reservation.status === 'active' || reservation.status === 'Active'){
            this.active_reservations.push(reservation)
          }else if (reservation.status === 'PENDING'||reservation.status === 'pending' || reservation.status === 'Pending'){
            this.pending_reservations.push(reservation)
          }else{
            this.complete_reservations.push(reservation)
          }

          // console.log('pending', this.pending_reservations)
          // console.log('active', this.active_reservations)
          // console.log('complete', this.complete_reservations)
        })
        console.log(res)
      }).catch(err=>{
        Error()
      })
    },
    RouteTo(url){
      this.$router.push({name:url})
    },
    toggleFilter(){
      this.filter = !this.filter
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>

</style>