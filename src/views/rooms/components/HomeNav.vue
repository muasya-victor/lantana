<template>
  <div class="flex items-center gap-8 flex-wrap h-fit">
          <span class="h-9 linear-flex cursor-pointer"
                @click="toggleFilter">Filter <IconAdd/></span>

    <span v-if="filter">
            <h1 class="header ">From</h1>
            <FormKit type="date" />
          </span>
    <span v-if="filter">
            <h1 class="header ">To</h1>
          <FormKit type="date" />
          </span>

    <slot>
      <ElForm class="h-9">
        <el-form-item label="Calendar View">
          <el-switch @change="SwitchView" />
        </el-form-item>
      </ElForm>

    </slot>
    <div class="flex items-center gap-8 flex-wrap">
      <RefreshIcon class="cursor-pointer hover:text-blue-600"/>

      <span class="flex items-center gap-8 flex-wrap"
            >
        <UserIcon
            title="New Individual Reservation"
            @click="goTo('res')"/>
        <GroupUserIcon
            title="New Group Reservation"
            @click="goTo('res-group')"/>
        </span>

      <span class="flex items-center gap-2 flex-wrap cursor-pointer hover:text-blue-600"
            @click="history">
          <ClipboardIcon/>
          History
        </span>

    </div>


  </div>

</template>

<script>
import {ElSwitch,ElForm, ElFormItem} from 'element-plus';
import IconAdd from "../../../components/icons/IconAdd.vue";
import RefreshIcon from "../../../components/icons/RefreshIcon.vue";
import ClipboardIcon from "../../../components/icons/ClipboardIcon.vue";
import UserIcon from "../../../components/icons/UserIcon.vue";
import GroupUserIcon from "../../../components/icons/GroupUserIcon.vue";

export default {
  name: "HomeNav",
  components: {GroupUserIcon, UserIcon, ClipboardIcon, RefreshIcon, IconAdd,ElForm,ElFormItem,ElSwitch},
  data(){
    return {
      filter:false
    }
  },
  methods : {
    RouteTo(){
      this.$emit('RouteTo')
      // this.$router.push({name:url})
    },
    history(){
      this.$emit('history')
      // this.$router.push({name:url})
    },
    reservation(){
      this.$emit('reservation')
      // this.$router.push({name:url})
    },
    toggleFilter(){
      this.$emit('toggleFilter')
      // this.filter = !this.filter
    },
    SwitchView(){
      this.$emit('SwitchView')
    },
    goTo(url){
      this.$router.push({name:url})
    }
  }
}
</script>

<style scoped>

</style>