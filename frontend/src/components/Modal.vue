<template>
  <portal to="modals" v-if="show">
    <div class="modal-backdrop" v-show="show">
      <div class="modal" :class="modalClass">
        <div class="modal-header">
          <slot name="header">
            <h4 class="modal-title">{{ title }}</h4>
            <span @click="dismiss()" class="modal-close"><i class="fa fa-times"></i></span>
          </slot>
        </div>

        <div class="modal-body">
          <slot></slot>
        </div>

        <slot name="footer"></slot>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  name: "Modal",
  props: ["show", "title", "modalClass"],
  methods: {
    dismiss() {
      this.$emit("close")
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: show => {
        if (show) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  created() {
    const escHandler = e => {
      if (e.key === "Escape" && this.show) {
        this.dismiss();
      }
    }

    document.addEventListener("keydown", escHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escHandler);
    });
  }
}
</script>

<style>

</style>