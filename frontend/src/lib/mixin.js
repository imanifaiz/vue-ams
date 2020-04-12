import { _axios, getURL } from "./lib";

const indexPage = {
  data() {
    return {
      data: [],
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
  beforeRouteEnter(to, from, next) {
    _axios.get(`${to.meta.resource}`).then(({ data }) => {
      next(vm => {
        vm.setData(data);
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    _axios.get(`${to.meta.resource}`).then(({ data }) => {
      this.setData(data);
      next();
    });
  },
  methods: {
    setData(data) {
      this.$set(this.$data, "data", data.data);
      this.$set(this.$data, "pagination", {
        page: data.current_page,
        last_page: data.last_page,
        per_page: data.per_page,
        total: data.total
      });
    },
    loadData() {
      const pagination = this.pagination;

      this.$axios
        .get(this.$route.meta.resource, {
          params: {
            ...pagination
          }
        })
        .then(({ data }) => {
          this.setData(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};

const formPage = {
  data() {
    return {
      form: {},
      errors: []
    };
  },
  computed: {
    mode() {
      return this.$route.meta.mode ? "Edit" : "Create";
    }
  },
  beforeRouteUpdate(to, from, next) {
    _axios.get(getURL(to)).then(({ data }) => {
      this.setData(data);
      next();
    });
  },

  beforeRouteEnter(to, from, next) {
    _axios.get(getURL(to)).then(({ data }) => {
      next(vm => {
        vm.setData(data);
      });
    });
  },

  methods: {
    setData(data) {
      this.$set(this.$data, "form", data);
    },

    cancel() {
      let r = this.$route.meta.resource,
        id = this.$route.params.id,
        url = `/${r}`;

      if (this.mode === "Edit") {
        url = `/${r}/${id}`;
      }

      this.$router.push(url);
    },

    save() {
      this.$spinner.show();

      const { url, method } = this.getForm();

      this.$axios({
        url: url,
        method: method,
        data: {
          ...this.form
        }
      })
        .then(({ data }) => {
          this.$alert.success(
            method === "PUT" ? "Data saved." : "Data updated."
          );

          let id = this.mode === "Edit" ? this.$route.params.id : data.id;

          this.$router.push(`/${this.redirect}/${id}`);
        })
        .catch(({ response }) => {
          if (response.status === 422) {
            this.errors = response.data;
          }
        });
    },

    getForm() {
      let r = this.$route.meta.resource,
        id = this.$route.params.id,
        url = `${r}`,
        method = "POST";

      if (this.mode === "Edit") {
        url = `${r}/${id}`;
        method = "PUT";
      }

      return { url, method };
    }
  }
};

export { indexPage, formPage };
