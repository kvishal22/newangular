import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/app/shared/services/models/wishItems';
import { EventService } from './shared/services/services/EventService';
import { WishService } from './wish.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items:WishItem[] =[];

  constructor(events: EventService,private wishService: WishService){
      events.listen('removeWish',(wish :any)=>{
        let index =this.items.indexOf(wish);
        this.items.splice(index,1);
      }
      )
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any)=> {
      this.items=data;
    },
    (error:any) =>{
      alert(error.message);
    }
    );
  }

  title="";
  filter:any;
  
}
