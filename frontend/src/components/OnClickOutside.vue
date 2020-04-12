<script>
export default {
  name: "OnClickOutside",
  props: ["do"],
  mounted() {
    const listener = e => {
      if (e.target === this.$el || this.$el.contains(e.target)) {
        return;
      }

      this.do();
    };

    document.body.addEventListener("click", listener);
    this.$once("hook:beforeDestroy", () => {
      document.body.removeEventListener("click", listener);
    });
  },
  render() {
    return this.$slots.default[0];
  }
};
</script>
