<template>
  <div :id="id" class="group flex">
    <span v-if="showtooltip" class="mt-6 mr-1" :title="tooltip">
      <i class="mdi mdi-help-circle-outline" :title="tooltip" />
    </span>
    <div class="input-controls">
      <input
        :required="required"
        :type="type"
        :value="value"
        @input="changeInputValue"
        @blur="(e) => $emit('blur', e.target.value)"
      >
      <span class="highlight" />
      <span class="bar" />
      <label :class="{ active: hasdropdown }">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Input'
    },
    required: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    tooltip: {
      type: String,
      required: false,
      default: 'Input Field'
    },
    value: {
      type: String,
      default: ''
    },
    hasdropdown: {
      type: Boolean,
      default: true
    },
    showtooltip: {
      type: Boolean,
      default: true
    },
    id: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  mounted () {
    document.getElementById(this.id).style.width = this.width;
  },
  methods: {
    changeInputValue (e) {
      this.$emit('data', e.target.value);
    }
  }
};
</script>

<style scoped>
/* form starting stylings ------------------------------- */
.group {
  position: relative;
}
input {
  font-size: 14px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 13px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 2em;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  /* text-align: center; */
  background: #fff;
  top: 34px;
  width: fit-content;
  left: 40%;
  font-size: 10px;
  color: #b4c688;
  padding: 0 2px;
  text-transform: uppercase;
}

input:focus ~ label.active,
input:valid ~ label.active {
  left: 75%;
}

.bar {
  position: relative;
  display: block;
  width: 100%;
}
.bar:before,
.bar:after {
  content: "";
  height: 1px;
  width: 0;
  bottom: -1px;
  position: absolute;
  background: #b4c688;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}
/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}
[class^="mdi-help"],
[class*="mdi-help"] {
    color: gray;
}
</style>
