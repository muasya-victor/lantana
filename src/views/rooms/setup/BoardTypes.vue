<template>
  <BaseDataPage :table_headings="['Name', 'Price',  'Actions']"
                object-name="guest"
                showRefresh
                fetchUrl="board-types"
                route_name="Board Type"
                show_extra_route
                extraRoute="add-board-type"
  >
    <template v-slot:default="slotProps" >
      <!--      <td>{{slotProps?.item?.id}}</td>-->
      <td>
        <NameTag>Name</NameTag>
        {{slotProps?.item?.board_type_title}}
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
import EditDelete from "../../../components/EditDelete.vue";
import NameTag from "../../../components/NameTag.vue";
export default {
  name: "BoardTypes",
  components: {NameTag, EditDelete, TrashIcon, CleanEditIcon, BaseDataPage},
  methods : {
    editItem(id, action){
      if(action !== 'delete'){
        this.$router.push({name:'edit-board-type',params: {boardTypeId:id}})
      }else {
        this.$store.dispatch('deleteItem', {url: `board-types/${id}`})
      }
    }
  }
}
</script>

<style scoped>

</style>