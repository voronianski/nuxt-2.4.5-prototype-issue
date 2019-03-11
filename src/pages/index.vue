<template lang="pug">
  .main-page
    h3 {{title}}
</template>

<script>
import Vue from 'vue';
import StringFormat from 'vue-string-format';

export default {
  created() {
    Vue.use(StringFormat);
  },

  computed: {
    title() {
      return 'Title - {0}'.format('index page');
    }
  }
};
</script>
