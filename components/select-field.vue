<template>
  <!--Select with pure css-->
  <div class="select">
    <select
      class="select-text pl-8"
      :required="required"
      @change="changeSelectValue"
    >
      <option v-for="(item, index) in options" :key="index" :value="item" :selected="item === selected">
        {{ item }}
      </option>
    </select>
    <span class="select-highlight" />
    <span class="select-bar" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Select'
    },
    required: Boolean,
    options: {
      type: Array,
      default: () => []
    },
    selected: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeSelectValue (e) {
      this.$emit('data', e.target.value);
    }
  }
};
</script>

<style scoped>
/* select starting stylings ------------------------------*/
.select {
  font-size: 14px;
  position: relative;
  width:100px;
}

.select-text {
  position: relative;
  font-weight: normal;
  background-color: transparent;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 13px !important;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ccc;
}

/* Remove focus */
.select-text:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}

/* Use custom arrow */
.select .select-text {
  appearance: none;
  -webkit-appearance: none;
}

.select:after {
  position: absolute;
  top: 18px;
  right: 10px;
  /* Styling the down arrow */
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.12);
  pointer-events: none;
}

/* LABEL ======================================= */
.select-label {
  color: #999;
  font-size: 13px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
.select-text:focus ~ .select-label,
.select-text:valid ~ .select-label {
  top: -9px;
  font-size: 10px;
  color: #4dba87;
  padding: 0 3px;
}

.select-text:focus ~ select:after {
  border-bottom: 6px solid rgba(0, 0, 0, 0.12);
  border-top: 0px solid rgba(0, 0, 0, 0.12);
}

/* BOTTOM BARS ================================= */
.select-bar {
  position: relative;
  display: block;
  width: 100%;
}

.select-bar:before,
.select-bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #4dba87;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.select-bar:before {
  left: 50%;
}

.select-bar:after {
  right: 50%;
}

/* active state */
.select-text:focus ~ .select-bar:before,
.select-text:focus ~ .select-bar:after {
  width: 50%;
}
</style>
