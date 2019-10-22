<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_tr.png" width="80">
    <HelloWorld msg="My first Vue/TypeScript doggy Application"/>
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
