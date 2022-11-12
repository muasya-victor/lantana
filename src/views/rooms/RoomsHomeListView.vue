<template>
  <div class="stacked">

    <div class="w-full " >

      <el-tabs type="border-card"  class="h-full">
        <el-tab-pane label="Active" value="active" v-model="view">
          <BasePocket class="" status="active">
            <div class="pocket">
              <CardHolder v-for="item in active_reservations"
                          :key="item"
                          status="active" :name="item.first_name + ' ' + item.last_name"
                          :date_in="item.check_in_date"
                          :date_out="item.check_out_date"
              ></CardHolder>

            </div>
          </BasePocket>
        </el-tab-pane>
        <el-tab-pane label="Pending" value="pending" v-model="view">
          <BasePocket class="" status="pending">
            <div class="pocket">
              <CardHolder v-for="item in pending_reservations"
                          :key="item"
                          status="active" :name="item.first_name + ' ' + item.last_name"
                          :date_in="item.check_in_date"
                          :date_out="item.check_out_date"
              ></CardHolder>

            </div>
          </BasePocket>
        </el-tab-pane>
      </el-tabs>


    </div>

  </div>
</template>

<script>
import RefreshIcon from "../../components/icons/RefreshIcon.vue";
import IconAdd from "../../components/icons/IconAdd.vue";
import ClipboardIcon from "../../components/icons/ClipboardIcon.vue";
import BasePocket from "../../components/base/BasePocket.vue";
import CardHolder from "../../components/base/CardHolder.vue";
import RoomsHomeCalendarView from "./RoomsHomeCalendarView.vue";
import HomeNav from "./components/HomeNav.vue";
import {ElSwitch,ElForm, ElFormItem, ElTabs ,ElTabPane} from 'element-plus';
import { ElNotification } from "element-plus"
import {Error} from "../../utils/error_success";


export default {
  name: "RoomsHomeListView",
  components: {HomeNav, RoomsHomeCalendarView, CardHolder, BasePocket, ClipboardIcon, IconAdd, RefreshIcon,
    ElSwitch,ElForm, ElFormItem,ElTabs ,ElTabPane},
  data (){
    return {
      active_reservations:[],
      pending_reservations:[],
      complete_reservations:[],
      view:'active'
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
        })
      }).catch(err=>{
        Error()
      })
    },
    RouteTo(url){
      this.$router.push({name:url})
      console.log(url)
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

<style >

.el-tabs__content {
  height: 100%;
}
.pocket {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center flex-wrap max-h-[500px] overflow-y-scroll
}

</style>