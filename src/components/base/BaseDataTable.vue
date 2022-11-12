<template>
  <div class="flex flex-col  rounded-lg mx-auto m-1 border">
    <div class="flex justify-between p-1 ">
      &nbsp;
<!--      filters-->
      <div class="flex items-center gap-2 w-fit border rounded p-1
       capitalize text-sm font-bold hover:bg-gray-50 mb-1 "
           @click="addItem">
        {{routeTo}}
        <IconAdd/>
      </div>
    </div>

    <table class=" md:table-auto w-full overflow-x-scroll">
      <thead class="h-10 px-2">
        <tr class="text-left  bg-gray-50 px-2">
          <th
              v-for="table_heading in table_headings"
              :key="table_heading"
          >
            {{table_heading}}
          </th>
        </tr>
      </thead>

      <tbody >
        <tr class="hover:bg-gray-50 px-2 h-8 border-b"
        v-for="item in page_results"
        :key="item">
          <slot
              class="p-0"
              :item="item"
          ></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {ElTable,ElTableColumn} from 'element-plus';
import IconAdd from "../icons/IconAdd.vue";
import router from "../../router";

export default {
  name: "BaseDataTable",
  components:{IconAdd, ElTable,ElTableColumn},
  data (){
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
      ],
    }
  },
  props :{
    table_headings: {
      type: Array,
      default: () => {
        return []
      }
    },
    page_results:{
      type: Array,
      default: () => {
        return []
      }
    },
    routeTo: {
      type:String,
    }

  },
  methods : {
    addItem(){
      router.push({name : this.routeTo})
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>