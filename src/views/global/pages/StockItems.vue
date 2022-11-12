<template>
  <BaseDataPage :table_headings="['Product',
      'Batch',
      'Price',
      'Quantity',
      'Expiry Date',
      'Actions']"
                object-name="guest"
                showRefresh
                fetchUrl="inventory"
                route_name="Amenity"
                show_extra_route
                extraRoute="add-amenity"
  >
    <template v-slot:default="slotProps" >
      <!--      <td>{{slotProps?.item?.id}}</td>-->
      <td>
        <NameTag>Name</NameTag>
        {{slotProps?.item?.name}}
      </td>
      <td>
        <NameTag>Batch</NameTag>
        {{ slotProps.item?.batch_number}}
      </td>

      <td>
        <NameTag>Price</NameTag>
        {{ slotProps.item?.purchase_price }}
      </td>

      <td>
        <NameTag>Quantity</NameTag>
        {{ slotProps.item?.remaining_quantity }}
      </td>
      <td>
        <NameTag>Expiry Date</NameTag>
        {{ slotProps.item.expiry_date }}
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
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
import BaseDataPage from "../../../components/base/BaseDataPage.vue";
import NameTag from "../../../components/NameTag.vue";
import EditDelete from "../../../components/EditDelete.vue";
import IconTick from "../../../components/icons/IconTick.vue";
import IconCut from "../../../components/icons/IconCut.vue";
export default {
  name: "StockItems",
  components: {IconCut, IconTick, EditDelete, NameTag, BaseDataPage, BaseDrawer}
}
</script>

<style scoped>

</style>