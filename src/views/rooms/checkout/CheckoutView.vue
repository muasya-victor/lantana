<template>
  <BaseDrawer drawer_title="">

    <ElTabs type="border-card">
      <ElTabPane label="Check In" value="checkin" v-model="tab" >
       <CheckinReservation/>
      </ElTabPane>


      <ElTabPane label="Edit" value="edit" v-model="tab" >edit</ElTabPane>

      <ElTabPane label="Check Out" value="checkout" v-model="tab" >
        <CheckoutTab/>
      </ElTabPane>

    </ElTabs>
  </BaseDrawer>
</template>

<script>
import {ElTabs ,ElTabPane, ElSwitch,ElButton} from 'element-plus';
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
import CheckinReservation from "./pages/CheckinReservation.vue";
import CheckoutTab from "./pages/CheckoutTab.vue";
export default {
  name: "CheckoutView",
  components: {CheckoutTab, CheckinReservation, BaseDrawer,ElTabs ,ElTabPane},
  data(){
    return {
      tab:'edit',
    }
  },
  methods : {
    CancelReservation(){
      console.log(this.cancel)
    }
  }
}
</script>

<style scoped>

</style>