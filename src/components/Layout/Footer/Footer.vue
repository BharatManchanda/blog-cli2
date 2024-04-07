<template>
  <div class="bg-dark">
    <b-container>
      <div class="my-2">
          <div class="d-flex justify-content-between py-3">
            <div>
              <h4 class="text-white font-weight-bold">Logos</h4>
            </div>
            <b-navbar-nav class="d-flex flex-row">
              <router-link class="text-white my-auto d-inline-block mr-2" to='/'>Home</router-link>
              <router-link class="text-white my-auto d-inline-block mr-2" to='/blog'>Blogs</router-link>
              <router-link class="text-white my-auto d-inline-block mr-2" to='/about'>About</router-link>
              <router-link class="text-white my-auto d-inline-block mr-2" to='/contacct-us'>Contact Us</router-link>
            </b-navbar-nav>
          </div>
      </div>
  
      <div class="bg-white p-4 my-2 rounded">
        <b-container align="center">
          <b-row>
            <b-col lg="6">
              <h2 class="font-weight-bolder m-0">Subscribe to our news letter to get latest updates and news</h2>
            </b-col>
            <b-col lg="3" class="m-auto">
              <b-form-group
                id="input-group-1"
                label-for="input-1"
                class="m-0"
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  placeholder="Enter email"
                  required
                  class="m-0"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col lg="3" class="m-auto">
              <button type="button" class="btn btn-danger">Subscribe <i class="bi bi-arrow-right-circle-fill"></i></button>
            </b-col>
          </b-row>
        </b-container>
      </div>
  
      <div class="d-flex justify-content-between align-items-center mt-2 pb-2">
        <div>
          <p class="text-white font-weight-bold m-0">Finstreet 118 2561 abctown</p>
          <p class="text-white font-weight-bold m-0">example@femail.com  001 21345 442</p>
        </div>
        <div lg="6" class="text-right">
          <i class="bi bi-facebook ml-3 text-white lead"></i>
          <i class="bi bi-whatsapp ml-3 text-white lead"></i>
          <i class="bi bi-twitter ml-3 text-white lead"></i>
          <i class="bi bi-instagram ml-3 text-white lead"></i>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: 'SiteFooter',
    }
</script>

<style>
  a.text-white.my-auto.d-inline-block.mr-2.router-link-exact-active.router-link-active {
    text-decoration: underline;
    font-weight: bold;
    text-decoration-thickness: 11%;
}
</style>