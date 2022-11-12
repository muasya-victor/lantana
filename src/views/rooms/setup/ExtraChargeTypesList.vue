<template>
  <BaseDataPage :table_headings="['Charge Name', 'Price',  'Actions']"
                object-name="guest"
                showRefresh
                fetchUrl="extra-charge-type"
                route_name="Charge Type"
                show_extra_route
                extraRoute="add-extra-charge-type"
  >
    <template v-slot:default="slotProps">
      <!--      <td>{{slotProps?.item?.id}}</td>-->
      <td>
        <NameTag>Name</NameTag>
        {{slotProps?.item?.charge_name}}
      </td>
      <td>
        <NameTag>Price</NameTag>
        {{slotProps?.item?.price}}
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
  name: "ExtraChargeTypesList",
  components: {EditDelete, NameTag, TrashIcon, CleanEditIcon, BaseDataPage},
  methods : {
    editItem(id, action){
      if(action !== 'delete'){
        this.$router.push({name:'edit-extra-charge-type',params: {chargeTypeId:id}})
      }else {
        this.$store.dispatch('deleteItem', {url: `extra-charge-type/${id}`}).catch(err=>{
          alert('an unknown error occured')
        })
      }
    }
  }
}
</script>

<style scoped>

</style>