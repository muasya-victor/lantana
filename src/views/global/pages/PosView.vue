<template>
  <div class="stacked max-h-screen">
    <div class="flex flex-col pr-4 ">
      <BaseScrollStrip class="linear-flex overflow-x-auto py-2 px-1">

        <BaseFilterItem filter_name="All"
                        @click="fetchProducts"
        />
        <BaseFilterItem v-for="filter in filters"
                        :key="filter"
                        :filter_name="filter.name"
                        @click="filterProducts(filter.id)"
        />

      </BaseScrollStrip>
      <span class="flex items-center justify-between">
        <input type="search" placeholder="search product"
               v-model="search_value"
               class="h-8 p-1 text-sm rounded bg-white border border-gray-700 capitalize">
        <TrolleyIcon :showAlert="cartAlert"
                     @click="$router.push({name:'restaurant-cart'})"
        />
      </span>
    </div>
    <!--    header-->

    <router-view/>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mx-auto md:mx-0
    h-full overflow-y-auto w-full py-2">
      <BaseLoader v-if="loading"/>
      <template
          v-for="item in attemptFilter" class="">
        <ProductCard :name="item.name"
                     :price="item.retail_price"
        >
          <ElForm>
            <ElFormItem>
              <el-input-number v-model="cartItems[item?.id]" :min="0"></el-input-number>
            </ElFormItem>
          </ElForm>
        </ProductCard>
      </template>
    </div>
    <!--    body-->




  </div>
</template>

<script>
import BaseFilterItem from "../../../components/base/BaseFilterItem.vue";
import BaseScrollStrip from "../../../components/base/BaseScrollStrip.vue";
import TrolleyIcon from "../../../components/icons/TrolleyIcon.vue";
import {ElInputNumber,ElForm, ElFormItem} from 'element-plus';
import ProductCard from "../../restaurant/componets/ProductsCard.vue";
import FloatingSearchButton from "../../../components/FloatingSearchButton.vue";
import BaseLoader from "../../../components/base/BaseLoader.vue";
import {mapGetters} from "vuex";
import IconCut from "../../../components/icons/IconCut.vue";
export default {
  name: "PosView",
  data (){
    return {
      item:'',
      products: [],
      showSearch:false,
      filtered_products: [],
      search_value:'',
      filters: [],
      loading:false,
      fetchedProductsObject: {},
      newCartItems: {},
      cartItems:[],
      cartAlert:false,
      showSearchBar:true,
    }
  },
  components: {
    IconCut,
    BaseLoader,
    FloatingSearchButton,
    ProductCard, TrolleyIcon,
    ElForm, ElFormItem,
    BaseScrollStrip, BaseFilterItem, ElInputNumber},
  methods :{
    toggleSearch(){
      this.showSearch = !this.showSearch
    },
    fetchFilters () {
      const payload = {
        url: "item-category"
      }
      this.$store.dispatch("fetchData", payload).then(res => {
        this.filters = res.data
      })
    },
    fetchProducts (filter = "") {
      this.loading = true
      const payload = {
        url: "item?can_be_sold=1"
      }
      payload.url += filter !== "" ? `&${filter}` : ""
      this.$store.dispatch("fetchData", payload).then(res => {
        this.products = []
        res.data.forEach(product => {
          if (product.can_be_sold === true) {
            this.products.push(product)
          }
        })
      }).then(() => {
        this.loading = false


      })
    },
    filterProducts(categoryId){

      const payload =
          {
            url: `item?can_be_sold=1&category_id=${categoryId}`

          }
      this.loading = true

      this.$store.dispatch("fetchData", payload).then(res => {
        this.products = []
        res.data.forEach(product => {
          if (product.can_be_sold === true) {
            this.products.push(product)
          }
        })
      }).then(() => {
        this.loading = false
      })
    },


  },
  mounted() {
    this.fetchFilters()
    this.fetchProducts()
  },
  computed: {
    attemptFilter(){
      return this.products.filter((item)=>{
        return this.filtered_products = item.name.toLowerCase().includes(this.search_value.toLowerCase())
      })
    },
    ...mapGetters(['getRestaurantCartItems']),
  },
  watch: {
    cartItems: {
      handler () {
        let newCartItems = {}
        Object.keys(this.cartItems).forEach(key => {
          newCartItems[key] = {
            item_id: key,
            item: this.fetchedProductsObject[key],
            quantity: this.cartItems[key]
          }
        })
        this.cartAlert = true
        this.$store.commit('setRestaurantCartItems', newCartItems)
      },
      deep: true
    },
    getRestaurantCartItems: {
      handler () {
        Object.keys(this.cartItems).forEach(key => {
          this.cartItems[key] = this.getRestaurantCartItems[key].quantity
        })
      },
      deep: true
    },

  }
}
</script>

<style scoped>

</style>