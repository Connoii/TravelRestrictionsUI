import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelGridComponent } from './components/travel-grid/travel-grid.component';

const routes: Routes = [
  {
    path: 'home',
    component: TravelGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
