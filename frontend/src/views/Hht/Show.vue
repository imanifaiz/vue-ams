<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h1 class="card-title">Serial No: {{ model.serial_no || '-' }}</h1>
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
            <label for class="info-label">PMA Name:</label>
            <p>{{ model.pma ? model.pma.name : '-' }}</p>
          </div>
          <div class="info-group">
            <label for class="info-label">PMA Code:</label>
            <p>{{ model.pma ? model.pma.pma_code : '-' }}</p>
          </div>
          <div class="info-group">
            <label for class="info-label">PMA ID:</label>
            <p>{{ model.pma ? model.pma.pma_id : '-' }}</p>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4 py-4">
          <div class="info-group">
            <label for class="info-label">District:</label>
            <p>{{ model.pma ? model.pma.district.name : '-' }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h1 class="card-title">Previous Owner</h1>
      </div>

      <x-table
        :columns="['PMA', 'PMA Code', 'PMA ID', 'District']"
        :rows="model.histories"
        @onRequest="loadData"
        :pagination.sync="pagination"
      >
        <template v-slot:header="{ columns }">
          <thead>
            <tr>
              <th v-for="col in columns" :key="col">{{ col }}</th>
            </tr>
          </thead>
        </template>

        <template v-slot:body="{ rows }">
          <tbody>
            <tr v-for="(d, index) in rows" :key="index">
              <td>{{ d.pma.name }}</td>
              <td>{{ d.pma.pma_code }}</td>
              <td>{{ d.pma.pma_id }}</td>
              <td>{{ d.pma.district.name }}</td>
            </tr>
          </tbody>
        </template>
      </x-table>
    </div>

    <div class="card">
      <div class="card-header">
        <h1 class="card-title">Repair Logs</h1>
        <div>
          <x-btn :to="`/${$route.meta.resource}`" class="btn-sm">
            Add Repair Log
            <i class="fa fa-plus ml-2"></i>
          </x-btn>
        </div>
      </div>

      <x-table
        :columns="['Repaired At', 'Returned At', 'Reason', 'PMA', 'District']"
        :rows="model.repairs"
        @onRequest="loadData"
        :pagination.sync="pagination"
      >
        <template v-slot:header="{ columns }">
          <thead>
            <tr>
              <th v-for="col in columns" :key="col">{{ col }}</th>
            </tr>
          </thead>
        </template>

        <template v-slot:body="{ rows }">
          <tbody>
            <tr v-for="(d, index) in rows" :key="index">
              <td>{{ d.repaired_at || '-' }}</td>
              <td>{{ d.returned_at || '-' }}</td>
              <td>{{ d.reason }}</td>
              <td>{{ d.pma.name }}</td>
              <td>{{ d.pma.district.name }}</td>
            </tr>
          </tbody>
        </template>
      </x-table>
    </div>
  </div>
</template>

<script>
import { _axios } from "./../../lib/lib";
import XBtn from "@/components/Button";
import XDeleteBtn from "@/components/ConfirmDeleteButton.vue";
import XTable from "@/components/Table.vue";

export default {
  name: "ShowHHT",

  components: { XBtn, XDeleteBtn, XTable },

  data() {
    return {
      columns: ["Name", "PMA Code", "PMA ID", "District", "Action"],
      model: {
        pma: {
          district: {},
          hhp: {}
        },
        histories: {},
        repairs: {}
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
