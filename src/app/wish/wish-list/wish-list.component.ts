import { Component,Input } from '@angular/core';
import { WishItem } from 'src/app/shared/services/models/wishItems';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent{

  
  @Input() wishes:WishItem[]=[];
  

  

}
