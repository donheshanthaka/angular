import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import {EventService} from '../../shared/services/EventServices'
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
  
  items : WishItem[] = []
  filter : any
  
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) => {
      console.log(wish)
      let index = this.items.indexOf(wish)
      this.items.splice(index, 1)
    })
  }
  
  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
      this.items = data
    },
    (error: any) => {
      alert(error.message)
    }
    )
  }

}
