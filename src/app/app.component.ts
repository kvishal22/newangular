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
    new WishItem('cleanser'),
    new WishItem('face wash',true)
  ];
  title="";
  filter:any;
  
}
