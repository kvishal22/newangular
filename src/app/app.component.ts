import { Component } from '@angular/core';
import { WishItem } from 'src/models/wishItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:WishItem[] =[ 
    new WishItem('moisturiser'),
    new WishItem('cleanser',true),
    new WishItem('face wash')
  ];

  filter:any=()=>{};

  get visibleItems():WishItem[]{
    return this.items.filter(this.filter);
  };


  
  
  
}
