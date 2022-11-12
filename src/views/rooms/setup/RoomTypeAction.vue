<template>
  <BaseDrawer>
    <FormKit type="form" id="form" v-model="form" @submit="attemptSubmit">

      <FormKit
          name="board_type_title"
          id="board_type_title"
          v-model="form.type_title"
          label="Type Title"
          placeholder="100"
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

      <FormKit
          name="number_guests"
          id="number_guests"
          v-model="form.number_guests"
          label="No Of Guests"
          placeholder="2"
          type="number"
          validation="required"
      />


    </FormKit>
  </BaseDrawer>
</template>

<script>
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
export default {
  name: "RoomTypeAction",
  components: {BaseDrawer},
  data(){
    return {
      form: {
        type_title:null,
        number_guests:null,
        price:null,
      },
      roomTypeId:null
    }
  },
  methods:{
    fillForm(){
      this.$store.dispatch('fetchData', {url:`${this.fetchUrl}/${this.$route.params.roomTypeId}`}).then(res=>{

        this.form.type_title = res.data.type_title
        this.form.price = res.data.price
        this.form.number_guests = res.data.number_guests

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
                id:this.$route.params.roomTypeId,
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            alert(err)
          })
        }else {
          this.$store.dispatch('postData',
              {
                url:'room-type',
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
      default:'room-type'
    },
  }
}
</script>

<style scoped>

</style>