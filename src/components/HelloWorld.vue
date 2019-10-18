<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Highcharts from 'highcharts';
import VueHighcharts from 'highcharts-vue';

// load these modules as your need
import loadMap from 'highcharts/modules/map.js';

loadMap(Highcharts);
Vue.use(VueHighcharts, { Highcharts });

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}


Highcharts.setOptions({
  // options here
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {background-color: #19a19b;}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
