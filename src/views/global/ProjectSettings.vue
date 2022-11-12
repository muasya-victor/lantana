<template>
  <div class="">
    <div class="flex flex-col gap-2">

      <div class="w-fit linear-flex">
        <h1 class="text-sm text-gray-800 font-semibold">Let's get started...</h1>

        <span class="rounded shadow flex items-center gap-2 p-1 cursor-pointer hover:bg-gray-50">
          <h1 class="text-sm text-gray-800 font-semibold">Show me how (help)</h1>
          <QuestionMarkIcon/>
        </span>
      </div>

      <div>
        <label>Select Option To Begin</label>
        <select class="bg-transparent w-fit rounded px-2 border py-0.5 capitalize text-sm font-semibold"
                @change="routeTo"
                v-model="activeName">
          <option value="">Select..</option>
          <option value="room-setup">Rooms Setup</option>
          <option value="restaurant-setup">Restaurant Setup</option>
          <option value="room-setup">Shop Setup</option>
          <option value="advanced">Advanced</option>
        </select>

      </div>


      <span class="capitalize font-bold">{{activeName}}</span>
<!--      <RoomSetup v-if="activeName === 'rooms'"/>-->

    </div>
  </div>
</template>

<script>
import RoomSetup from "../rooms/setup/RoomSetup.vue";
import QuestionMarkIcon from "../../components/icons/QuestionMarkIcon.vue";
export default {
  name: "ProjectSettings",
  components: {QuestionMarkIcon, RoomSetup},
  data (){
    return {
      activeName: ''
    }
  },
  methods : {
    splitText(name){
      return name.split('-')
    },
    routeTo(){
      this.$router.push({name:this.activeName})
    }
  }
}
</script>

<style >


.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}



</style>