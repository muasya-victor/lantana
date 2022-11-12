<template>
  <BaseDataPage :table_headings="['name', 'identification number', 'days of stay', 'status', 'Actions']"
    object-name="guest"
    createRouteName="rooms"
    new_item="Reservation"
    showRefresh
    showBack
    fetchUrl="guest-reservation"
    routeTo="guest-reservation">
    <template v-slot:default="slotProps" >
      <td>
        <NameTag>Name</NameTag>
        {{`${slotProps?.item?.first_name} ${slotProps?.item?.last_name}`}}
      </td>

      <td>
        <NameTag>ID No</NameTag>
        {{slotProps?.item?.identification_number}}
      </td>

      <td>
        <NameTag>No Of Days</NameTag>
        {{slotProps?.item?.total_days}}
      </td>

      <td>
        <NameTag>Status</NameTag>
        <span v-if="slotProps?.item?.status === 'ACTIVE'"
        class="bg-green-400 py-0.5 px-2  rounded-lg">{{slotProps?.item?.status}}</span>
        <span v-if="slotProps?.item?.status === 'PENDING'"
              class="bg-orange-400 py-0.5 px-2  rounded-lg">{{slotProps?.item?.status}}</span>
        <span v-if="slotProps?.item?.status === 'COMPLETE'"
              class="bg-red-400 py-0.5 px-2  rounded-lg">{{slotProps?.item?.status}}</span>
      </td>

      <td>
        <NameTag>Actions</NameTag>
        <EditDelete/>
      </td>

    </template>
  </BaseDataPage>
</template>

<script>
import BaseDataPage from "../../../components/base/BaseDataPage.vue";
import NameTag from "../../../components/NameTag.vue";
import EditDelete from "../../../components/EditDelete.vue";
export default {
  name: "ReservationList",
  components: {EditDelete, NameTag, BaseDataPage}
}
</script>

<style scoped>

</style>