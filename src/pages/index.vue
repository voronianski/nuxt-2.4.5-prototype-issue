<template lang="pug">
  .main-page
    h3 {{title}}
</template>

<script>
export default {
  computed: {
    title() {
      return 'Title - {0}'.format('index page');
    }
  }
};
</script>
