# Nuxt@2.4.5 Issue with modules that edit native JS objects `prototype`s.

## Usage

```bash
git clone git@github.com:voronianski/nuxt-2.4.5-prototype-issue.git
cd nuxt-2.4.5-prototype-issue
npm i
npm run dev
```

## Solution

```js
// nuxt.config.js
render: {
  bundleRenderer: {
    runInNewContext: false
  }
}
```

Detailed explanation is available here - https://github.com/nuxt/nuxt.js/issues/5178.

## What's the problem?

This dummy project is created to show the problem that appears only in `Nuxt@2.4.x` and is not present in `Nuxt@2.3.x`.
 
##### 1. the project uses NPM module [`vue-string-format`](https://www.npmjs.com/package/vue-string-format) created to reproduce the issue

##### 2. `vue-string-format` NPM module just adds `format` function to `String.prototype` and registers it as Vue filter

```js
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
```

##### 3. it is used in `plugins/index.js`:

```js
import Vue from 'vue';
import StringFormat from 'vue-string-format';

export default () => {
  Vue.use(StringFormat);
};
```

##### 4. in `pages/index.vue` the format function is used on the string directly

```vue
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
```

##### 5. when running the project it returns an error in template

```bash
 ERROR  [Vue warn]: Error in render: "TypeError: "Title - {0}".format is not a function"

found in

---> <Src/pages/index.vue> at src/pages/index.vue
       <Nuxt>
         <.nuxt/layouts/default.vue> at .nuxt/layouts/default.vue
           <Root>
```

### SO FOR SOME REASON `format` FUNCTION WAS REMOVED FROM `String.prototype`

P.S. If you will try to use `vendor/string-format.js` and not NPM module everything will be fine:

```js
import Vue from 'vue';
// import StringFormat from 'vue-string-format';
import StringFormat from '../vendor/string-format';

export default () => {
  Vue.use(StringFormat);
};

```

---
