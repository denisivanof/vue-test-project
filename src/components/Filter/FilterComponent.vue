<template>
<div class="filter">
  <div class="filter__title">{{filter.title}}</div>
  <div class="filter__select">
    <div class="filter__select-input"
         @click="toggle"
    >
      {{filter.selected.name}}<span><img src="../../assets/icon.png"></span></div>
      <ul class="filter__select-dropdown" v-if="dropdown">
        <li class="filter__select-list"
            v-for="item in filter.filterList" :key="item.id"
            @click="select(item)"
        >{{item.name}}</li>
      </ul>
  </div>
</div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "FilterComponent",
  props:['filter'],
  data(){
    return {
      dropdown: false,
    }
  },
  methods:{
    select(val){
      this.setFilter({key: this.filter.code, val})
      this.toggle()
    },
    toggle(){
      this.dropdown ? this.dropdown = false : this.dropdown = true
    },
    ...mapMutations({
      setFilter: 'ShelvingKits/setFilter'
    }),
  },
}
</script>

<style lang="scss">
@import "FilterComponent";
</style>