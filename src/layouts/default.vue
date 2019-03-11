<template lang="pug">
  wrapper
    header Header
    nuxt
</template>

<script>
import Vue from 'vue';
import StringFormat from 'vue-string-format';
// import StringFormat from '../vendor/string-format';

export default {
  created() {
    Vue.use(StringFormat);
  }
};
</script>
