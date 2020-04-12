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
            <span>Device Type:</span>
          </label>
          <x-select
            ref="dtype"
            v-model="form.device_type"
            :class="{'form-error': errors['device']}"
            placeholder="Select Device..."
            :options="['HHP', 'HHT']"
            :filter-function="selectlistSearchFilter"
            @input="loadDeviceOpts()"
          />
        </div>
        <div class="form-group">
          <label for class="form-label">
            <span>Device:</span>
          </label>
          <x-select
            v-model="form.device"
            :class="{'form-error': errors['device']}"
            placeholder="Select Device..."
            :options="deviceOpts"
            :filter-function="selectlistSearchFilter"
          />
        </div>
        <div class="form-group">
          <label for class="form-label">
            <span>Status:</span>
          </label>
          <input
            type="text"
            class="form-input"
            v-model="form.status"
            :class="{'form-error': errors['status']}"
          />
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 border-b py-4">
        <div class="form-group">
          <label for class="form-label">
            <span>PMA:</span>
          </label>
          <x-select
            v-model="form.pma"
            :class="{'form-error': errors['pma']}"
            placeholder="Select PMA..."
            :options="pmaOpts"
            :filter-function="selectlistSearchFilter"
            @input="setPmaDetails"
          />
        </div>
        <div class="form-group">
          <label for class="form-label">
            <span>PMA Code:</span>
          </label>
          <input
            type="text"
            class="form-input"
            disabled="disabled"
            v-model="form.pma_code"
            :class="{'form-error': errors['name']}"
          />
        </div>
        <div class="form-group">
          <label for class="form-label">
            <span>PMA ID:</span>
          </label>
          <input
            type="text"
            class="form-input"
            disabled="disabled"
            v-model="form.pma_id"
            :class="{'form-error': errors['name']}"
          />
        </div>
      </div>

      <div class="grid gap-4 border-b py-4">
        <div class="form-group">
          <label for class="form-label">
            <span>Reason:</span>
          </label>
          <textarea
            class="form-input"
            v-model="form.reason"
            rows="5"
            :class="{'form-error': errors['reason']}"
          ></textarea>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 border-b py-4">
        <div class="form-group">
          <label for class="form-label">
            <span>Reported At:</span>
          </label>
          <input
            type="date"
            class="form-input"
            v-model="form.reported_at"
            :class="{'form-error': errors['reported_at']}"
          />
        </div>
        <div class="form-group">
          <label for class="form-label">
            <span>Repaired At:</span>
          </label>
          <input
            type="date"
            class="form-input"
            v-model="form.repaired_at"
            :class="{'form-error': errors['repaired_at']}"
          />
        </div>
        <div class="form-group">
          <label for class="form-label">
            <span>Returned At:</span>
          </label>
          <input
            type="date"
            class="form-input"
            v-model="form.returned_at"
            :class="{'form-error': errors['returned_at']}"
          />
        </div>
      </div>

      <div class="grid gap-4 py-4">
        <div class="form-group">
          <label for class="form-label">
            <span>Remarks:</span>
          </label>
          <textarea class="form-input" rows="5" v-model="form.remarks"></textarea>
        </div>
      </div>

      <!-- <div class="grid grid-cols-3 gap-4 py-4">
        <div class="form-group">
          <label for="" class="form-label">
            <span>HHT:</span>
          </label>
          <x-select 
            v-model="form.hht" 
            :class="{'form-error': errors['hht_id']}"
            placeholder="Select HHT..." 
            :options="hhtOpts" 
            :filter-function="selectlistSearchFilter" 
           />
        </div>
        <div class="form-group">
          <label for="" class="form-label">
            <span>HHP:</span>
          </label>
          <x-select 
            v-model="form.hhp" 
            :class="{'form-error': errors['hhp_id']}"
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
      title: "Repair Log",
      deviceOpts: [],
      pmaOpts: [],
      redirect: "repairs"
    };
  },

  mixins: [formPage],

  mounted() {
    this.loadPmaOpts();
    this.$refs.dtype.$emit("input");
  },

  methods: {
    selectlistSearchFilter(search, options) {
      return options.filter(option => {
        let label = option instanceof Object ? option.label : option;

        return label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    },
    loadPmaOpts() {
      this.$axios.get("pma-details-selectlist-opts").then(({ data }) => {
        this.pmaOpts = data;
      });
    },
    loadDeviceOpts() {
      let url =
        this.form.device_type === "HHP"
          ? "hhp-selectlist-opts"
          : "hht-selectlist-opts";

      this.$axios.get(url).then(({ data }) => {
        this.deviceOpts = data;
      });
    },
    setPmaDetails(pma) {
      this.form.pma_code = pma.pma_code;
      this.form.pma_id = pma.pma_id;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
