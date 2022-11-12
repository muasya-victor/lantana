<template>
  <span class="flex items-center gap-4 flex-wrap px-4">
    <UserIcon
        title="New Individual Reservation"
        @click="goTo('res')"/>
    <GroupUserIcon
        title="New Group Reservation"
        @click="goTo('res-group')"/>
  </span>
</template>

<script>
import IconAdd from "../icons/IconAdd.vue";
import UserIcon from "../icons/UserIcon.vue";
import GroupUserIcon from "../icons/GroupUserIcon.vue";
export default {
  name: "BaseActionButton",
  components: {GroupUserIcon, UserIcon, IconAdd},
  methods : {
    goTo(url){
      this.$router.push({name:url})
    }
  }
}
</script>

<style scoped>

</style>