import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import {EventService} from '../../../shared/services/EventServices'

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  constructor(private events: EventService) {}

  @Input() wish! : WishItem

  get cssClasses() {
    // return this.fullfilled ? ['strikethrough', 'text-muted'] : []
    return {
      'strikethrough - text-muted': this.wish.isComplete
    }
  }

  removeWish() {
    this.events.emit('removeWish', this.wish)
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete
  }
}
