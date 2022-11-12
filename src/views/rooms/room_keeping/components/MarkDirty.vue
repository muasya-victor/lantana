<template>
  <BaseGeneralButton color="destructive">
    Dirty
    <IconCut/>
  </BaseGeneralButton>
</template>

<script>
import BaseGeneralButton from "../../../../components/base/BaseGeneralButton.vue";
import IconCut from "../../../../components/icons/IconCut.vue";
export default {
  name: "MarkDirty",
  components: {IconCut, BaseGeneralButton}
}
</script>

<style scoped>

</style>