<template>
  <div class="m-1 ring-1 ring-gray-200 p-2 bg-white">

    <router-view></router-view>

    <BaseLoader v-if="loading"></BaseLoader>


    <FullCalendar v-else v-bind:options="calendarOptions"
                  eventsSet="retrieveGuestReservations"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar, { CalendarOptions, EventApi } from '@fullcalendar/vue3'
import router from '../../router'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import BaseLoader from '../../components/base/BaseLoader.vue'
import {Error} from "../../utils/error_success";

export default defineComponent({
  name: 'RoomsHomeCalendarView',
  components: {
    BaseLoader,
    FullCalendar,

  },
  data () {
    return {
      guestReservations:[],
      calendarOptions: {
        plugins: [
          dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin
        ],
        initialEvents: [],
        editable: true,
        initialView: 'dayGridMonth',
        selectable: true,
        select: this.handleSelect,
        eventClick: this.handleEventClick,

      } as CalendarOptions,
      currentEvents: [] as EventApi[], loading: true, show_reservation_modal: true,
    }
  },
  methods: {

    retrieveGuestReservations () {
      this.loading = true
      this.$store.dispatch('fetchData', {url:'guest-reservation'}).then(resp => {
        this.guestReservations = resp.data


        this.guestReservations.forEach(guestReservation => {

          const name = `${guestReservation?.first_name} ${guestReservation?.last_name}`
          const room = `${guestReservation?.room_number}`
          const date_in = guestReservation?.check_in_date
          const date_out = guestReservation?.check_out_date
          const reservation_id = guestReservation?.id

          let color = ''
          if (guestReservation?.status === 'ACTIVE') {
            color = 'green'
          } else {
            color = 'light-blue'
          }

          if (guestReservation.status !== 'COMPLETE') {
            this.calendarOptions.initialEvents.push({
              title: ` Name : ${name} || Room:   ${room} `,
              color: color,
              id: reservation_id,
              start: date_in,
              end: date_out
            })
          }

        })

      }).catch(err => {
        Error()
      }).then(() => {
        this.loading = false
      })
    },
    handleSelect (info) {
      // this.$store.commit('setCheckInDate', new Date(info.start).toISOString())
      // this.$store.commit('setCheckoutDate', new Date(info.end).toISOString())

      router.push({
        name: 'book-room',
      })
    },
    handleEventClick (info) {
      // router.push({ name: 'reservation-details', params: { guestID: info.event.id } })
    },
    refreshData () {
      this.retrieveGuestReservations()
    }

  },

  watch: {
    $route (to, from) {
      this.loading = true
      this.refreshData()
    },
  },
  mounted () {
    this.retrieveGuestReservations()
  }
})
</script>

<style scoped>

</style>