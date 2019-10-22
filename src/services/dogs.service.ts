import axios from 'axios';

import Item from './../classes/Item';

const api = 'api';

class DogsService {
  constructor() {
    console.log('creating new instance of dogs.service');
  }

  public deleteHero(item: Item) {
    return axios.delete(`${api}/item/${item.id}`);
  }
  public getBreeds() {
    return axios.get<Item[]>(`${api}/breeds/list`);
  }
  public addItem(item: Item) {
    return axios.post(`${api}/item/`, { item });
  }
  public updateHero(item: Item) {
    return axios.put(`${api}/item/${item.id}`, { item });
  }
}

// Export a singleton instance in the global namespace
export const dogsService = new DogsService();
