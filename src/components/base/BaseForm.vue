<template>
  <BaseDrawer :drawer_title="pageTitle">

    <FormKit
        type="form"
        v-model="form"
        :label="submitLabel"
        @submit="handleSubmit">
      <FormKitSchema :schema="jsonSchema" />

      </FormKit>


  </BaseDrawer>
</template>

<script >
import BaseDrawer from "./BaseDrawer.vue";
import BaseGeneralButton from "./BaseGeneralButton.vue";
export default  {
  components: {BaseGeneralButton, BaseDrawer},
  data (){
    return {
      form: [],
      values: {}
    }
  },//data
  mounted(){
  },//mounted
  methods : {
    handleSubmit(){
      console.log(this.form , 'form')
      JSON.stringify(this.form)
      console.log(this.form , 'json')
      this.values = this.form

      this.$store.dispatch('postData',{url : this.submitLink, value:this.form}).then(res=>{
        this.Close()
      }).catch(err=>{
        console.log(err, 'erroer')
      })
    },
    Close(){
      this.$router.go(-1)
    }
  },//methods
  props :{
    jsonSchema :{
      type:Object,
      default: [
        {
        }
      ],
      required:true,
    },
    submitLabel: {
      type:String,
      default:'Submit'
    },
    submitLink: {
      type:String,
      default:'rooms',
      required: true
    },
    pageTitle:''
  }
}

</script>

