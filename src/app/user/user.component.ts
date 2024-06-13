import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';

import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [CardComponent],
  styleUrl: './user.component.css'
})

export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true}) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true}) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  // optional output to use instead of the Output decorator
  // select = output<string>();

  // optional signal approach
  // avatar = input.required<string>();
  // name = input.required<string>();

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// })

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser () {
    this.select.emit(this.user.id);
  }
}
