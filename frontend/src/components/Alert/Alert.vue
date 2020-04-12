<template>
  <div class="alert-wrap">
    <div class="alert-item">
      <div :class="['alert-content', `alert-${alert.type}`]">
        <div class="alert-icon">
          <i :class="['fa', `fa-${iconClass}`]"></i>
        </div>
        <div class="alert-text">{{ alert.text }}</div>
        <div class="alert-close" @click="close"><i class="fa fa-times"></i></div>
        <!-- <div class="alert-close" @click="close" v-if="alert.duration === 0"><i class="fa fa-times"></i></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    alert: {
      required: true
    }
  },
  data() {
    return {
      icon: "info-circle"
    }
  },
  computed: {
    iconClass() {
      const iconClass = {
        "success": "check-circle",
        "error": "times-circle",
        "warning": "exclamation-triangle",
        "info": "info-circle"
      }

      return iconClass[this.alert.type] || this.icon;
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    startTimer() {
      if (this.alert.duration === 0) return;

      setTimeout(() => {
        this.$emit("close", this.alert.id);
      }, this.alert.duration);
    },
    close() {
      this.$emit("close", this.alert.id);
    }
  }
}
</script>