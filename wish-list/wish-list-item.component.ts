import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from './wish-list.model'
import { WishListService } from './wish-list.service';


@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {
  @Input() item: WishItem;

  constructor(private wishListService: WishListService) { }

  deleteBtn() {
    this.wishListService.deleteItem(this.item);
  }
  ngOnInit(): void {
  }

}
