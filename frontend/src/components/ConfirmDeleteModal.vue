<template>
  <x-modal
    :show="show"
    @close="closeModal()"
    title="Are you sure?"
    :modal-class="['w-1/3']"
  >
    <slot></slot>

    <div slot="footer" class="modal-footer flex justify-center">
      <x-btn class="btn-error btn-sm" @click="onDelete()">Delete</x-btn>
      <x-btn class="btn-sm" @click="closeModal()">Cancel</x-btn>
    </div>
  </x-modal>
</template>

<script>
import XModal from "@/components/Modal.vue";
import XBtn from "@/components/Button.vue";

export default {
  name: "ConfirmDeleteModal",
  props: ["show"],
  components: { XModal, XBtn },
  methods: {
    closeModal() {
      this.$emit("onClose");
    },
    onDelete() {
      this.$emit("onDelete");
    }
  }
};
</script>
