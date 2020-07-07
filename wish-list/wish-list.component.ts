import { Component, OnInit } from '@angular/core';
import { WishListService } from './wish-list.service';
import { WishItem } from './wish-list.model';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  existItems: WishItem[] = [];
  defaulttext: string = 'type your task name...';
  defaultlink: string = 'type your task URL...';

  _newItemName: string = '';
  get newItemName(): string {
    return this._newItemName;
  }
  set newItemName(value: string) {
    this._newItemName = value;
  }

  _newItemURL: string = '';
  get newItemURL(): string {
    return this._newItemURL;
  }
  set newItemURL(URLvalue: string) {
    this._newItemURL = URLvalue;
  }
  constructor(private wishListService: WishListService) { }

  ngOnInit(): void {
    this.existItems = this.wishListService.getAllItems();
  }

  addToListClick(myname, mylink) {
    this.wishListService.addNewItem(new WishItem(myname, mylink));
    this._newItemName = '';
    this._newItemURL = '';
  }

}
