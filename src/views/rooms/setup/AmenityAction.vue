<template>
  <BaseDrawer>
    <FormKit type="form" id="form" v-model="form" @submit="attemptSubmit">

      <FormKit
          name="amenities_title"
          id="amenities_title"
          v-model="form.amenities_title"
          label="Type Title"
          placeholder="swimming"
          type="text"
          validation="required"
      />

      <FormKit
          name="price"
          id="price"
          v-model="form.price"
          label="Price"
          placeholder="100"
          type="number"
          validation="required"

      />


    </FormKit>
  </BaseDrawer>
</template>

<script>
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
export default {
  name: "AmenityAction",
  components: {BaseDrawer},
  data(){
    return {
      form: {
        amenities_title:null,
        price:null
      },
      amenityId:null
    }
  },
  methods:{
    fillForm(){
      this.$store.dispatch('fetchData', {url:`${this.fetchUrl}/${this.$route.params.amenityId}`}).then(res=>{

        this.form.amenities_title = res.data.amenities_title
        this.form.price = res.data.price

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
                id:this.$route.params.amenityId,
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            alert(err)
          })
        }else {
          this.$store.dispatch('postData',
              {
                url:'amenities',
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            alert(err)
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
      default:'amenities'
    },
  }
}
</script>

<style scoped>

</style>