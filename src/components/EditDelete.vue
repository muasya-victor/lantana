<template>
<span class="flex items-center gap-8 py-2 lg:py-0 ">

                 <icon-add
                     v-if="ShowAdd"
                     @click="addItem"
                 />

                <CleanEditIcon
                    @click="editItem()"
                />


                <TrashIcon
                    @click="deleteItem()"
                />


              </span>
</template>

<script>
import CleanEditIcon from "./icons/CleanEditIcon.vue";
import TrashIcon from "./icons/TrashIcon.vue";
import IconAdd from "./icons/IconAdd.vue";
export default {
  name: "EditDelete",
  components: {IconAdd, TrashIcon, CleanEditIcon},
  methods : {
    editItem(){
      this.$emit('EditItem')
    },
    deleteItem(){
      this.$emit('DeleteItem')
    },
    addItem(){
      this.$emit('AddItem')
    }
  },
  props: {
    ShowAdd:{
      type:Boolean,
      default:false
    },

  }
}
</script>

<style scoped>

</style>