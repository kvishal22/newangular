import { Component,Output,EventEmitter,Input } from '@angular/core';
import { WishItem } from 'src/app/shared/services/models/wishItems';

const filters=[
  (item : WishItem)=>item,
  (item : WishItem)=>item.isComplete,
  (item : WishItem)=>!item.isComplete
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent {
  @Input() filter:any;
  @Output() filterChange = new EventEmitter<any>();
  
  ngOnInit(): void {
      this.updateFilter('0');
  }

  listFilter: any='0';

  updateFilter(value:any){
      this.filter=filters[value];
        this.filterChange.emit(this.filter);
  }
}
