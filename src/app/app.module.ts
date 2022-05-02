import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from "@angular/material/dialog";
import { HighchartsChartModule } from 'highcharts-angular';
import { Tab3Page } from './tab3/tab3.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http'
 @NgModule({
  declarations: [
    AppComponent,
    Tab3Page
  ],
  entryComponents: [Tab3Page],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule, 
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatDialogModule,
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule],
  providers: [
    HttpClient,
    { provide: 
    RouteReuseStrategy, 
    useClass: IonicRouteStrategy,
    
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
