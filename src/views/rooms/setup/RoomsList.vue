<template>
  <BaseDataPage :table_headings="['Rm Number', 'Price', 'Max No of Guests', 'Actions']"
                object-name="guest"
                showRefresh
                fetchUrl="rooms"
                route_name="Room"
                show_extra_route
                extraRoute="add-room"
  >
    <template v-slot:default="slotProps" >
      <!--      <td>{{slotProps?.item?.id}}</td>-->
      <td>
        <NameTag>Room Number</NameTag>
        {{slotProps?.item?.room_number}}
      </td>
      <td>
        <NameTag>Price</NameTag>
        {{slotProps?.item?.room_price}}
      </td>
      <td>
        <NameTag>Max No Guests</NameTag>
        {{slotProps?.item?.max_number_guests}}
      </td>
      <td>
        <span class="">
          <NameTag>Actions</NameTag>
          <EditDelete
              @EditItem="editItem(slotProps?.item?.id, 'edit')"
              @DeleteItem="editItem(slotProps?.item?.id, 'delete')"
          />
        </span>


      </td>

    </template>
  </BaseDataPage>
</template>

<script>
import BaseDataPage from "../../../components/base/BaseDataPage.vue";
import CleanEditIcon from "../../../components/icons/CleanEditIcon.vue";
import TrashIcon from "../../../components/icons/TrashIcon.vue";
import NameTag from "../../../components/NameTag.vue";
import EditDelete from "../../../components/EditDelete.vue";
export default {
  name: "RoomsList",
  components: {EditDelete, NameTag, TrashIcon, CleanEditIcon, BaseDataPage},
  data(){
    return {
      room_types:null,
      type_name:''
    }
  },
  methods: {
    fetchRoomTypes(){
      let values = null
      this.$store.dispatch('fetchData',{url:'room-type'}).then(res=>{
        this.room_types = res.data
          }
      )
      return values
    },
    editItem(id, action){
      if(action !== 'delete'){
        this.$router.push({name:'edit-room',params: {roomId:id}})
      }else {
        this.$store.dispatch('deleteItem', {url: `rooms/${id}`})
      }
    }

  },
  mounted() {
    this.fetchRoomTypes()
  }
}
</script>

<style scoped>

</style>