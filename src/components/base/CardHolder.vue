<template>
  <div class="shadow p-1 rounded w-10/12   flex flex-col gap-2
  hover:shadow-xl px-2 bg-gray-50">
   <h1 class="text-sm font-bold font-serif">{{name}}</h1>

    <div class="flex items-center gap-8 py-1 border-b">
      <span class="flex items-center gap-2">
        <BlankCalendar/>
        {{date_in}}
      </span>
      <span class="flex items-center gap-2">
      <CalendarIcon/>
      {{date_out}}
    </span>
    </div>
    <div class="flex items-center justify-between ">
      <EyeIcon />
      <EditIcon class="hover:text-blue-600 cursor-pointer"/>

      <checkin-icon v-if="status === 'pending'"
                    class="hover:text-blue-600 cursor-pointer"/>
      <CheckoutIcon v-if="status === 'active'"
                    class="hover:text-blue-600 cursor-pointer"/>


    </div>

  </div>
</template>

<script>
import BlankCalendar from "../icons/BlankCalendar.vue";
import CalendarIcon from "../icons/CalendarIcon.vue";
import EyeIcon from "../icons/EyeIcon.vue";
import EditIcon from "../icons/EditIcon.vue";
import CheckinIcon from "../icons/CheckinIcon.vue";
import CheckoutIcon from "../icons/CheckoutIcon.vue";
export default {
  name: "CardHolder",
  components: {CheckoutIcon, CheckinIcon, EditIcon, EyeIcon, CalendarIcon, BlankCalendar},
  props: {
    status:{
      type:String,
      default: 'active'
    },
    name:{
      type:String,
      default: 'reservation'
    },
    date_in:{
      type:String,
      default: 'reservation'
    },
    date_out:{
      type:String,
      default: 'reservation'
    }
  }
}
</script>

<style scoped>

</style>