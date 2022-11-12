<template>
  <BaseDrawer>
    <FormKit type="form" id="form" v-model="form" @submit="attemptSubmit">

      <FormKit
          name="charge_name"
          id="charge_name"
          v-model="form.charge_name"
          label="Charge Name"
          placeholder="broken bed"
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
  name: "ExtraChargeTypeAction",
  components: {BaseDrawer},
  data(){
    return {
      form: {
        charge_name:null,
        price:null
      },
      chargeTypeId:null
    }
  },
  methods:{
    fillForm(){
      this.$store.dispatch('fetchData', {url:`${this.fetchUrl}/${this.$route.params.chargeTypeId}`}).then(res=>{

        this.form.charge_name = res.data.charge_name
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
                id:this.$route.params.chargeTypeId,
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            alert(err)
          })
        }else {
          this.$store.dispatch('postData',
              {
                url:'extra-charge-type',
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
      default:'extra-charge-type'
    },
  }
}
</script>

<style scoped>

</style>