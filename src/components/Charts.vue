<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueHighcharts from 'highcharts-vue';
import Highcharts from 'highcharts';

// load these modules as your need
import loadMap from 'highcharts/modules/map.js';

loadMap(Highcharts);
Vue.use(VueHighcharts, { Highcharts });

@Component

export default class Charts extends Vue {
    /* @Prop() private msg!: string; */
    public msg = 'HighCharts component loaded';
}
</script>