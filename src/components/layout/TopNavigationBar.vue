<template>
  <div class="common flex flex-wrap gap-3 md:gap-8 p-2 md:gap-6">

    <CompanyLogo/>

    <span>
        <span class="font-bold capitalize w-fit"
        v-if="project_name?.length > 0"
              v-for="project in project_name"
        >
          {{project.hotel_name}}
        </span>

      <span class="font-bold capitalize w-fit"
            v-else>
          Skality Ltd
        </span>
    </span>

    <span class="flex flex-wrap capitalize gap-3"
          v-for="link in links"
          :key="link"
          v-if="show_nav_links">
        <span
                     @click="RouteTo(link.name)"
                     class="flex items-center
                     hover:bg-blue-400 px-1 rounded
                     justify-between gap-2 text-left">
          <span
              v-html="link.meta.icon">
          </span>
         <span class="w-full flex items-center gap-2">
            <span v-for="name in splitText(link.name)"
                  :key="name">
              {{name}}</span>
        </span>
     </span>
    </span>
  </div>
</template>

<script>
import CompanyLogo from "../icons/CompanyLogo.vue";
export default {
  name: "TopNavigationBar",
  components: {CompanyLogo},
  data(){
    return {
      links: [],
      project_name:[]
    }
  },
  methods : {
    fetchLinks(){
      const links = this.$router.options.routes
      links.forEach(link=>{
        if (link?.meta.main){
          this.links.push(link)
        }
      })
    },
    fetchData(){
      try {
        this.$store.dispatch('fetchData', {url:`settings`}).then(res=>{
          this.project_name = res.data
        })

      }catch (err){
        console.log(err)
      }
    },
    RouteTo(url){
      this.$router.push({name:url})
    },
    splitText(name){
      return name.split('-')
    },
  },
  props : {
    department: {
      type: String,
      default: 'rooms'
    },
    show_nav_links: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.fetchLinks()
    this.fetchData()
  },

}
</script>

<style scoped>

  .common {
    @apply bg-[#3572a5] text-white
  }
</style>