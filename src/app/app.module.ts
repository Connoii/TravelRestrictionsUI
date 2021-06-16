import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TravelGridComponent } from './components/travel-grid/travel-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './components/crud/crud.component';
import { RestrictionService } from './services/restriction.service';

@NgModule({
  declarations: [
    AppComponent,
    TravelGridComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [RestrictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
