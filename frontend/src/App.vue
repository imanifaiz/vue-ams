<template>
  <div id="app" class="mb-8">
    <header
      class="relative flex justify-between items-center h-16 bg-white mb-8"
      role="banner"
    >
      <div class="container flex items-center m-auto">
        <div class="flex items-center">
          <a
            href="/"
            title="Livewire home"
            class="items-center inline-flex no-underline"
          >
            <img
              src="./assets/transformer.svg"
              style="width:auto;height:36px"
              class="mr-4"
            />
            <h1 class="font-semibold text-xl">AMS</h1>
          </a>
        </div>

        <div
          class="hidden sm:flex items-center justify-end flex-1 text-sm text-right md:pl-10 sm:text-base"
        >
          <router-link
            to="/"
            class="ml-3 text-blue-800 sm:ml-6 no-underline"
            active-class="text-blue-500 border-b-2 border-blue-500"
            exact
          >
            Home
          </router-link>
          <router-link
            to="/hht"
            class="ml-3 text-blue-800 sm:ml-6 no-underline"
            active-class="text-blue-500 border-b-2 border-blue-500"
          >
            HHT
          </router-link>
          <router-link
            to="/hhp"
            class="ml-3 text-blue-800 sm:ml-6 no-underline"
            active-class="text-blue-500 border-b-2 border-blue-500"
          >
            HHP
          </router-link>
          <router-link
            to="/repairs"
            class="ml-3 text-blue-800 sm:ml-6 no-underline"
            active-class="text-blue-500 border-b-2 border-blue-500"
          >
            Repairs Log
          </router-link>
          <router-link
            to="/districts"
            class="ml-3 text-blue-800 sm:ml-6 no-underline"
            active-class="text-blue-500 border-b-2 border-blue-500"
          >
            District
          </router-link>
          <router-link
            to="/pma"
            class="ml-3 text-blue-800 sm:ml-6 no-underline"
            active-class="text-blue-500 border-b-2 border-blue-500"
          >
            PMA
          </router-link>
        </div>
      </div>
    </header>

    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      :duration="150"
      mode="out-in"
    >
      <router-view class="container m-auto" :key="$route.path" />
    </transition>

    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.$alert.info("Welcome, John!");
  }
};
</script>
