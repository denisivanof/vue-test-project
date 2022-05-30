<template>
  <div class="app">
    <div class="container">
      <BreadCrumbs :breadcrumbs="breadcrumbs"/>
      <h1 class="title">Комплекты стеллажных систем</h1>
      <div class="filter-items">
        <FilterComponent :filter="SortBy"/>
        <FilterComponent :filter="Material"/>
      </div>
      <div class="product-items">
        <CardProduct v-for="item in getItems()" :key="item.id" :item="item"/>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import FilterComponent from "@/components/Filter/FilterComponent";
import CardProduct from "@/components/CardProduct/CardProduct";
import {mapState} from "vuex";
import {store} from "@/store";

export default {
  name: 'App',
  components: {CardProduct, FilterComponent, BreadCrumbs},
  data(){
    return {}
  },
  methods: {
    getItems(){
     return store.getters["ShelvingKits/itemsGetters"]
    }
  },
  computed:{
    ...mapState({
      breadcrumbs: state => state.ShelvingKits.breadcrumbs,
      SortBy: state => state.ShelvingKits.filter.SortBy,
      Material: state => state.ShelvingKits.filter.Material,
    }),
  }
}
</script>
<style lang="scss">
@import "app.scss";
</style>
