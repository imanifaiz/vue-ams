<template>
  <x-modal
    :show="show"
    @close="closeModal()"
    title="Edit"
    :modal-class="['w-1/3']"
  >
    <slot :form="form" :errors="errors"></slot>

    <div slot="footer" class="modal-footer flex justify-center">
      <x-btn class="btn-primary btn-sm" @click="submit()">Save</x-btn>
      <x-btn class="btn-sm" @click="closeModal()">Cancel</x-btn>
    </div>
  </x-modal>
</template>

<script>
import XModal from "@/components/Modal.vue";
import XBtn from "@/components/Button.vue";

export default {
  name: "FormModal",
  props: ["show", "title", "onSubmit", "form"],
  data() {
    return {
      errors: []
    };
  },
  components: { XModal, XBtn },
  watch: {
    show(newVal) {
      if (newVal) {
        this.$emit("onShow");
      } else {
        this.reset();
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit("onClose");
      this.reset();
    },
    submit() {
      this.$spinner.show();

      this.onSubmit()
        .then(response => {
          this.$emit("onSuccess", response);

          setTimeout(() => {
            this.$spinner.hide();
          }, 100);

          this.closeModal();
        })
        .catch(({ response }) => {
          if (response.status === 422) {
            this.$emit("onError", response.data);
            this.errors = response.data;
          }
        });
    },
    reset() {
      Object.keys(this.form).forEach(i => {
        this.form[i] = "";
      });
      this.errors = [];
    }
  }
};
</script>
