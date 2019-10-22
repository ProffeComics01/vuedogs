<template>
  <flipbook class="flipbook" :pages="['array', 'of', 'image', 'URLs']"></flipbook>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
/* import Flipbook from 'flipbook-vue'; */
const pages = [ null, 'images/1.jpg', 'images/2.jpg', 'images/3.jpg',  'images/4.jpg'];
const pagesHiRes = [ null, 'images/1.jpg', 'images/2.jpg', 'images/3.jpg',  'images/4.jpg'];
const hasMouse = true;

@Component({
  components: { /* Flipbook */ },
  /* props: {pages, pagesHiRes, hasMouse }, */
})

export default class About extends Vue {
  public membersList: string[] = [];

}

</script>
<style>
.flipbook .viewport {
  width: 90vw;
  height: 90vh;
}
</style>