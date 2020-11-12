<template>
  <div class="container text-center">
    <div class="card bg-white px-8 py-6 mt-3">
      <h1>
        Co-Wellness Test
      </h1>
      <div v-for="(address, i) in addresses" :key="i" class="form-group flex">
        <select-field :options="addressType" :selected="addressType[0]" @data="val => address.type = val" />
        <google-places :id="`${i}`" class="ml-2" @data="val => address.description = val" />
        <span v-if="i === addresses.length - 1" class="mt-6 mr-1" @click="addAddress()">
          <i class="mdi mdi-plus" />
        </span>
        <span v-if="i !== 0" class="mt-6 mr-1" @click="removeAddress(i)">
          <i class="mdi mdi-close" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addressType: ['Residential', 'Domicile', 'Legal', 'Operational'],
      addresses: [
        {
          type: 'residential',
          description: ''
        }
      ]
    };
  },
  methods: {
    addAddress () {
      this.addresses.push({
        type: 'residential',
        description: ''
      });
    },
    removeAddress (i) {
      this.addresses.splice(i, 1);
    }
  }
};
</script>

<style>
body {
  background: #ccc;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.mdi {
  font-size: 20px;
}
.card {
  border-radius: 5px;
  min-width: 300px;
}
.p-absolute {
   position: absolute;
}
.p-relative {
   position: relative;
}
</style>
