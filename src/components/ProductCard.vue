<template>
  <div class="stacked rounded p-1 shadow hover:bg-gray-50">
    <div>
      <img :src="image_url" :alt="image_name">
    </div>

    <div class="stacked">
      <span>{{product_name}}</span>
      <div class="linear-flex">
        Kes. <span>{{price}}</span>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props : {
    image_url: {
      type:String,
      default:''
    },
    image_name: {
      type:String,
      default:''
    },
    product_name: {
      type:String,
      default:''
    },
    price: {
      type:String,
      default:''
    },
  }
}
</script>

<style scoped>

</style>