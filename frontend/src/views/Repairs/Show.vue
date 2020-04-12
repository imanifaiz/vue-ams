<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Repair Details</h1>
      <div>
        <x-btn :to="`/${$route.meta.resource}`" class="btn-sm">
          <i class="fa fa-arrow-left"></i>
        </x-btn>
        <x-btn :to="`/${$route.meta.resource}/${$route.params.id}/edit`" class="btn-sm">
          Edit
          <i class="fa fa-edit ml-2"></i>
        </x-btn>
        <x-delete-btn
          class="btn-error btn-sm"
          :resource="$route.meta.resource"
          :data-id="$route.params.id"
          message="Deleting this record cannot be undone."
          @onDeleted="$router.push(`/${$route.meta.resource}`)"
        >
          Delete
          <i class="fa fa-trash ml-2"></i>
        </x-delete-btn>
      </div>
    </div>

    <div class="card-body">
      <div class="grid grid-cols-3 gap-4 border-b py-4">
        <div class="info-group">
          <label for class="info-label">Device Type:</label>
          <p>{{ model.device_type }}</p>
        </div>

        <div class="info-group">
          <label for class="info-label">Serial No:</label>
          <p>{{ model.serial_no }}</p>
        </div>

        <div class="info-group">
          <label for class="info-label">Status:</label>
          <p>{{ model.status }}</p>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 border-b py-4">
        <div class="info-group">
          <label for class="info-label">Name:</label>
          <p>{{ model.pma_name }}</p>
        </div>
        <div class="info-group">
          <label for class="info-label">Code:</label>
          <p>{{ model.pma_code }}</p>
        </div>
        <div class="info-group">
          <label for class="info-label">ID:</label>
          <p>{{ model.pma_id }}</p>
        </div>
      </div>

      <div class="border-b py-4">
        <div class="info-group">
          <label for class="info-label">Reason:</label>
          <p>{{ model.reason }}</p>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 border-b py-4">
        <div class="info-group">
          <label for class="info-label">Reported At:</label>
          <p>{{ model.reported_at || '-' }}</p>
        </div>
        <div class="info-group">
          <label for class="info-label">Reparied At:</label>
          <p>{{ model.repaired_at || '-' }}</p>
        </div>
        <div class="info-group">
          <label for class="info-label">Returned At:</label>
          <p>{{ model.returned_at || '-' }}</p>
        </div>
      </div>

      <div class="py-4">
        <div class="info-group">
          <label for class="info-label">Remarks:</label>
          <p>{{ model.remark || '-' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from "vue";
import { _axios } from "./../../lib/lib";
import XBtn from "@/components/Button";
import XDeleteBtn from "@/components/ConfirmDeleteButton.vue";

export default {
  name: "ShowRepair",

  components: { XBtn, XDeleteBtn },

  data() {
    return {
      columns: ["Name", "PMA Code", "PMA ID", "District", "Action"],
      model: {
        repairable: {},
        pma: {}
      },
      pagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        last_page: 1,
        per_page: 3,
        total: 10
      }
    };
  },

  beforeRouteUpdate(to, from, next) {
    _axios.get(`${to.meta.resource}/${to.params.id}`).then(({ data }) => {
      this.setData(data);
      next();
    });
  },

  beforeRouteEnter(to, from, next) {
    _axios.get(`${to.meta.resource}/${to.params.id}`).then(({ data }) => {
      next(vm => {
        vm.setData(data);
      });
    });
  },

  mounted() {
    this.loadData();
  },

  methods: {
    setData(data) {
      this.$set(this.$data, "model", data.data);
    },
    loadData() {
      // const pagination = this.pagination;

      this.$axios
        .get(`${this.$route.meta.resource}/${this.$route.params.id}`)
        .then(({ data }) => {
          this.setData(data);

          // this.pagination.page = data.current_page;
          // this.pagination.last_page = data.last_page;
          // this.pagination.per_page = data.per_page;
          // this.paginatino.total = data.total;
        })
        .catch(err => {
          console.log(err);
        });
    },
    edit(data) {
      console.log("edit", data);
    },
    remove(data) {
      console.log("delete", data);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
