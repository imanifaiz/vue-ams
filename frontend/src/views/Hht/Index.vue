<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">HHT</h1>
      <x-btn class="btn-sm btn-icon" :to="`/${$route.meta.resource}/create`">
        Add HHT<i class="fa fa-plus ml-1"></i>
      </x-btn>
    </div>

    <x-table
      :columns="columns"
      :rows="data"
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
            <td>
              <router-link :to="`/${$route.meta.resource}/${d.id}`">
                {{ d.serial_no || "-" }}
              </router-link>
            </td>
            <td>{{ d.pma ? d.pma.hhp.serial_no : "-" }}</td>
            <td>{{ d.pma ? d.pma.name : "-" }}</td>
            <td>{{ d.pma ? d.pma.district.name : "-" }}</td>
          </tr>
        </tbody>
      </template>
    </x-table>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue";
import Table from "@/components/Table.vue";
import { indexPage } from "./../../lib/mixin";

export default {
  name: "HHT",
  mixins: [indexPage],
  components: {
    "x-btn": Button,
    "x-table": Table
  },

  data() {
    return {
      columns: ["Serial No", "HHP", "PMA", "District"]
    };
  }
};
</script>
