<template>
  <BaseDrawer drawer_title="Agent">
    <FormKit type="form" id="form" v-model="form" @submit="attemptSubmit">

      <FormKit
          name="first_name"
          id="first_name"
          v-model="form.agent_name"
          label="First Name"
          placeholder="john "
          type="text"
          validation="required"
      />

      <FormKit
          name="email"
          id="email"
          v-model="form.email"
          label="Email"
          placeholder="email@gmail.com "
          type="email"
          validation="required|email"
      />

      <FormKit
          name="group_type"
          id="group_type"
          v-model="form.group_type"
          label="Group Type"
          placeholder="group type"
          validation="required"
          type="select"
          :options="[
            {value:'COOP', label:'Cooperation'},
            {value:'TA', label:'Travel Agency'},
            {value:'INDIVIDUAL', label:'Individual'},
        ]"
      />

      <FormKit
          name="is_guest"
          id="is_guest"
          v-model="form.is_guest"
          label="Is Guest"
          type="checkbox"
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

      <button
          type="button"
          @click="toggleMore"
          class="w-full h-8 linear-flex justify-center mb-2 mt-2 border"
      >
        <IconAdd/> More
      </button>

      <FormKit
          v-if="more"
          name="account_info"
          id="account_info"
          v-model="form.account_info"
          label="Account Information"
          placeholder="+2535895949"
          type="text"
      />

      <FormKit
          v-if="more"
          name="address"
          id="address"
          v-model="form.address"
          label="Address"
          placeholder="+305 OX TOWN"
          type="text"
      />

    </FormKit>
  </BaseDrawer>
</template>

<script>
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
import {nationalities} from "../../../utils/nationalities";
import IconAdd from "../../../components/icons/IconAdd.vue";
import {Error} from "../../../utils/error_success";
export default {
  name: "AgentAction",
  components: {IconAdd, BaseDrawer},
  data(){
    return {
      form : {
        agent_name:'',
        email:'',
        group_type:'',
        is_guest:'',
        identification_number:'',
        telephone_number:'',
        account_info:'',
        address:''
      },
      Nationalities:null,
      more:false
    }
  },
  methods:{
    fillForm(){
      this.$store.dispatch('fetchData', {url:`${this.fetchUrl}/${this.$route.params.agentId}`}).then(res=>{

        this.form.agent_name = res.data.agent_name
        this.form.email = res.data.email
        this.form.group_type = res.data.group_type
        this.form.is_guest = res.data.is_guest
        this.form.identification_number = res.data.identification_number
        this.form.telephone_number = res.data.telephone_number
        this.form.account_info = res.data.account_info
        this.form.address = res.data.address

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
                id:this.$route.params.agentId,
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            Error()
          })
        }else {
          this.$store.dispatch('postData',
              {
                url:'agents',
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            Error()
          })
        }
      }catch (err){
        alert(err)
      }

    },
    toggleMore(){
      this.more = !this.more
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
      default:'agents'
    },
  }
}
</script>

<style scoped>

</style>