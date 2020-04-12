<template>
  <on-click-outside :do="close">
    <div class="search-select" :class="{ 'is-active': isOpen }">
      <button
        class="search-select-input form-input"
        ref="button"
        @click="open"
        type="button"
      >
        <span v-if="value">{{ value | label }}</span>
        <span v-else class="search-select-placeholder">{{ placeholder }}</span>
      </button>
      <div class="search-select-dropdown" ref="dropdown" v-show="isOpen">
        <input
          type="text"
          class="search-select-search"
          v-model="search"
          ref="search"
          @keydown.esc="close"
          @keydown.tab.prevent
        />
        <ul
          ref="options"
          v-show="filteredOptions.length > 0"
          class="search-select-options"
        >
          <li
            class="search-select-option"
            v-for="(option, i) in filteredOptions"
            :key="i"
            :class="{ 'is-active': value === option }"
            @click="select(option)"
          >
            {{ option | label }}
          </li>
        </ul>
        <div v-show="filteredOptions.length === 0" class="search-select-empty">
          No results found
        </div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "@/components/OnClickOutside.vue";
import Popper from "popper.js";

export default {
  name: "SearchSelect",
  components: {
    OnClickOutside
  },
  props: ["placeholder", "value", "options", "filterFunction"],
  data() {
    return {
      isOpen: false,
      search: ""
    };
  },
  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy();
    }
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options);
    }
  },
  filters: {
    label(value) {
      return value instanceof Object ? value.label : value;
    }
  },
  methods: {
    open() {
      if (this.isOpen) {
        return;
      }
      this.isOpen = true;

      this.$nextTick(() => {
        this.setupPopper();
        this.$refs.search.focus();
      });
    },
    setupPopper() {
      if (this.popper === undefined) {
        this.popper = new Popper(this.$refs.button, this.$refs.dropdown, {
          placement: "bottom"
        });
      } else {
        this.popper.scheduleUpdate();
      }
    },
    close() {
      if (!this.isOpen) {
        return;
      }
      this.isOpen = false;
      this.$refs.button.focus();
    },
    select(option) {
      this.$emit("input", option);
      this.search = "";
      this.close();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-select {
  position: relative;
}
.search-select-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-align: left;
  display: block;
  width: 100%;
  /* border-width: 1px; */
  padding: 0.5rem 0.75rem;
  /* background-color: #fff; */
  border-radius: 0.125rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.search-select.form-error {
  background-color: transparent !important;
  outline-color: none !important;
}
.form-error .search-select-input {
  background-color: #fed7d7;
  outline-color: #fed7d7;
}
.search-select-input:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
}
.search-select-placeholder {
  color: #8795a1;
}
.search-select.is-active .search-select-input {
  -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
}
.search-select-dropdown {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  position: absolute;
  right: 0;
  left: 0;
  background-color: #3d4852;
  padding: 0.5rem;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 50;
}
.search-select-search {
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #606f7b;
  color: #fff;
  border-radius: 0.25rem;
}
.search-select-search:focus {
  outline: 0;
}
.search-select-options {
  list-style: none;
  padding: 0;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 14rem;
}
.search-select-option {
  padding: 0.5rem 0.75rem;
  color: #fff;
  cursor: pointer;
  border-radius: 0.25rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.search-select-option:hover {
  background-color: #606f7b;
}
.search-select-option.is-active,
.search-select-option.is-active:hover {
  background-color: #3490dc;
}
.search-select-empty {
  padding: 0.5rem 0.75rem;
  color: #b8c2cc;
}
</style>
