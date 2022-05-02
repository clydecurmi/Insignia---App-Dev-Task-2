import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() DeleteButtonClick: EventEmitter<void> = new EventEmitter<void>();
  //The parent component already knows what item to delete because they are passing the item to this component as well as binding to the click event.
  @Output() cardClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  onDeleteButtonClick(){
    //need to emit an event by eventEmitter
    this.DeleteButtonClick.emit();
  }

  onCardClick(){
    this.cardClick.emit();
  }

}
