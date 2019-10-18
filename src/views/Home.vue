<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_tr.png">
    <HelloWorld msg="Welcome to my very first Vue.js + TypeScript Application"/>
    <ComponentList msg="Component List"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Charts from '@/components/Charts.vue';
import ComponentList from '@/components/ComponentList.vue';

@Component({
  components: {
    HelloWorld, ComponentList, Charts,
  },
})
export default class Home extends Vue {
}

</script>
