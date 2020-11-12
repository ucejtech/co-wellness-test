<template>
  <div class="p-relative flex">
    <div class="p-relative mr-1">
      <input-field
        :id="`text-${id}`"
        type="text"
        :required="true"
        label="Address"
        tooltip="Enter Address"
        :hasdropdown="searchResults.length > 0 ? true : false"
        :value="location"
        @data="(e) => search(e)"
        @blur="openNumber = true"
      />
      <span class="p-absolute clear" @click="clear()">
        <i class="mdi mdi-close-circle" />
      </span>
    </div>
    <ul v-if="searchResults.length > 0" class="p-absolute dropdown pt-1">
      <li v-for="(result, i) in searchResults" :key="i" class=" px-2" @click="setLocation(result)">
        {{ formatText(result.description) }}
      </li>
    </ul>
    <input-field
      v-if="openNumber"
      :id="`number-${id}`"
      type="text"
      :required="true"
      label="No."
      tooltip="Enter Address"
      width="100px"
      :showtooltip="false"
      :hasdropdown="searchResults.length > 0 ? true : false"
      @blur="(val) => appendNumber(val)"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      openNumber: false,
      location: '',
      searchResults: [],
      autocompleteService: null
    };
  },
  mounted () {
    this.autocompleteService = new window.google.maps.places.AutocompleteService();
  },
  methods: {
    clear () {
      this.location = '';
      this.appendNumber('');
    },
    formatText (text) {
      return text.length > 27 ? `${text.slice(0, 30)}...` : text;
    },
    appendNumber (val) {
      this.location = `${val} ${this.location}`;
      this.openNumber = false;
      this.$emit('data', this.location);
    },
    search (newValue) {
      if (newValue) {
        this.location = newValue;
        this.autocompleteService.getPlacePredictions({
          fields: ['name', 'geometry'],
          input: newValue,
          types: ['establishment', 'geocode']
        }, this.displaySuggestions);
      } else {
        this.searchResults = [];
      }
    },
    displaySuggestions (predictions, status) {
      if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        this.searchResults = [];
        return;
      }
      this.searchResults = predictions;
    },
    setLocation (result) {
      this.searchResults = [];
      this.location = result.description;
    }
  }
};
</script>

<style scoped>
.dropdown {
    z-index: 11;
    text-align: left;
    background: #eeeeee;
    border-radius: 0 0 7px 7px;
    width: 100%;
    max-height: 140px;
    overflow-y: auto;
}
.dropdown::-webkit-scrollbar {
  width: 5px;
}

.clear {
  cursor: pointer;
  right: 0;
  top: 9px;
  background: #fff;
}

.dropdown li {
    font-size: 14px;
    width: 100%;
    cursor: pointer;
    overflow-x: hidden;
    text-overflow: ellipsis;
}

.dropdown li:hover {
    background: #555;
    color: #fff;
}

/* Track */
.dropdown::-webkit-scrollbar-track {
  background: #eee;
}

/* Handle */
.dropdown::-webkit-scrollbar-thumb {
  background: #ccc;
  width: 2px !important;
  border-radius: 4px;
}

/* Handle on hover */
.dropdown::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
