<template>
  <div class="stacked">
    <p class="text-xs text-orange-300 italic">Checkout only available with complete payment</p>

    <ElTabs type="border-card">
      <ElTabPane label="Extra Charges" value="charges" v-model="tab" >
        charges
      </ElTabPane>

      <ElTabPane label="Amenities" value="amenities" v-model="tab" >Amenities</ElTabPane>

    </ElTabs>

    <div class="linear-flex font-bold text-sm">
      Total : 6,000
      <span class="bg-green-300 text-green-500 p-0.5 rounded">Cleared</span>
      <span class="bg-red-300 text-red-500 p-0.5 rounded">Not Cleared</span>
    </div>

    <div class="w-fit">
      <el-popover placement="right" :width="400" trigger="click">
        <template #reference>
          <BaseGeneralButton>Checkout</BaseGeneralButton>
        </template>
        <div class="stacked">
          <FormKit type="form">
            <FormKit
                type="date"
                label="Checkout Date"
                validation="required"
            />
          </FormKit>


        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import {ElTabs ,ElTabPane,ElButton,ElPopover} from 'element-plus';
import BaseGeneralButton from "../../../../components/base/BaseGeneralButton.vue";

export default {
  name: "CheckoutTab",
  components:{BaseGeneralButton, ElTabs ,ElTabPane,ElButton,ElPopover},
  data(){
    return {
      tab:''
    }
  }
}
</script>

<style scoped>

</style>