<template>
  <div class="loading" v-show="loading">
    <i class="fa fa-spinner icon1 text-6xl"></i>
    <p>Loading ...</p>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    show() {
      this.loading = true;
    },
    hide() {
      this.loading = false;
    }
  }
};
</script>
