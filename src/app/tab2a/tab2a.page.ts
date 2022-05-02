import { Component, OnInit, ViewChild } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
import { MatDialog } from '@angular/material/dialog';
import { areaChartOptions } from './areaChartOptions';
import { Chart } from 'angular-highcharts';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-tab2a',
  templateUrl: './tab2a.page.html',
  styleUrls: ['./tab2a.page.scss'],
})

export class Tab2aPage implements OnInit {

  totally = {
    total: 100
  };

  areaChart = new Chart(areaChartOptions);
  
  budgetItems: BudgetItem[] = new Array<BudgetItem>(); //initialize the array
  totalBudget: number = 0;
  totalExpenses: number = 0;
  totalEarnings: number = 0;
  currentVal = 0;
  MonthlyVal = 0;
  WeeklyVal = 0;

  constructor(
    public matDialog: MatDialog,
    private storage: Storage
    ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  ngAfterViewInit() {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
    //this.progress = this.totalBudget/this.currentVal;
    //this.currentPercentage = this.progress*100;

    if(newItem.amount < 0){
      this.totalExpenses += newItem.amount;
    }
    else {
      this.totalEarnings += newItem.amount;
    }
  }

  //Deleting an item
  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent){
            //result is the updated budget item
        //replace the item with the submitted/updated item from the actual form
        this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

        //update the total budget
        this.totalBudget -= updateEvent.old.amount;
        this.totalBudget += updateEvent.new.amount;
  }

  getVal(val)
  {
    console.warn(val);
    this.currentVal = val;
  }
  getMonthlyVal(val2)
  {
    console.warn(val2);
    this.MonthlyVal = val2;
  }
  getWeeklyVal(val3)
  {
    console.warn(val3);
    this.WeeklyVal = val3;
  }

}
