import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import { WishItem } from 'src/models/wishItems';
@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent implements OnInit{

  @Output() addWish = new EventEmitter<WishItem>

  ngOnInit(): void {
  }

  constructor(){}

  newWishText='';

  addNewWish(){
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText='';
  }
  
}
