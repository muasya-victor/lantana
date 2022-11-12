<template>
  <BaseGeneralButton color="secondary">
    Clean
    <IconTick/>
  </BaseGeneralButton>
</template>

<script>
import BaseGeneralButton from "../../../../components/base/BaseGeneralButton.vue";
import IconTick from "../../../../components/icons/IconTick.vue";
export default {
  name: "MarkClean",
  components: {IconTick, BaseGeneralButton}
}
</script>

<style scoped>

</style>