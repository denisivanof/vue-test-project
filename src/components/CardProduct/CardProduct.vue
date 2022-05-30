<template>
<div class="product">
  <div class="product__discount" v-if="item.price.old_price">Скидка</div>
  <div class="product__img">
    <img :src="getImg(item.image.url)" :alt="item.name">
  </div>
  <div class="product__info">
    <div class="product__code">{{item.code}}</div>
    <div class="product__name">{{item.name}}</div>
    <div class="product__item">
      <div class="product__price">
        <span class="product__price--old_price" v-if="item.price.old_price">{{item.price.old_price}}₽</span>
        {{item.price.current_price}}₽
      </div>
      <div class="product__action">
        <button v-if="!cartLocal(item.id)" class="product__btn" @click="setCart(val=item.id, key='cart')"
        ><img src="../../assets/product/cart.png">
        </button>
        <button v-else class="product__btn" @click="delCart(val=item.id, key='cart')">
          <img src="../../assets/product/circle-checked.png">
        </button>

        <button v-if="!favoritesLocal(item.id)" class="product__btn" @click="setCart(val=item.id, key='favorites')"
        ><img src="../../assets/product/heart.png">
        </button>
        <button v-else class="product__btn" @click="delCart(val=item.id, key='favorites')">
          <img src="../../assets/product/heart-checked.png">
        </button>
      </div>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "CardProduct",
  props:['item'],
  created() {
    this.isCart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    this.isFavorites = JSON.parse(localStorage.getItem('favorites')) ? JSON.parse(localStorage.getItem('favorites')) : []
  },
  data(){
    return{
      isCart: [],
      isFavorites: []
    }
  },
  methods:{
    getImg(url){
      return require(`@/assets${url}`)
    },
    delCart(id, key){
      let newCart =  JSON.parse(localStorage.getItem(key))
      newCart = newCart.filter(item=> item !== id)
      localStorage.setItem(key, JSON.stringify(newCart));
      this.setCartAndFavorites(key)
    },
    setCart(val, key){
      if(localStorage.getItem(key)){
       let newCart =  JSON.parse(localStorage.getItem(key))
        newCart.push(val)
        localStorage.setItem(key, JSON.stringify(newCart));
      }else {
        localStorage.setItem(key, JSON.stringify([val]));
      }
      this.setCartAndFavorites(key)
    },
    setCartAndFavorites(key){
      if(key == 'cart'){
        this.isCart = JSON.parse(localStorage.getItem(key))
      }
      if(key == 'favorites'){
        this.isFavorites = JSON.parse(localStorage.getItem(key))
      }
    },
    cartLocal(id){
      return this.isCart.filter(item=>item == id)[0]
    },
    favoritesLocal(id){
      return this.isFavorites.filter(item=>item == id)[0]
    }
  },
}
</script>

<style lang="scss">
@import "CardProduct";
</style>