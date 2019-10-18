<template>
  <div id="componentlist">
    <h3>Lista dei componenti</h3>
    <table class="table table-hover" style="width:90%;margin:50px;">
        <thead>
        <tr>
          <th>Item Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Done</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" track-by="id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.description.substr(0,30)}}</td>
          <td>{{item.type}}</td>
          <td><input type="checkbox" :value=item.done></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import Item from '@/classes/Item.ts';
import axios from 'axios';
import dogNames from 'dog-names'; // = require('dog-names');

let dogNamesList: string[];

@Component({
  components: { },
})
export default class ComponentList extends Vue {

  public items: Item[] = [];
  // constructor(iaxios: axios) { }


  public addItem(id: number, name: string, description: string, type: string, done: boolean = false) {
    this.items.push({id, name, description, type, done });
  }

  public getBreeds = () => {
    try {
      return axios.get('https://dog.ceo/api/breeds/list/all');
    } catch (error) {
      console.error(error);
    }
  }

  public countBreeds = async () => {
    const breeds = this.getBreeds()
      .then((response) => {
        if (response.data.message) {
          console.log( `Got ${Object.entries(response.data.message).length} breeds` );
          for (let i = 0; i < Object.entries(response.data.message).length; i++) {
            const element: string = Object.entries(response.data.message)[i].toString();
            this.addItem(i, dogNamesList[i], element, 'dog', false);
          }
        }
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  // Lifecycle hooks
  public created() {
    dogNamesList = dogNames.all;
    console.log(dogNamesList);
    // dogNamesList = dogNames.allRandom();
    const getBreeds = async () => {
      try {
        return await axios.get('https://dog.ceo/api/breeds/list/all');
      } catch (error) {
        console.log(error);
      }
    };
    this.countBreeds();
  }
  /*
  onClick (): void{}
  mounted (): void{}
  mounted () { }
  updated () { }
  destroyed () { }
  */
}
</script>
<style scoped>

</style>