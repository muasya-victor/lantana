<template>
 <BaseDrawer>
   <FormKit type="form" id="form" v-model="form" @submit="attemptSubmit">
      <FormKit type="select"
               placeholder="room type"
               name="room_type"
               id="room_type"
               v-model="form.room_type"
               validation="required"
               label="Room Type">
                <optgroup >
                  <option v-for="item in room_types"
                          :key="item"
                          :value="item.value">{{item.label}}</option>
                </optgroup>
      </FormKit>

     <FormKit
     name="room_price"
     id="room_price"
     v-model="form.room_price"
     label="Price"
     placeholder="100"
     type="number"
     validation="required"
     />

     <FormKit
     name="max_number_guests"
     id="max_number_guests"
     v-model="form.max_number_guests"
     label="Max No Of Guests"
     placeholder="3"
     type="number"
     validation="required"
     />

     <FormKit
     name="room_number"
     id="room_number"
     v-model="form.room_number"
     label="Room Number"
     placeholder="30XD"
     type="text"
     validation="required"
     />

   </FormKit>
 </BaseDrawer>
</template>

<script>
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
export default {
  name: "CreateRoom",
  components: {BaseDrawer},
  data (){
    return {
      form:{
        room_price:null,
        room_type:null,
        max_number_guests:null,
        room_number:null
      },
      room_types:[],
      roomId:''
    }
  },
  methods:{
    fetchRoomTypes(){
      this.$store.dispatch('fetchData',{url:'room-type'}).then(res=>{
        let values = res.data
        values.forEach(item=>{
          this.room_types.push({label:item.type_title , value:item.id})
        })
          }
      )
    },
    fillForm(){
      console.log(this.roomId, 'room id')
      this.$store.dispatch('fetchData', {url:`${this.fetchUrl}/${this.roomId}`}).then(res=>{

        this.form.room_price = res.data.room_price
        this.form.room_type = res.data.room_type
        this.form.max_number_guests = res.data.max_number_guests
        this.form.room_number = res.data.room_number

      })
    },
    fetchData(){
      this.roomId = this.$route.params.roomId
      this.fetchRoomTypes()
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
          console.log('patch', this.form)
          this.$store.dispatch('patchItem',
              {
                url:`rooms`,
                id:this.roomId,
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            alert(err)
          })
        }else {
          this.$store.dispatch('postData',
              {
                url:'rooms',
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
  props: {
    baseAction:{
      type:String,
      default:'post'
    },
    fetchUrl:{
      type:String,
      default:'rooms'
    },

  }
}
</script>

<style scoped>

</style>