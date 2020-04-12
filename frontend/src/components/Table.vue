<template>
  <div>
    <table class="table">
      <slot name="header" :columns="columns">
        <thead>
          <tr>
            <th v-for="col in columns" :key="col">{{ col }}</th>
          </tr>
        </thead>
      </slot>
      <slot name="body" :rows="rows">
        <tbody>
          <tr v-for="(row, idx) in rows" :key="idx">
            <td v-for="(col, cidx) in row" :key="cidx">{{ col }}</td>
          </tr>
        </tbody>
      </slot>
    </table>

    <div class="pagination" @show="prev_page !== null || next_page !== null">
      <a
        href="#"
        v-for="i in pagination.last_page"
        v-show="pagination.last_page > 1"
        :key="i"
        :class="{ active: i == pagination.page }"
        @click.prevent="request(i)"
      >
        {{ i }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["columns", "rows", "next_page", "prev_page", "pagination"],
  methods: {
    request(page) {
      this.pagination.page = page;

      this.$emit("onRequest");
    }
  }
};
</script>
