import { Injectable } from '@angular/core';
import { WishItem } from './wish-list.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  items: WishItem[] = [
    {
      "name": "DRESS",
      "link": "https://e-svadba.com.ua/svadebnye-platya/svadebnoe-plate-a-siluet-cheryl.html"
    },
    {
      "name": "shoes",
      "link": "https://www.laceandfavour.com/shoes"
    }
  ];

  constructor() { }

  addNewItem(itemToAdd: WishItem) {
    if (itemToAdd.name === "" || itemToAdd.link == "") {
      console.log('Write the name and link');
      return;
    }

    else {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name===itemToAdd.name) {
          console.log('This name already exist');
          return;
        }
      }
      this.items.push(itemToAdd);
    }
  };

  deleteItem(itemToDelete: WishItem) {
    this.items.splice(this.items.indexOf(itemToDelete), 1);
  };

  getAllItems(): WishItem[] {
    return this.items;
  };
}
