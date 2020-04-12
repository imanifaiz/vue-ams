<template>
  <x-btn class="btn-error btn-sm" @click="show = true">
    <slot></slot>

    <x-confirm-delete-modal :show="show" @onClose="show = false" @onDelete="onDelete" :message="message" :modal-class="['w-1/3']">
      {{ message }}
    </x-confirm-delete-modal>
  </x-btn>
</template>

<script>
import XConfirmDeleteModal from "@/components/ConfirmDeleteModal.vue";
import XBtn from "@/components/Button.vue";

export default {
  name: "ConfirmDeleteButton",
  props: ["message", "resource", "dataId"],
  components: { XConfirmDeleteModal, XBtn },
  data() {
    return {
      show: false
    }
  },
  methods: {
    onDelete() {
      this.$axios.delete(`${this.resource}/${this.dataId}`)
        .then(({ data }) => {
          this.$alert.success(data.message);
          this.$emit("onDeleted");
        })
        .catch(error => {
          console.log(error);
        });
      
        this.show = false;
    }
  }
}
</script>