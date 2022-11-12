<template>
  <div class="stacked">
    <el-switch v-model="status" active-text="Check In" />


    <el-popconfirm
        confirm-button-text="Yes"
        cancel-button-text="No"
        icon-color="#626AEF"
        title="Are you sure to delete this?"
        @confirm="ConfirmReservation"
        @cancel="CancelReservation"
    >
      <template #reference>
<!--        <el-switch v-model="cancel"-->
<!--                   @change="CancelReservation"-->
<!--                   active-text="Cancel Reservation"/>-->
        <div class="w-fit">
          <el-button>Cancel Reservation</el-button>
        </div>
      </template>
    </el-popconfirm>
  </div>
</template>

<script>
import { Check, Close,InfoFilled } from '@element-plus/icons-vue'
import {ElSwitch,ElButton,ElPopconfirm} from "element-plus";

export default {
  name: "CheckinReservation",
  components : {Check, Close,InfoFilled,ElSwitch,ElButton,ElPopconfirm},
  data (){
    return{
      status: false,
      cancel: false
    }
  },
  methods : {
    CancelReservation(){
      console.log(this.cancel)
    },
    ConfirmReservation(){
      this.cancel =!this.cancel
      this.CancelReservation()
    }
  }
}
</script>

<style scoped>

</style>