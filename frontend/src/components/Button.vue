<script>
export default {
  name: "Button",
  props: {
    tag: {
      default: "a"
    },
    btnClass: {
      type: Array,
      default() {
        return [];
      }
    },
    to: {
      default: false
    }
  },
  render(createElement) {
    let options = {
      class: "btn"
    };

    if (this.to) {
      options.on = { click: () => this.$router.push(this.to) };
    } else {
      options.on = { click: () => this.$emit("click") };
    }

    return createElement(this.tag, options, this.$slots.default);
  }
};
</script>
