<template>

  <div
      v-if="projects?.length > 0"
  >
    <div class="w-10/12 shadow md:shadow-none rounded-lg stacked p-2">
      <ProjectCard
          :Name="project?.hotel_name"
      >
        <slot>
          <span v-if="project?.image_url?.length > 0"
              v-html="project?.image_url">

          </span>
          <span v-else>
            <ImageIcon/>
          </span>

        </slot>
      </ProjectCard>

      <span
              class="linear-flex">
        <EditDelete
                    @DeleteItem="$emit('DeleteItem')"
                    @EditItem="$router.push({name: 'advanced-add', params: {projectId:project.id}})"

        />
      </span>
    </div>

  </div>

  <div
      v-else
      class="w-10/12 shadow md:shadow-none rounded-lg stacked p-2"
  >
    <ProjectCard
        Name="Project"
    >
      <slot>
        <ImageIcon/>
      </slot>
    </ProjectCard>
    <span
        class="linear-flex">
    <EditDelete :ShowAdd="true"
                @AddItem="$router.push({name: 'advanced-add'})"
                @EditItem="$router.push({name: 'advanced-add'})"
                @DeleteItem=""
    />
  </span>
  </div>

</template>

<script>
import ProjectCard from "./components/ProjectCard.vue";
import ImageIcon from "../../components/icons/ImageIcon.vue";
import EditDelete from "../../components/EditDelete.vue";
export default {
  name: "AdvancedSettings",
  components: {EditDelete, ImageIcon, ProjectCard},
  data(){
    return{
      projects:[],
    }
  },
  methods : {
    fetchData(){
      try {
        this.$store.dispatch('fetchData', {url:`settings`}).then(res=>{
          this.projects = res.data
        })

      }catch (err){
        console.log(err)
      }
    },
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>

</style>