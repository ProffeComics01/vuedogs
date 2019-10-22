<template>
  <div id="componentlist">
    <h3>Lista combinata da una chiamata a dogs API (per razze immagini) e dognames npm package</h3>
    <table class="table table-hover">
        <thead>
        <tr>
          <th>Id</th>
          <th @click="sortBy('name')">Name</th>
          <th>Description</th>
          <th>Picture</th>
          <th>Type</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" track-by="id" >
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.description.substr(0,30)}}</td>
          <td>
            <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight">
                <img :id="'img'+item.id" :class="selectedId===item.id||unselectedId===item.id?classname:defaultclass" :alt="item.name" :src="item.picture" height="110" v-on:mouseover="mouseOver(item.id);" v-on:mouseleave="mouseLeave(item.id);">
            </transition>
          </td>
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
import AxiosResponse from 'axios';
import dogNames from 'dog-names'; // = require('dog-names');
import Axios from 'axios';

let dogNamesList: string[];

@Component({
  components: { },
  props: { },
})
export default class ComponentList extends Vue {
  public items: Item[] = [];
  public showpic: boolean = true;
  public defaultclass = 'imgclass';
  public classname = 'imgclass';
  public selectedId = 0;
  public unselectedId = 0;
  public addItem(id: number, name: string, description: string, type: string, done: boolean = false) {
    let picture: string = 'default.png';
    const thisItem = this.items.push({id, name, description, picture, type, done });

    const imgUrl = this.getRandomImg(description)
      .then((response) => {
        if (response.data.message) {
          picture = response.data.message;
          this.items[ thisItem - 1 ].picture = picture;
          this.showpic = true;
        }
      })
      .catch( (error) => {
        console.log(error);
      });

  }

  public getRandomImg = (breed: string) => {
    try {
      return axios.get('https://dog.ceo/api/breed/' + breed + '/images/random');
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  public mouseOver(id: number) {
    this.selectedId = id;
    this.unselectedId = -1;
    this.classname = 'animated tada';
    // console.log('enter');
  }
  public mouseLeave(id: number) {
    this.unselectedId = id;
    this.selectedId = -1;
    this.classname = 'animated bounceIn';
    // console.log('leave');
  }


  public countBreeds = async () => {

    const getBreeds = () => {
      try {
        return axios.get('https://dog.ceo/api/breeds/list/all');
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const breeds = getBreeds()
      .then((response) => {
        if (response.data.message) {
          let elemento = '';
          let id = 0;
          let subBreedsCount = 0;
          const recordCount = Object.entries(response.data.message).length;
          console.log( `Got ${recordCount} breeds` );
          // console.log('skipping composite breed names');
          // console.log(response.data.message);
          for (let i = 0; i < recordCount; i++) {
            ++id; // start from 1
            let randomDogName: string;
            // logic to build the dog breed name from sub-breeds
            const entry: object = Object.entries(response.data.message)[i];
            if ( Array.isArray(entry) ) {
                subBreedsCount = entry[1].length;
                // console.log('subBreeds count:' + subBreedsCount);
                if ( subBreedsCount === 0 ) {
                    randomDogName = dogNames.allRandom(); // get a random dog name
                    elemento = entry[0];
                    this.addItem(id, randomDogName, elemento, 'dog', false);
                    // console.log( 'added: ' + randomDogName + ' un ' + elemento);
                } else {
                    for (let index = 0; index < subBreedsCount; index++) {
                      ++id;  // start from 1
                      randomDogName = dogNames.allRandom(); // get a random dog name
                      elemento = entry[0] + '/' +
                      entry[1][index];
                      this.addItem(id, randomDogName, elemento, 'dog', false);
                      // console.log( 'added: ' + randomDogName + ' un ' + elemento);
                    }
                }
            }

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
    // console.log(dogNamesList);
    this.countBreeds();
  }

}
</script>
<style scoped>
.table {
  background-color: rgba(0, 45, 103, 0.5);
  border: 1px dashed #444;
  padding: 5px;
  margin:auto;
  width: 100%;
}
.table th {
  background-color: rgba(89, 145, 193, 0.5);
}
.table tr:nth-child(odd) {
  background-color:  rgb(89, 145, 193);
} 
.table tr:nth-child(even) {
  background-color: rgb(70, 175, 223);
}
/* transitions */
.imgclass{
  border: 1px solid #dd5522;
}
</style>