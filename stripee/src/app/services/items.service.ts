import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items:Item[] = [
    {
      id:1000,
      name:"Salsa",
      description:"organic",
      image:"/assets/img/chamoyCubeta.webp",
      price:400,
      alt: 'salsa'
    },
    {
      id:1001,
      name:"Chamoyada",
      description:"organic",
      image:"/assets/img/TINAYADA.webp",
      price:500,
      alt: 'chamoyada'
    }
  ]
  constructor() {
    this.itemsSubject.next(this.items);
  }
  private itemsSubject = new BehaviorSubject<Item[]>([]);
  public items$ = this.itemsSubject.asObservable();
}
