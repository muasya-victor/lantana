<template >
  <div class="hidden md:flex flex-col gap-4 justify-between capitalize h-fit bg-slate-100
  border-r-2 w-full md:w-fit md:min-h-9/12 py-2 md:py-0">


    <div class="flex flex-col gap-2">
      <div class="w-full  h-fit hidden md:block ">
      <span class=" hover:bg-white w-fit p-1 rounded flex items-center justify-between text-black font-semibold
       capitalize">

       <span
           @click="toggleActive"
           class=""
       >
         <MenuIcon/>
       </span>
      </span>
      </div>


      <div
          class="
        hover:bg-white p-1 rounded cursor-pointer "
          v-for="link in sidebar_links"
          :key="link">

        <router-link :to="{name: link.name}"
                     active-class="active"
                     class="flex items-center justify-between gap-2 text-left">
          <el-tooltip :content="link.name" placement="right" effect="light" class="bg-black">
            <span
                v-html="link.meta?.icon">
          </span>
          </el-tooltip>
          <span class="w-full flex items-center gap-2"
                v-if="active === true">
            <span v-for="name in splitText(link.name)"
                  :key="name">
              {{name}}</span>
          </span>

        </router-link>


      </div>
    </div>

    <div class="lg:h-96 md:h-32">
<!--      space-->
    </div>


    <div class="flex-end px-2">
      <span class="flex items-center gap-2 hover:bg-white p-1 rounded cursor-pointer"
            @click="routeTo('settings')">
        <IconSettings/>
        <span class="text-sm font-bold capitalize"
        v-if="active">Settings</span>
      </span>
    </div>
  </div>








  <div class="md:hidden ">

    <div class="">

       <span
           @click="showMenu"
           class=""
       >
         <MenuIcon />
       </span>

      <div class="md:hidden">
        <el-drawer
            v-model="visible"
            size="80%"
            direction="rtl"
            :show-close="false">

          <template #header="{close,  titleId, titleClass }">
            <h4 :id="titleId" :class="titleClass">Menu</h4>

            <BaseGeneralButton
                color="destructive"
                @click="close">
              Close
              <DeleteIcon class="w-5 h-5"/>
            </BaseGeneralButton>
<!--            <DeleteIcon-->

          </template>

          <div>
            <div
                class="
                  hover:bg-gray-50 rounded cursor-pointer "
                v-for="link in sidebar_links"
                :key="link">

              <router-link :to="{name: link.name}"
                           active-class="active"
                           @click="showMenu"
                           class="flex items-center justify-between gap-2 text-left h-9">
                           <el-tooltip :content="link.name" placement="right" effect="light" class="bg-black">
                              <span
                                  v-html="link.meta?.icon">
                            </span>
                           </el-tooltip>
                              <span class="w-full flex items-center gap-1 font-semibold">
                           <span v-for="name in splitText(link.name)"
                                :key="name">
                            {{name}}</span>
                           </span>

              </router-link>


            </div>
            <div class="flex-end h-9 ">
              <span class="flex items-center gap-2 hover:bg-white rounded cursor-pointer"
                    @click="routeTo('settings')">
                <IconSettings/>
                <span class="text-sm font-bold capitalize">Settings</span>
              </span>
            </div>
          </div>

        </el-drawer>
      </div>

<!--      <BaseGeneralButton-->


    </div>



  </div>

</template>

<script>
import IconTooling from "../icons/IconTooling.vue";
import IconRight from "../icons/IconRight.vue";
import IconDown from "../icons/IconDown.vue";
import IconUpSmall from "../icons/IconUpSmall.vue";
import IconDownSmall from "../icons/IconDownSmall.vue";
import MenuIcon from "../icons/MenuIcon.vue";
import IconSettings from "../icons/IconSettings.vue";
import {ElTooltip, ElButton,ElDrawer} from 'element-plus'
import BaseGeneralButton from "../base/BaseGeneralButton.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
export default {
  name: "SideBar",
  components: {
    DeleteIcon,
    BaseGeneralButton, IconSettings, MenuIcon, IconDownSmall, IconUpSmall,
    IconDown, IconRight, IconTooling, ElTooltip,ElButton, ElDrawer},
  data (){
    return {
      active: false,
      child_active:false,
      sidebar_links: [],
      visible:false
    }
  },
  methods: {
    toggleActive(){
      this.active = !this.active
      this.child_active = false
    },
    showMenu(){
      this.visible = !this.visible

    },
    toggleChildActive(){
      this.active = true
      this.child_active = !this.child_active
    },
    fetchLinks(){
      this.sidebar_links = []
      const links = this.$router.options.routes
      links.forEach(link=>{
        if(link?.name === this.department){
          link?.children?.forEach(child=>{
            if (child.side_bar === true){
              this.sidebar_links?.push(child)
            }
          })
        }
      })
    },
    splitText(name){
      return name.split('-')
    },
    routeTo(name){
      this.$router.push({name: name})
      this.showMenu()
    }
  },
  updated() {
    this.fetchLinks()
  },
  mounted() {
    this.fetchLinks()
 },
  props :{
    title: {
      type: String,
      default: 'Panel Title'
    },
    department: {
      type: String,
      default: 'rooms'
    }
  },
  watch:{
    $route (to, from){
      // this.fetchLinks()

    }
  }
}
</script>
<style>

.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}
.el-popper.is-light {
  /* Set padding to ensure the height is 32px */
  @apply px-4 bg-black py-1 capitalize text-sm font-semibold
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}

</style>



