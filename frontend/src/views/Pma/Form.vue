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
          <label for class="form-label">
            <span>Name:</span>
          </label>
          <input
            type="text"
            class="form-input"
            v-model="form.name"
            :class="{'form-error': errors['name']}"
          />
        </div>
        <div class="form-group">
          <label for class="form-label">
            <span>Code:</span>
          </label>
          <input
            type="text"
            class="form-input"
            v-model="form.pma_code"
            :class="{'form-error': errors['pma_code']}"
          />
        </div>
        <div class="form-group">
          <label for class="form-label">
            <span>ID:</span>
          </label>
          <input
            type="text"
            class="form-input"
            v-model="form.pma_id"
            :class="{'form-error': errors['pma_id']}"
          />
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 py-4">
        <div class="form-group">
          <label for class="form-label">
            <span>District:</span>
          </label>
          <x-select
            v-model="form.district"
            :class="{'form-error': errors['district']}"
            placeholder="Select District..."
            :options="districtOpts"
            :filter-function="selectlistSearchFilter"
          />
        </div>
      </div>

      <!-- <div class="grid grid-cols-3 gap-4 py-4">
        <div class="form-group">
          <label for class="form-label">
            <span>HHT:</span>
          </label>
          <x-select
            v-model="form.hht"
            :class="{'form-error': errors['hht']}"
            placeholder="Select HHT..."
            :options="hhtOpts"
            :filter-function="selectlistSearchFilter"
          />
        </div>
        <div class="form-group">
          <label for class="form-label">
            <span>HHP:</span>
          </label>
          <x-select
            v-model="form.hhp"
            :class="{'form-error': errors['hhp']}"
            placeholder="Select HHP..."
            :options="hhpOpts"
            :filter-function="selectlistSearchFilter"
          />
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import XBtn from "@/components/Button";
import XSelect from "@/components/Select";
import { formPage } from "./../../lib/mixin";

export default {
  name: "FormPMA",

  components: { XBtn, XSelect },

  data() {
    return {
      title: "PMA",
      districtOpts: [],
      hhtOpts: [],
      hhpOpts: [],
      redirect: "pma"
    };
  },

  mixins: [formPage],

  created() {
    this.loadDistrictOpts();
    this.loadHhtOpts();
    this.loadHhpOpts();
  },

  methods: {
    selectlistSearchFilter(search, options) {
      return options.filter(({ label }) => {
        return label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    },
    loadDistrictOpts() {
      this.$axios.get("districts-selectlist-opts").then(({ data }) => {
        this.districtOpts = data;
      });
    },
    loadHhtOpts() {
      this.$axios.get("hht-selectlist-opts").then(({ data }) => {
        this.hhtOpts = data;
      });
    },
    loadHhpOpts() {
      this.$axios.get("hhp-selectlist-opts").then(({ data }) => {
        this.hhpOpts = data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
