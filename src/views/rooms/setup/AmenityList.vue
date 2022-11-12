<template>
  <BaseDataPage :table_headings="['Name', 'Price',  'Actions']"
                object-name="guest"
                showRefresh
                fetchUrl="amenities"
                route_name="Amenity"
                show_extra_route
                extraRoute="add-amenity"
                >
    <template v-slot:default="slotProps" >
      <!--      <td>{{slotProps?.item?.id}}</td>-->
      <td>
        <NameTag>Name</NameTag>
        {{slotProps?.item?.amenities_title}}
      </td>
      <td>
        <NameTag>Price</NameTag>
        {{slotProps?.item?.price}}
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
import NameTag from "../../../components/NameTag.vue";
import EditDelete from "../../../components/EditDelete.vue";
export default {
  name: "AmenityList",
  components: {EditDelete, NameTag, TrashIcon, CleanEditIcon, BaseDataPage},
  methods : {
    editItem(id, action){
      if(action !== 'delete'){
        this.$router.push({name:'edit-amenity',params: {amenityId:id}})
      }else {
        this.$store.dispatch('deleteItem', {url: `amenities/${id}`})
      }
    }
  }
}
</script>

<style scoped>

</style>