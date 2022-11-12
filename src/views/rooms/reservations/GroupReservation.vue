<template>
  <BaseDrawer drawer_title="Group Reservation">
    <FormKit type="form" @submit="attemptSubmit" >
      <FormKit type="select"
               placeholder="guest"
               name="guest"
               id="guest"
               v-model="guest_reservations.guest"
               validation="required"
               label="Guest">
        <option v-for="guest in guests"
                :key="guest"
                :value="guest.id">{{guest.first_name}} {{guest.middle_name}} {{guest.last_name}}</option>
      </FormKit>

      <FormKit type="select"
               placeholder="board_type"
               name="board_type"
               id="board_type"
               v-model="guest_reservations.board_type"
               validation="required"
               label="Board Type">
        <option v-for="item in board_types"
                :key="item"
                :value="item.id">{{item.board_type_title}} </option>
      </FormKit>

      <FormKit
          type="date"
          validation="required"
          label="Date In"
          v-model="guest_reservations.date_in"
      />

      <FormKit
          type="date"
          validation="required"
          label="Date Out"
          v-model="guest_reservations.date_out"
      />

      <FormKit type="select"
               name="room_type"
               id="room_type"
               v-model="filters.room_type"
               @change="fetchAvailableRooms"
               validation="required"
               label="Room Type">
        <option v-for="item in room_types"
                placeholder="room_type"
                :key="item"
                :value="item.id">{{item.type_title}} </option>
      </FormKit>

      <FormKit type="select"
               name="room"
               id="room"
               v-model="guests.room"
               label="Room">
        <option v-for="item in rooms"
                placeholder="room_type"
                :key="item"
                :value="item.id">{{item.room_number}} </option>
      </FormKit>


      <FormKit type="select"
               name="agent"
               id="agent"
               validation="required"
               v-model="important_data.wallet_id"
               label="Who is Paying">
        <option v-for="item in agents.data"
                placeholder="room_type"
                :key="item"
                :value="item.wallet.id">{{item.name}} </option>
      </FormKit>


      <button
          type="button"
          @click="toggleMore"
          class="w-full h-8 linear-flex justify-center mb-2 mt-2 border"
      >
        <IconAdd/> More
      </button>

      <FormKit
          type="text"
          v-if="show_more"
          label="Purpose of Visit"
          validation="required"
          v-model="important_data.purpose_of_visit"
      />

      <button type="button"
              class="btn_pill bg-green-600 hover:bg-green-700 mb-2 mt-2">
        New
        <IconAdd/>
      </button>




    </FormKit>
  </BaseDrawer>
</template>

<script>
import IconAdd from "../../../components/icons/IconAdd.vue";
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
import RefreshIcon from "../../../components/icons/RefreshIcon.vue";
export default {
  name: "GroupReservation",
  components: {RefreshIcon, BaseDrawer, IconAdd},
  data(){
    return{
      show_more:false,
      board_types:[],
      room_types:[],
      agents: [],
      guests:[],
      rooms:[],
      important_data: {
        wallet_id: null,
        date_in: "",
        date_out: "",
        purpose_of_visit: "",
        guest_reservations: [],
      },
      guest_reservations : {
        guest: '',
        room: '',
        board_type: '',
        date_in: "",//main
        date_out: "",//main
      },
      filters: {
        room_type:''
      }
    }
  },
  methods : {
    attemptSubmit(){

      this.important_data.date_in = this.guest_reservations.date_in
      this.important_data.date_out = this.guest_reservations.date_out

      this.important_data.guest_reservations.push(this.guest_reservations)
      let form = this.important_data
      console.log(form)

      // let payload = {
      //   value : data
      // }
      // this.$store.dispatch('postData',{url: 'reservations', value:payload})
    },
    toggleMore(){
      this.show_more= !this.show_more
    },
    fetchData () {
      this.$store.dispatch("fetchData", { url: "guest-agents" }).then(res => {
        const items = res.data
        this.agents = items
      })
      this.$store.dispatch("fetchData", { url: "room-type" }).then(res => {
        const items = res.data
        this.room_types = items
      })
      this.$store.dispatch("fetchData", { url: "board-types" }).then(res => {
        const items = res.data
        this.board_types = items
      })
      this.$store.dispatch("fetchData", { url: "guests" }).then(res => {
        const items = res.data
        this.guests = items
      })
    },
    fetchAvailableRooms () {
      // const filters = `?room_type=${this.filters.room_type}&is_clean=${true}&is_occupied=${false}&guest_reservations__check_in_date=${this.individual.date_in}&guest_reservations__check_out_date=${this.individual.date_out}`
      // const new_url = "rooms/" + filters
      // this.$store.dispatch("fetchConstant", { url: new_url }).then(res => {
      //   const items = res.data
      //   this.rooms = items
      console.log('data change', this.filters.room_type)
      // })
    },//fetch at input change


  },
  mounted() {
    this.fetchData()
  }

}
</script>

<style scoped>

</style>