<template>
  <div class="stacked">
<!--    <h1 class="header bg-green-200 w-fit p-1 rounded">Guests</h1>-->
    <el-tabs type="border-card"  class="h-full">
      <el-tab-pane label="Guests" value="guests" v-model="view">
        <BaseDataPage :table_headings="['name', 'gender', 'nationality','Identification Number', 'Telephone', 'Actions']"
                      object-name="guest"
                      new_item="Guest"
                      createRouteName="add-guest"
                      showRefresh
                      showBack
                      extraRoute="add-agent"
                      route_name="Agent"
                      show_extra_route
                      fetchUrl="guests">
          <template v-slot:default="slotProps" >
            <td>
             <NameTag>Name</NameTag>
              {{`${slotProps?.item?.first_name} ${slotProps?.item?.last_name}`}}
            </td>

            <td>
              <NameTag>gender</NameTag>
              {{slotProps?.item?.gender}}
            </td>

            <td>
              <NameTag>nationality</NameTag>
              {{slotProps?.item?.nationality}}
            </td>

            <td>
              <NameTag>Identification Number</NameTag>
              {{slotProps?.item?.identification_number}}
            </td>

            <td>
              <NameTag>Telephone</NameTag>
              {{slotProps?.item?.telephone_number}}
            </td>

            <td>
              <NameTag>Actions</NameTag>
              <EditDelete
                  @EditItem="editItem(slotProps?.item?.id, 'edit','edit-guest','guests','guestId')"
                  @DeleteItem="editItem(slotProps?.item?.id, 'delete','edit-guest','guests', 'guestId')"
              />
            </td>
          </template>
        </BaseDataPage>

      </el-tab-pane>

      <el-tab-pane label="Agents" value="agents" v-model="view">
        <BaseDataPage
                      :table_headings="['name', 'email', 'group type','Identification Number', 'Telephone', 'Actions']"
                      object-name="guest"
                      createRouteName="add-agent"
                      showRefresh
                      fetchUrl="agents">
          <template v-slot:default="slotProps" >
            <td>
              <NameTag>Name</NameTag>
              {{`${slotProps?.item?.agent_name} `}}
            </td>

            <td>
              <NameTag>Email</NameTag>
              {{slotProps?.item?.email}}
            </td>

            <td>
              <NameTag>Group Type</NameTag>
              {{slotProps?.item?.group_type}}
            </td>

            <td>
              <NameTag>Id No</NameTag>
              {{slotProps?.item?.identification_number}}
            </td>

            <td>
              <NameTag>Telephone</NameTag>

              {{slotProps?.item?.telephone}}
            </td>
            <td>
              <NameTag>Actions</NameTag>
              <EditDelete
                  @EditItem="editItem(slotProps?.item?.id, 'edit','edit-agent','agents','agentId')"
                  @DeleteItem="editItem(slotProps?.item?.id, 'delete','edit-agent','agents', 'agentId')"
              />
            </td>
          </template>
        </BaseDataPage>
      </el-tab-pane>
    </el-tabs>


    <router-view></router-view>
  </div>
</template>

<script>
import BaseDataPage from "../../../components/base/BaseDataPage.vue";
import EyeIcon from "../../../components/icons/EyeIcon.vue";
import CleanEditIcon from "../../../components/icons/CleanEditIcon.vue";
import TrashIcon from "../../../components/icons/TrashIcon.vue";
import {ElTabs ,ElTabPane} from 'element-plus';
import NameTag from "../../../components/NameTag.vue";
import EditDelete from "../../../components/EditDelete.vue";

export default {
  name: "GuestList",
  components: {EditDelete, NameTag, TrashIcon, CleanEditIcon, EyeIcon, BaseDataPage,ElTabs ,ElTabPane},
  data(){
    return{
      show_agents:false,
      view:'guests'
    }
  },
  methods:{
    toggleShowAgents(){
      this.show_agents = !this.show_agents
    },
    editItem(id, action,to,del_route, router_id){
      if(action !== 'delete'){
        if (router_id !== 'agentId'){
          this.$router.push({name:to,params: {guestId:id}})
        }else {
          this.$router.push({name:to,params: {agentId:id}})

        }
      }else {
        this.$store.dispatch('deleteItem', {url: `${del_route}/${id}`})
      }
    }

  }
}
</script>

<style scoped>

</style>