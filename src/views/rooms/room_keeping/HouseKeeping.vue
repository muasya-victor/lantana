<template>
  <BaseDataPage :table_headings="['room number', 'Clean', 'Occupied', 'Actions']"
                object-name="guest"
                showRefresh
                routeTo="rooms">
    <template v-slot:default="slotProps" >
<!--      <td>{{slotProps?.item?.id}}</td>-->
      <td>
        <NameTag>Room No</NameTag>
        {{slotProps?.item?.room_number}}
      </td>
      <td>
       <span class="linear-flex">
          <NameTag>Is Clean</NameTag>

          <IconCut class="text-red-600"
                   v-if="slotProps?.item?.is_clean === false"/>
          <IconTick class="text-green-600"
                    v-else/>
       </span>
      </td>
      <td>
        <span class="linear-flex">
          <NameTag>Is Occupied</NameTag>
          <IconCut class="text-red-600"
                   v-if="slotProps?.item?.is_occupied === false"/>
          <IconTick class="text-green-600"
                    v-else/>
        </span>
<!--        {{slotProps?.item?.is_occupied}}-->

      </td>
      <td>
        <NameTag>Action</NameTag>

        <span v-if="slotProps?.item?.is_clean === false"
              @click="attemptUpdate(slotProps?.item?.id, 'clean')"
              class="flex items-center gap-2 font-semibold
              bg-green-400 w-fit rounded p-0.5 cursor-pointer hover:bg-green-500">
          Mark Clean
          <IconTick class="text-green-600" />

        </span>

        <span v-else
              class="flex items-center gap-2 font-semibold
              bg-red-200 w-fit rounded p-0.5 cursor-pointer hover:bg-red-300"
              @click="attemptUpdate(slotProps?.item?.id, 'dirty')">
          Mark Dirty
          <IconCut class="text-red-600" />
        </span>

      </td>
    </template>
  </BaseDataPage>
</template>

<script>
import BaseDataPage from "../../../components/base/BaseDataPage.vue";
import MarkClean from "./components/MarkClean.vue";
import MarkDirty from "./components/MarkDirty.vue";
import IconCut from "../../../components/icons/IconCut.vue";
import IconTick from "../../../components/icons/IconTick.vue";
import NameTag from "../../../components/NameTag.vue";
export default {
  name: "HouseKeeping",
  components: {NameTag, IconTick, IconCut, MarkDirty, MarkClean, BaseDataPage},
  methods: {
    attemptUpdate(id, action){
      let payload = {
        url:'rooms',
        id:id,
        value:''
      }
      if(action === 'clean'){
        payload.value={is_clean:true}
      }else {
        payload.value={is_clean:false}
      }

      this.$store.dispatch('patchItem', payload).then(res=>{
      }).catch(err=>{
        alert(err.message)
      })
    }
}
}
</script>

<style scoped>

</style>