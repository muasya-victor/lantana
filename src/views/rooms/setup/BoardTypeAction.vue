<template>
  <BaseDrawer>
    <FormKit type="form" id="form" v-model="form" @submit="attemptSubmit">

      <FormKit
          name="board_type_title"
          id="board_type_title"
          v-model="form.board_type_title"
          label="Type Title"
          placeholder="100"
          type="text"
          validation="required"
      />

      <FormKit
          name="price"
          id="max_number_guests"
          v-model="form.max_number_guests"
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
  name: "BoardTypeAction",
  components: {BaseDrawer},
  data(){
    return {
      form: {
        board_type_title:null,
        max_number_guests:null
      },
      boardTypeId:null
    }
  },
  methods:{
    fillForm(){
      this.$store.dispatch('fetchData', {url:`${this.fetchUrl}/${this.$route.params.boardTypeId}`}).then(res=>{

        this.form.board_type_title = res.data.board_type_title
        this.form.max_number_guests = res.data.max_number_guests

      })
    },
    fetchData(){
      // this.boardTypeId = this.$route.params.boardTypeId
      // alert(this.boardTypeId)
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
                id:this.$route.params.boardTypeId,
                value:this.form
              }).then(
              this.$router.go(-1)
          ).catch(err=>{
            alert(err)
          })
        }else {
          this.$store.dispatch('postData',
              {
                url:'board-types',
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
      default:'board-types'
    },
  }
}
</script>

<style scoped>

</style>