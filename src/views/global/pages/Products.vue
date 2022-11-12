<template>
  <BaseDataPage :table_headings="['Product Name','Category',
             'retail price','Supplier','Remaining','Actions']"
                object-name="guest"
                showRefresh
                fetchUrl="item"
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
        <NameTag>Category</NameTag>
        {{ slotProps.item.category?.name }}
      </td>
      <td>
        <NameTag>Price</NameTag>
        {{ slotProps.item.retail_price }}
      </td>
      <td>
        <NameTag>Supplier</NameTag>
        {{ slotProps.item.supplier.name }}
      </td>
      <td>
        <NameTag>Remaining Qty</NameTag>
        {{ slotProps.item?.total_inventory }}
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
  name: "Products",
  components: {IconCut, IconTick, EditDelete, NameTag, BaseDataPage, BaseDrawer}
}
</script>

<style scoped>

</style>