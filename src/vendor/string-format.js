export default {
  install(Vue) {
    if (!String.prototype.format) {
      String.prototype.format = function(...args) {
        return this.replace(/{(\d+)}/g, function(match, number) {
          return typeof args[number] !== 'undefined' ? args[number] : match;
        });
      };
    }

    Vue.filter('format', (value, ...args) => {
      return value.format(args);
    });
  }
};
