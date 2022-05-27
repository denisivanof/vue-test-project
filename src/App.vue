<template>
  <div class="app">
    <div class="container">
      <BreadCrumbs :breadcrumbs="breadcrumbs"/>
    </div>
  </div>
</template>
<script>
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
export default {
  name: 'App',
  components: {BreadCrumbs},
  data(){
    return {
      breadcrumbs:[
        {name: 'Главная', path: '#'},
        {name: 'Системы хранения', path: '#'},
        {name: 'Комплекты стеллажных систем', path: '#'},
      ]
    }
  }
}
</script>

<style lang="scss">
@import "app.scss";
</style>
