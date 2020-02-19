import axios from 'axios';
import Item from './../classes/Item';

const api = 'https://dog.ceo/api';

class DogsService {
  constructor() {
    console.log('creating new instance of dogs.service');
  }

  public getBreeds() {
    return axios.get(`${api}/breeds/list/all`);
  }
  public getRandomImg(breed: string) {
    return axios.get(`${api}/breed/` + breed + `/images/random`);
  }
  // unused methods
  public addItem(item: Item) {
    return axios.post(`${api}/item/`, { item });
  }
  public updateDog(item: Item) {
    return axios.put(`${api}/item/${item.id}`, { item });
  }
  public deleteDog(item: Item) {
    return axios.delete(`${api}/breeds/${item.id}`);
  }
}

// Export a singleton instance in the global namespace
export const dogsService = new DogsService();
