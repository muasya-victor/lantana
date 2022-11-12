<template>
  <BaseDataPage :table_headings="['Name', 'Price', 'No of Guests', 'Actions']"
                object-name="guest"
                showRefresh
                fetchUrl="room-type"
                route_name="Room Type"
                show_extra_route
                extraRoute="add-room-type"
  >
    <template v-slot:default="slotProps" >
      <!--      <td>{{slotProps?.item?.id}}</td>-->
      <td>
        <NameTag>Name</NameTag>
        {{slotProps?.item?.type_title}} </td>
      <td>
        <NameTag>Price</NameTag>
        {{slotProps?.item?.price}}
      </td>
      <td>
        <NameTag>No Of Guests</NameTag>
        {{slotProps?.item?.number_guests}}
      </td>
      <td>
        <NameTag>Actions</NameTag>
        <EditDelete
            @EditItem="editItem(slotProps?.item?.id, 'edit')"
            @DeleteItem="editItem(slotProps?.item?.id, 'delete')"
        />
      </td>
    </template>
  </BaseDataPage>
</template>

<script>
import BaseDataPage from "../../../components/base/BaseDataPage.vue";
import CleanEditIcon from "../../../components/icons/CleanEditIcon.vue";
import TrashIcon from "../../../components/icons/TrashIcon.vue";
import EditDelete from "../../../components/EditDelete.vue";
import NameTag from "../../../components/NameTag.vue";
export default {
  name: "RoomTypesList",
  components: {NameTag, EditDelete, TrashIcon, CleanEditIcon, BaseDataPage},
  methods :{
    editItem(id, action){
      if(action !== 'delete'){
        this.$router.push({name:'edit-room-type',params: {roomTypeId:id}})
      }else {
        this.$store.dispatch('deleteItem', {url: `room-type/${id}`})
      }
    }
  }
}
</script>

<style scoped>

</style>