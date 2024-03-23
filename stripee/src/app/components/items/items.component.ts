import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model'; 
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  constructor(private itemService:ItemsService){

  }
  public items$: Observable<Item[]> = this.itemService.items$;
}
