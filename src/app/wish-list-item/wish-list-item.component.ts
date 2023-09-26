import { Component,Output,Input,EventEmitter } from '@angular/core';
import { WishItem } from '../shared/services/models/wishItems';
import { EventService } from '../shared/services/services/EventService';

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
  constructor(private events:EventService){

  }
  removeWish(){
      this.events.emit('removeWish',this.wish);
  }

  toggleFulfilled(){
    this.wish.isComplete=!this.wish.isComplete;
  }
}
