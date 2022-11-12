<template>
  <BaseDrawer drawer_title="Project Settings">
    <FormKit type="form" id="form" v-model="form" @submit="attemptSubmit">

      <FormKit
          name="name_hotel"
          id="name_hotel"
          v-model="form.name_hotel"
          label="Institution Name"
          placeholder="Skality"
          type="text"
          validation="required"
      />


      <FormKit
          name="image_url"
          id="image_url"
          v-model="form.image_url"
          label="Logo"
          placeholder=""
          type="file"
          validation="required"
      />


    </FormKit>
  </BaseDrawer>
</template>

<script>
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
import {Error} from "../../../utils/error_success";
export default {
  name: "AdvancedActions",
  components: {BaseDrawer},
  data(){
    return {
      form: {
        name_hotel:'',
        image_url:'',
      },
      ProjectId:null
    }
  },
  methods:{
    fillForm(){
      this.$store.dispatch('fetchData', {url:`${this.fetchUrl}/${this.$route.params.ProjectId}`}).then(res=>{

        this.form.name_hotel = res.data.name_hotel
        this.form.price = res.data.image_url

      })
    },
    fetchData(){
      try {
        if (this.baseAction !== 'post'){
          this.fillForm()
        }
      }catch (err){
        console.log(err)
      }
    },
    attemptSubmit(){
      try {
        if (this.baseAction !== 'post'){
          //  edit
          this.$store.dispatch('patchItem',
              {
                url:`${this.fetchUrl}`,
                id:this.$route.params.ProjectId,
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            Error()
          })
        }else {
          console.log(this.form)
          this.$store.dispatch('postData',
              {
                url:'settings',
                value:this.form
              }).then(
              this.$router.go(-1)

          ).catch(err=>{
            Error()

          })
        }
      }catch (err){
        console.log(err)
      }

    }
  },
  mounted() {
    this.fetchData()
  },
  props:{
    baseAction:{
      type:String,
      default:'post'
    },
    fetchUrl:{
      type:String,
      default:'settings'
    },
  }
}
</script>

<style scoped>

</style>