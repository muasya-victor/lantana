<template>
  <BaseDrawer>
    <div class="stacked max-h-screen">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-1 mx-auto md:mx-0
        h-full overflow-y-auto w-full py-2">
        <template v-for="(item,index) in getRestaurantCartItems" class="">
           <ProductCard :name="getName(item.item_id)"
                        :price="item.retail_price"

           >
          <ElForm>
            <ElFormItem>
              <el-input-number v-model="item.quantity" :min="0"></el-input-number>
            </ElFormItem>
          </ElForm>
        </ProductCard>
        </template>

        <div v-if="getRestaurantCartItems.length === 0" class="btn font-medium bg-gray-50">
          No Items In Cart
        </div>
      </div>

      {{getName(1)}}
      <!--    body-->




    </div>
  </BaseDrawer>
</template>

<script>
import BaseFilterItem from "../../../components/base/BaseFilterItem.vue";
import BaseScrollStrip from "../../../components/base/BaseScrollStrip.vue";
import ProductCard from "../componets/ProductsCard.vue";
import TrolleyIcon from "../../../components/icons/TrolleyIcon.vue";
import {ElInputNumber,ElForm, ElFormItem} from 'element-plus';
import {mapGetters} from "vuex";
import BaseDrawer from "../../../components/base/BaseDrawer.vue";
export default {
  name: "RestaurantMakeSale",
  data (){
    return {
      item:'',
      products: [],
      product_name:'',
      cartItems: {}, fetchedProductsObject: {},
    }
  },
  components: {
    BaseDrawer, TrolleyIcon, ProductCard,
    ElForm, ElFormItem,
    BaseScrollStrip, BaseFilterItem, ElInputNumber},
  methods: {
    fetchProducts (url) {
      let product_name = ''
      const payload = {
        url: `item`
      }
      this.$store.dispatch("fetchData", payload).then(res => {
        res.data.forEach(product=>{
          this.products.push({name:product.name, id:product.id})
        })
      })
      return product_name
    },
    getName(id){
      this.products.forEach((item)=>{
        if (item.item_id === id){
          console.log(item ,'item')
          return item.name + 'jt'
        }
      })


    },
    changeQuantity (itemId, isAddition = true) {
      let tempCartItems = this.getCartItems
      isAddition ? tempCartItems[itemId].quantity += 1 : tempCartItems[itemId].quantity -= 1
      mutate("cartItems", "make_sale", tempCartItems)
    },
  },
  computed:{
    ...mapGetters(['getRestaurantCartItems']),
    cartAlert(){
      if (this.getRestaurantCartItems.length > 0){
        return true
      }else{
        return false
      }
    },

  },
  watch: {
    getRestaurantCartItems: {
      handler () {
        Object.keys(this.cartItems).forEach(key => {
          this.cartItems[key] = this.getRestaurantCartItems[key].quantity
        })
      },
      deep: true
    },
    cartItems: {
      handler () {
        console.log("watching", this.cartItems)
        let newCartItems = {}
        Object.keys(this.cartItems).forEach(key => {
          newCartItems[key] = {
            item_id: key,
            item: this.fetchedProductsObject[key],
            quantity: this.cartItems[key]
          }
        })
        this.$store.commit('setRestaurantCartItems', newCartItems)
      },
      deep: true
    }
  },
  mounted() {
    this.fetchProducts()
  }


}
</script>

<style scoped>

</style>