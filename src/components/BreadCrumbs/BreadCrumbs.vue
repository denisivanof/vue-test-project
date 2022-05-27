<template>
  <div class="breadCrumbs">
    <a class="breadCrumbs__link"
       v-for="(item, i) in breadcrumbs"
       :style="i < breadcrumbs.length-1 ? '' :'color: #000;'"
       :key="item.name"
       :href="item.path"
    >
      {{`${item.name} ${i < breadcrumbs.length-1 ? '/ ' : ''}`}}
    </a>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props:['breadcrumbs'],
}
</script>
<style lang="scss">
@import "BreadCrumbs.scss";
</style>