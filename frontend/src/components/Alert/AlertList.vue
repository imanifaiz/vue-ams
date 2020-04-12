<template>
  <div class="alert-container" v-show="alerts.length">
    <div class="alert-container-inner">
      <transition-group
        enter-active-class="animated slideUp"
        leave-active-class="animated fadeOut"
        :duration="350"
        mode="out-in"
      >
        <x-alert-item
          :alert="alert"
          v-for="(alert, idx) in alerts"
          :key="alert.id"
          @close="onClose(idx)"
        ></x-alert-item>
      </transition-group>
    </div>
  </div>
</template>

<script>
import XAlertItem from "./Alert.vue";

export default {
  name: "AlertList",
  components: { XAlertItem },
  data() {
    return {
      counter: 1,
      alerts: []
    };
  },

  methods: {
    onClose(idx) {
      this.alerts.splice(idx, 1);
    },
    getNewId() {
      return this.counter++;
    },
    push(type, text, duration = 3000) {
      const id = this.getNewId();

      const alert = {
        id: id,
        type: type,
        text: text,
        duration: duration
      };

      this.alerts.push(alert);
      return alert;
    },
    info(text, duration = 3000) {
      return this.push("info", text, duration);
    },
    success(text, duration = 3000) {
      return this.push("success", text, duration);
    },
    error(text, duration = 3000) {
      return this.push("error", text, duration);
    },
    warning(text, duration = 3000) {
      return this.push("warning", text, duration);
    }
  }
};
</script>
