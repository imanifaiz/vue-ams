<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Districts</h1>
      <x-btn class="btn-sm btn-icon" @click="add()">Add District<i class="fa fa-plus ml-1"></i></x-btn>
    </div>

    <x-table
      :columns="columns"
      :rows="data"
      @onRequest="loadData"
      :pagination.sync="pagination"
    >
      <template v-slot:body="{ rows }">
        <tbody>
          <tr v-for="(d, index) in rows" :key="index">
            <td>{{ d.name }}</td>
            <td class="action-col">
              <x-btn class="btn-sm btn-icon" @click="edit(d)"><i class="fa fa-pencil-alt"></i></x-btn>

              <x-delete-btn 
                class="btn-error btn-sm" 
                :resource="$route.meta.resource" 
                :data-id="d.id" 
                message="Deleting this record cannot be undone."
                @onDeleted="loadData()" 
              >
                <i class="fa fa-trash"></i>
              </x-delete-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </x-table>

    <x-form-modal 
      title="Edit" 
      :modal-class="['w-1/3']"
      :form="form" 
      :show.sync="show" 
      :onSubmit="submit" 
      @onShow="focusInput()"
      @onSuccess="onSuccess()" 
      @onError="onError()" 
      @onClose="closeModal()"
    >
      <template v-slot:default="{ form, errors }">
        <div class="form-group">
          <label for="" class="form-label">
            <span>Name:</span>
          </label>
          <input type="text" class="form-input" :class="{'form-error': errors['name']}" v-model="form.name" ref="input">
        </div>
      </template>
    </x-form-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import XTable from "@/components/Table.vue";
import XBtn from "@/components/Button.vue";
import XDeleteBtn from "@/components/ConfirmDeleteButton.vue";
import XFormModal from "@/components/FormModal.vue";

export default {
  name: "District",
  components: {
    XTable,
    XBtn,
    XDeleteBtn,
    XFormModal
  },

  data() {
    return {
      columns: ["Name", "Action"],
      data: [],
      show: false,
      form: { id: '', name: '' },
      errors: [],
      pagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        last_page: 1,
        per_page: 3,
        total: 10
      }
    }
  },

  mounted() {
    this.loadData()
  },

  computed: {
    method() {
      return this.form.id ? "PUT" : "POST";
    }
  },

  methods: {
    loadData() {
      const pagination = this.pagination;

      this.$axios.get('districts', { params: { ...pagination } })
        .then(({ data }) => {
          this.data = data.data;
          this.pagination.page = data.current_page;
          this.pagination.last_page = data.last_page;
          this.pagination.per_page = data.per_page;
          this.pagination.total = data.total;
        })
        .catch(err => {
          console.log(err)
        })
    },
    add() {
      this.show = true;
      this.focusInput();
    },
    edit(data) {
      this.form.id = data.id;
      this.form.name = data.name;
      this.show = true;
    },
    focusInput() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    submit() {
      let url = this.form.id ? `districts/${this.form.id}` : "districts";
      
      this.$spinner.show();

      return this.$axios({
        url: url,
        method: this.method,
        data: this.form
      });
    },
    // eslint-disable-next-line
    onSuccess(response) {
      this.loadData();

      this.$alert.success(this.method === "PUT" ? "Data saved." : "Data updated.");
    },
    onError(error) {
      console.log(error)
    },
    closeModal() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.table th:last-child {
  width: 80px
}
</style>