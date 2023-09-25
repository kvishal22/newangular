import { Component } from '@angular/core';
import { WishItem } from 'src/app/shared/services/models/wishItems';
import events from './shared/services/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:WishItem[] =[ 
    new WishItem('moisturiser'),  
    new WishItem('cleanser'),
    new WishItem('face wash',true)
  ];

  constructor(){
      events.listen('removeWish',(wish :any)=>{
        let index =this.items.indexOf(wish);
        this.items.splice(index,1);
      }
      )
  }

  title="";
  filter:any;
  
}
