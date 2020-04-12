<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">{{ mode }} {{ title }}</h1>
      <div>
        <x-btn @click="cancel()" class="btn-sm">Cancel</x-btn>
        <x-btn @click="save()" class="btn-sm btn-primary">Save</x-btn>
      </div>
    </div>

    <div class="card-body">
      <div class="grid grid-cols-3 gap-4 border-b py-4">
        <div class="form-group">
          <label for="" class="form-label">
            <span>Serial No:</span>
          </label>
          <input 
            type="text" 
            class="form-input" 
            v-model="form.serial_no"
            :class="{'form-error': errors['serial_no']}"
          >
        </div>
        <div class="form-group">
          <label for="" class="form-label">
            <span>Status:</span>
          </label>
          <input 
            type="text" 
            class="form-input" 
            v-model="form.status"
            :class="{'form-error': errors['status']}"
          >
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 py-4">
        <div class="form-group">
          <label for="" class="form-label">
            <span>PMA:</span>
          </label>
          <x-select 
            v-model="form.pma" 
            :class="{'form-error': errors['pma']}"
            placeholder="Select PMA..." 
            :options="pmaOpts" 
            :filter-function="selectlistSearchFilter" 
           />
        </div>
        <div class="form-group">
          <label for="" class="form-label">
            <span>PMA Code:</span>
          </label>
          <input 
            type="text" 
            class="form-input" 
            disabled="disabled"
            v-model="form.pma_code"
          >
        </div>
        <div class="form-group">
          <label for="" class="form-label">
            <span>District:</span>
          </label>
          <input 
            type="text" 
            class="form-input" 
            disabled="disabled"
            v-model="form.district"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XBtn from "@/components/Button";
import XSelect from "@/components/Select";
import { formPage } from "./../../lib/mixin";

export default {
  name: "FormHHT",

  components: { XBtn, XSelect },

  data() {
    return {
      title: "HHT",
      pmaOpts: [],
      redirect: 'hht'
    };
  },

  mixins: [ formPage ],

  mounted() {
    this.loadPmaOpts();
  },

  methods: {
    selectlistSearchFilter(search, options) {
      return options.filter(option => {
        let label = option instanceof Object ? option.label : option;

        return label.toLowerCase().indexOf(search.toLowerCase()) > -1
      });
    },
    loadPmaOpts() {
      this.$axios
        .get('pma-selectlist-opts')
        .then(({ data }) => {
          this.pmaOpts = data;
        });
    },
  }
};
</script>

<style lang="scss" scoped>

</style>
