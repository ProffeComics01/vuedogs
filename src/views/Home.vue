<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_tr.png">
    <HelloWorld msg="Welcome to my very first Vue.js + TypeScript Application"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import VueHighcharts from 'highcharts-vue';
import Highcharts from 'highcharts';

// load these modules as your need
import loadMap from 'highcharts/modules/map.js';

loadMap(Highcharts);
Vue.use(VueHighcharts, { Highcharts });

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
