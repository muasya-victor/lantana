<template>
<!--  phone view-->
  <div class="md:hidden">
    <el-drawer
        v-model="visible"
        size="80%"
        direction="btt"
        :show-close="false">

      <template #header="{close,  titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">{{drawer_title}}</h4>

        <BaseGeneralButton
            color="destructive"
            @click="Close">
          Close
          <DeleteIcon class="w-5 h-5"/>
        </BaseGeneralButton>

      </template>

      <div>
        <slot></slot>
      </div>

    </el-drawer>
  </div>

<!--  tablet view-->
  <div class="hidden md:block">
    <el-drawer
        v-model="visible"
        size="50%"
        direction="rtl"
        :show-close="false">

      <template #header="{ titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">{{drawer_title}}</h4>

        <BaseGeneralButton
            color="destructive"
            @click="Close">
              Close
          <DeleteIcon class="w-5 h-5"/>
        </BaseGeneralButton>

      </template>

      <div>
        <slot></slot>
      </div>
    </el-drawer>

  </div>
</template>

<script >
import { ElButton, ElDrawer, ElIcon } from 'element-plus'
import BaseGeneralButton from "./BaseGeneralButton.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
export default {
  name:'BaseDrawer',
  data(){
    return {
      visible:true,
    }
  },
  components: {
    BaseGeneralButton,DeleteIcon,ElButton,ElDrawer,ElIcon
  },
  methods : {
    Close(){
      console.log('close')
      this.$router.go(-1)
    }
  },
  props: {
    drawer_title: {
      type:String,
      default: 'Drawer',
    },
  }
}
</script>
