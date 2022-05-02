import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddItemFormComponent } from '../add-item-form/add-item-form.component';
import { BudgetItemListComponent } from '../budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from '../budget-item-list/budget-item-card/budget-item-card.component';
import { IonicModule } from '@ionic/angular';
import { Tab2aPageRoutingModule } from './tab2a-routing.module';
import { Tab2aPage } from './tab2a.page';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ChartModule } from 'angular-highcharts'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2aPageRoutingModule,
    ChartModule
  ],
  entryComponents: [EditItemModalComponent],
  declarations: [Tab2aPage, 
    AddItemFormComponent,
    BudgetItemListComponent, 
    BudgetItemCardComponent, 
    EditItemModalComponent
  ]
})
export class Tab2aPageModule {}
