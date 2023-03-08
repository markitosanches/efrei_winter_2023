<template>
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div class="col mb-5" v-for="(product, i) in inventory" :key="i">
                  <div class="card h-100">
                      <!-- Product image-->
                      <img class="card-img-top" :src="('./img/450/'+product.photo)" :alt="product.name" />
                      <!-- Product details-->
                      <div class="card-body p-4">
                          <div class="text-center">
                              <!-- Product name-->
                              <h5 class="fw-bolder">{{ product.name }}</h5>
                              <!-- Product price-->
                              ${{ product.price.toFixed(2) }}
                          </div>
                      </div>
                      <!-- Product actions-->
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="text-center">
                              <input type="number" class="form-control qt" v-model.number="product.quantity">
                              <a class="btn btn-outline-dark mt-auto" @click="addToCart(product.name, i)">Add to cart</a>
                             <p><router-link :to="'product/'+product.name">See more</router-link></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  props: ['inventory', 'addToCart']
}
</script>
