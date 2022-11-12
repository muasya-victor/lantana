<template>
  <BaseDrawer drawer_title="Guest">
    <FormKit type="form" id="form" v-model="form" @submit="attemptSubmit">

      <FormKit
          name="first_name"
          id="first_name"
          v-model="form.first_name"
          label="First Name"
          placeholder="john "
          type="text"
          validation="required"
      />

      <FormKit
          name="middle_name"
          id="middle_name"
          v-model="form.middle_name"
          label="Middle Name"
          placeholder="doe "
          type="text"
      />

      <FormKit
          name="last_name"
          id="last_name"
          v-model="form.last_name"
          label="Last Name"
          placeholder="kinuthia "
          type="text"
          validation="required"
      />

      <FormKit
        name="gender"
        id="gender"
        v-model="form.gender"
        label="Gender"
        placeholder="gender"
        validation="required"
        type="select"
        :options="[
            {value:'M', label:'Male'},
            {value:'F', label:'Female'},
            {value:'PNTS', label:'Prefer Not To Say'},
            {value:'Other', label:'Other'},
        ]"
      />

      <FormKit
        name="identification_type"
        id="identification_type"
        v-model="form.identification_type"
        label="Identification Type"
        placeholder="identification type"
        validation="required"
        type="select"
        :options="[
            {value:'NATIONALID', label:'National ID'},
            {value:'ALIENID', label:'Alien ID'},
            {value:'PASSPORTNO', label:'Passport Number'},
            {value:'MILITARYID', label:'Military ID'},
        ]"
      />


      <FormKit
          name="identification_number"
          id="identification_number"
          v-model="form.identification_number"
          label="Identification Number"
          placeholder="9I5JG95"
          type="text"
          validation="required"
      />

      <FormKit
          name="telephone_number"
          id="telephone_number"
          v-model="form.telephone_number"
          label="Telephone Number"
          placeholder="+2535895949"
          type="text"
          validation="required"
      />

      <FormKit
          name="nationality"
          id="nationality"
          v-model="form.nationality"
          label="Nationality"
          placeholder="nationality"
          validation="required"
          type="select"
          :options="Nationalities"
      />

    </FormKit>
  </BaseDrawer>
</template>

<script>
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
import {nationalities} from "../../../utils/nationalities";
export default {
  name: "GuestAction",
  components: {BaseDrawer},
  data(){
    return {
      form : {
        first_name:'',
        middle_name:'',
        last_name:'',
        gender:'',
        identification_type:'',
        identification_number:'',
        telephone_number:'',
        nationality:''
      },
      Nationalities:null
    }
  },
  methods:{
    fillForm(){
      this.$store.dispatch('fetchData', {url:`${this.fetchUrl}/${this.$route.params.guestId}`}).then(res=>{

        this.form.first_name = res.data.first_name
        this.form.middle_name = res.data.middle_name
        this.form.last_name = res.data.last_name
        this.form.gender = res.data.gender
        this.form.identification_type = res.data.identification_type
        this.form.identification_number = res.data.identification_number
        this.form.telephone_number = res.data.telephone_number
        this.form.nationality = res.data.nationality

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
                id:this.$route.params.guestId,
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            alert(err)
          })
        }else {
          this.$store.dispatch('postData',
              {
                url:'guests',
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
    this.Nationalities = nationalities
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