import { Component,Output,Input,EventEmitter } from '@angular/core';
import events from '../shared/services/services/EventService';
import { WishItem } from '../shared/services/models/wishItems';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {

  @Input() wish! : WishItem;
  

  get cssClass(){
    //return this.fulfilled ? ['strikeout','text-muted'] : '[]';
      return {'strikeout text-muted':this.wish.isComplete};
  }

  removeWish(){
      events.emit('removeWish',this.wish);
  }

  toggleFulfilled(){
    this.wish.isComplete=!this.wish.isComplete;
  }
}
